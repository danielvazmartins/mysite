import { NgModule } from "@angular/core";

import { InputFieldModule } from './input-field/input-field.module';
import { SelectModule } from './select/select.module';
import { TextareaFieldModule } from './textarea-field/textarea-field.module';

@NgModule({
    imports: [
        InputFieldModule,
        SelectModule
    ],
    exports: [
        InputFieldModule,
        SelectModule,
        TextareaFieldModule
    ]
})
export class FormModule {}