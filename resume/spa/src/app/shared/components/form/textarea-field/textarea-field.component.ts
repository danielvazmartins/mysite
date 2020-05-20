import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-textarea-field',
    templateUrl: './textarea-field.component.html',
    styleUrls: ['./textarea-field.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TextareaFieldComponent), multi: true
    }]
})
export class TextareaFieldComponent implements ControlValueAccessor{
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