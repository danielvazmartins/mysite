import { Component, Input, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { SelectOption } from 'src/app/shared/interfaces/select-option.interface';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SelectComponent), multi: true
    }]
})
export class SelectComponent implements ControlValueAccessor {
    @Input() label: string
    @Input() options: SelectOption[]

    value: String

    writeValue(obj: string): void {
        this.value = obj
    }
    registerOnChange(fn: any): void {
        this.onChange = fn
    }
    registerOnTouched(fn: any): void {}

    onChange(value) {}
}