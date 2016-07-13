import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Torrent, TorrentModel} from "./../../shared/torrent";
import {TorrentService} from './../../services/torrentService';
@Component({
    selector: 'list-file',
    providers: [TorrentService],
    templateUrl: 'pages/list/list.view.html'
})
export class ListPageComponent implements OnInit, OnDestroy {
    private sub: any;
    private torrent: Torrent;
    private torrents: Torrent[];
    private totalCount: number;
    private isLoading = false;
    private colors: string[] = ["#f16364", "#663cb5", "#e61564", "#e4c62e", "#67bf74", "#59a2be", "#2093cd", "#ad62a7"];
    constructor(private route: ActivatedRoute, private router: Router, private torrentService: TorrentService) {

    }
    ngOnInit() {
        this.isLoading = true;
        this.totalCount = 0;
        let self = this;
        self.sub = self.router.routerState.queryParams.subscribe(params => {
            this.torrentService.findTorrents(params['text'], params['filter']).then((model: TorrentModel) => {
                self.torrents = this.colorTheCards(model.torrents);
                self.totalCount = model.total;
                self.isLoading = false;
            }, (err) => self.router.navigate(['/']));
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onNavBtnTap() {
        this.router.navigate(['/']);
    }
    onItemTap(e: Event, torrent: Torrent) {
        alert('to do' + torrent.torrent_hash);
    }
    private colorTheCards(torrents: Torrent[]): Torrent[] {
        let length = this.colors.length - 1;
        return torrents.filter(x => {
            x.color = this.colors[Math.floor(Math.random() * length)];
            return true;
        });
    }
}