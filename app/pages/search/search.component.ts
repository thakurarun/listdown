import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {ModalDialogService, ModalDialogOptions, ModalDialogHost, ModalDialogParams} from "nativescript-angular/modal-dialog";
import {DialogContent} from './filterDialog'
import {Router} from "@angular/router";
@Component({
    selector: 'search-item',
    directives: [ModalDialogHost],
    providers: [ModalDialogService],
    template: `
    <StackLayout>
    <ActionBar title="List Down"></ActionBar>
      <Label text="Search Any Torrent"></Label>
      <TextField hint="any torrent" [(ngModel)]="searchText"></TextField>
      <Button text="Search" (tap)="searchItem()"></Button>
     <StackLayout modal-dialog-host>
        <Button text="Filters" (tap)="show()"></Button>
    </StackLayout>
    </StackLayout>
  `
})
export class SearchPageComponent {
    searchText: string;
    result: string;
    constructor(private _router: Router, private modalService: ModalDialogService) {
    }
    public show(fullscreen: boolean) {
        var options: ModalDialogOptions = {
            context: { promptMsg: "This is the prompt message!" },
            fullscreen: true
        };

        this.modalService.showModal(DialogContent, options)
            .then((dialogResult: string) => { this.result = dialogResult; })
    }
    searchItem() {
        if (this.searchText && this.searchText.trim().length)
            this._router.navigate(['/List', this.searchText.trim()]);
    }
}