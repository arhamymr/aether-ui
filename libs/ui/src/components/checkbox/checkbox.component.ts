import { Component, input, output, forwardRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <label class="flex items-center gap-2 cursor-pointer" [class.cursor-not-allowed]="isDisabled()">
      <input
        type="checkbox"
        [checked]="isChecked()"
        [disabled]="isDisabled()"
        [indeterminate]="isIndeterminate()"
        (change)="onCheckboxChange($event)"
        (blur)="onBlur()"
        class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer
               disabled:cursor-not-allowed disabled:opacity-50" />
      @if (label()) {
        <span class="text-sm text-gray-700" [class.opacity-50]="isDisabled()">{{ label() }}</span>
      }
      <ng-content />
    </label>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {
  label = input<string>('');
  isIndeterminate = input<boolean>(false);
  isDisabled = signal(false);
  isChecked = signal(false);
  onChange = output<boolean>();

  private _onChange: (value: boolean) => void = () => {};
  private _onTouched: () => void = () => {};

  writeValue(value: boolean): void {
    this.isChecked.set(value ?? false);
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }

  onCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;
    this.isChecked.set(checked);
    this._onChange(checked);
    this.onChange.emit(checked);
  }

  onBlur(): void {
    this._onTouched();
  }

  cn = cn;
}
