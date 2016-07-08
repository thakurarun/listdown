import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Torrent} from "./../../shared/torrent";
import {TorrentService} from './../../services/torrentService';
@Component({
    selector: 'list-file',
    providers: [TorrentService],
    template: `
    <StackLayout>
      <Label text="List Torrents"></Label>
      <ListView [items]="torrents" (itemTap)="onItemTap($event)">
    <template let-item="item" let-i="index" let-odd="odd" let-even="even">
        <StackLayout [class.odd]="odd" [class.even]="even">
            <Label [text]='item.title'></Label>
        </StackLayout>
    </template>
</ListView>
    </StackLayout>
  `
})
export class ListPageComponent implements OnInit, OnDestroy {
    private sub: any;
    private torrent: Torrent;
    private torrents: Torrent[];
    constructor(private route: ActivatedRoute, private router: Router, private torrentService: TorrentService) {

    }
    ngOnInit() {
        let self = this;
        self.sub = self.route.params.subscribe(params => {
            this.torrentService.findTorrents(params['text']).then((data: Torrent[]) => {
                this.torrents = data;
            }, (err) => this.router.navigate(['/']));
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onNavBtnTap() {
        this.router.navigate(['/']);
    }
    onItemTap(){
        alert('to do');
    }
}