import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Torrent, TorrentModel} from "./../../shared/torrent";
import {TorrentService} from './../../services/torrentService';
@Component({
    selector: 'list-file',
    providers: [TorrentService],
    templateUrl:'pages/list/list.view.html'
})
export class ListPageComponent implements OnInit, OnDestroy {
    private sub: any;
    private torrent: Torrent;
    private torrents: Torrent[];
    private totalCount :number;
    constructor(private route: ActivatedRoute, private router: Router, private torrentService: TorrentService) {

    }
    ngOnInit() {
        this.totalCount = 0;
        let self = this;
        self.sub = self.route.params.subscribe(params => {
            this.torrentService.findTorrents(params['text']).then((model: TorrentModel) => {
                self.torrents = model.torrents;
                self.totalCount = model.total;
            }, (err) => self.router.navigate(['/']));
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onNavBtnTap() {
        this.router.navigate(['/']);
    }
    onItemTap() {
        alert('to do');
    }
}