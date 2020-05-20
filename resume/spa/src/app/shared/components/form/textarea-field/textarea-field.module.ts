import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { TextareaFieldComponent } from './textarea-field.component';

@NgModule({
    declarations: [
        TextareaFieldComponent
    ],
    imports: [
        FormsModule
    ],
    exports: [
        TextareaFieldComponent
    ]
})
export class TextareaFieldModule {}