import {Component} from '@angular/core';
import {Router} from "@angular/router";
@Component({
    selector: 'search-item',
    template: `
    <StackLayout>
      <Label text="Search Item"></Label>
      <TextField hint="any torrent" [(ngModel)]="searchText" text=""></TextField>
      <<Button text="Search" (tap)="searchItem()"></Button>
    </StackLayout>
  `
})
export class SearchPageComponent {
    searchText: string;
    constructor(private _router: Router) {

    }
    searchItem() {
        console.log(this.searchText);
        this._router.navigate(['/List',this.searchText] );
    }
}