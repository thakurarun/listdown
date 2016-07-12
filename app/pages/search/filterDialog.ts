import {ViewChild, ViewChildren, Component} from '@angular/core';
import {ModalDialogParams} from "nativescript-angular/modal-dialog";
import {Filter, FilterCategory} from "./../../shared/filters"
@Component({
    selector: 'modal-content',
    templateUrl: 'pages/search/filter.dialog.view.html'
})
export class DialogContent {
    public prompt: string;
    @ViewChildren(DialogContent) children: DialogContent;
    public filters: Array<FilterCategory>;
    constructor(private params: ModalDialogParams) {
        this.prompt = params.context.promptMsg;
        this.filters = new Array<FilterCategory>();
        Object.keys(Filter).filter(x => !+x).forEach(x => {
            this.filters.push(new FilterCategory(x, false));
        });
    }
    public close(result: string) {
        this.params.closeCallback(this.filters.filter(x => !!x.checked));
    }
    private checkFilters() {
        console.log("item checked: " + this.filters.filter(x => !!x.checked).length)
    }
}