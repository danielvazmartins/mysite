import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { InputFieldComponent } from './input-field.component';

@NgModule({
    declarations: [
        InputFieldComponent
    ],
    imports: [
        FormsModule
    ],
    exports: [
        InputFieldComponent
    ]
})
export class InputFieldModule {}