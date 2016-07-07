import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'list-file',
    template: `
    <StackLayout>
      <Label text="List Torrents">
      </Label>
      <Label textWrap="true" [text]="searchText"></Label>
    </StackLayout>
  `
})
export class ListPageComponent implements OnInit, OnDestroy {
    searchText: string;
    private sub: any;
    constructor(private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
        console.log('search screen called');
        let self = this;
        self.sub = self.route.params.subscribe(params => {
            self.searchText = params['text']; 
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}