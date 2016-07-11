import {ViewChild, ViewChildren, Component} from '@angular/core';
import {ModalDialogParams} from "nativescript-angular/modal-dialog";
import {Filter, FilterCategory} from "./../../shared/filters"
@Component({
    selector: 'modal-content',
    template: `
    <StackLayout margin="24" horizontalAlignment="center" verticalAlignment="center">
      <ListView [items]="filters">
          <template let-item="item" let-odd="odd" let-even="even">
              <StackLayout orientation="horizontal">
                  <Switch [checked]="item.checked" [text]="item.filter" ></Switch>
              </StackLayout>
          </template>
      </ListView>
        <StackLayout orientation="horizontal" marginTop="12">
            <Button text="ok" (tap)="close('OK')"></Button>
            <Button text="cancel" (tap)="close('Cancel')"></Button>
        </StackLayout>
    </StackLayout>
    `
})
export class DialogContent {
    public prompt: string;
    @ViewChildren(DialogContent) children: DialogContent;
    public filters: Array<FilterCategory>;
    constructor(private params: ModalDialogParams) {
        this.prompt = params.context.promptMsg;
        this.filters = new Array<FilterCategory>();
        Object.keys(Filter).map(x => {
            this.filters.push(new FilterCategory(x, false));
        });
    }

    ngAfterViewInit() {
        // children are set

    }
    public close(result: string) {
        this.params.closeCallback(result);
    }
}