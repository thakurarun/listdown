import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
@Component({
    selector: 'search-item',
    template: `
    <StackLayout>
    <ActionBar title="List Down"></ActionBar>
      <Label text="Search Item"></Label>
      <TextField hint="any torrent" [(ngModel)]="searchText"></TextField>
      <Button text="Search" (tap)="searchItem()"></Button>
    </StackLayout>
  `
})
export class SearchPageComponent {
    searchText: string;
    constructor(private _router: Router) {
    }
    searchItem() {
        if (this.searchText && this.searchText.trim().length)
            this._router.navigate(['/List', this.searchText.trim()]);
    }
}