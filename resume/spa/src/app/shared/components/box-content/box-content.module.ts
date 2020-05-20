import { NgModule } from "@angular/core";

import { BoxContentComponent } from './box-content.component';

@NgModule({
    declarations: [
        BoxContentComponent
    ],
    exports: [
        BoxContentComponent
    ]
})
export class BoxContentModule {}