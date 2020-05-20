import { Component, Input, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'app-input-field',
    templateUrl: './input-field.component.html',
    styleUrls: ['./input-field.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputFieldComponent), multi: true
    }]
})
export class InputFieldComponent implements ControlValueAccessor {
    @Input() label: string
    @Input() placeholder: string = ''

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