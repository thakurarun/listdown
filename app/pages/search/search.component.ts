import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {ModalDialogService, ModalDialogOptions, ModalDialogHost, ModalDialogParams} from "nativescript-angular/modal-dialog";
import {TNSFontIconService, TNSFontIconPipe} from 'nativescript-ng2-fonticon';
import {Filter, FilterCategory} from "./../../shared/filters"
import {DialogContent} from './filterDialog'
import {Router} from "@angular/router";
@Component({
    selector: 'search-item',
    directives: [ModalDialogHost],
    providers: [ModalDialogService],
    pipes: [TNSFontIconPipe],
    template: `
    <StackLayout>
    <ActionBar title="List Down"></ActionBar>
      <Label text="Search Any Torrent"></Label>
      <TextField hint="any torrent" [(ngModel)]="searchText"></TextField>
      <Label class="fa" text="{{'fa-bluetooth' | fonticon}}"></Label> 
     <StackLayout modal-dialog-host>
        <Button text="Filter & Search" (tap)="show()"></Button>
    </StackLayout>
    </StackLayout>
  `
})
export class SearchPageComponent {
    searchText: string;
    filters: Array<FilterCategory>;
    constructor(private _router: Router, private modalService: ModalDialogService, private fonticon: TNSFontIconService) {
        this.searchText = "robot";
    }
    public show(fullscreen: boolean) {
        if (this.searchText.trim().length < 3) {
            alert("minimum 3 characters required.");
            return;
        }
        var options: ModalDialogOptions = {
            context: { promptMsg: "find particulars" },
            fullscreen: true
        };
        this.modalService.showModal(DialogContent, options)
            .then((dialogResult: Array<FilterCategory>) => {
                this.filters = dialogResult;
                this.searchItem();
            });
    }
    private searchItem() {
        let filters = this.filters.map(x => Filter[x.filter]);
        if (this.searchText.trim().length > 2)
            this._router.navigate(['/List'], { queryParams: { text: this.searchText.trim(), filter: filters[0] } });
    }
}