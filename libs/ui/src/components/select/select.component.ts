import { Component, input, output, signal, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { cn } from '../../lib/cn';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
  icon?: string;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="relative">
      <button
        type="button"
        class="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg
               bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
               disabled:opacity-50 disabled:cursor-not-allowed"
        [disabled]="isDisabled()"
        (click)="onToggle()"
        [attr.aria-expanded]="isOpen()"
        [attr.aria-labelledby]="ariaLabelledBy()">
        @if (placeholder() && !selectedLabel()) {
          <span class="text-gray-500">{{ placeholder() }}</span>
        }
        @if (selectedLabel()) {
          <span>{{ selectedLabel() }}</span>
        }
        <i class="material-icons text-sm transition-transform" [class.rotate-180]="isOpen()">expand_more</i>
      </button>
      @if (isOpen()) {
        <div
          class="absolute z-50 w-full mt-1 py-1 bg-white rounded-lg shadow-lg border border-gray-200
                 max-h-60 overflow-auto"
          role="listbox"
          [attr.aria-label]="ariaLabel()">
          @for (option of filteredOptions; track option.value) {
            <button
              type="button"
              class="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-900
                     hover:bg-gray-100 focus:outline-none focus-visible:bg-gray-100
                     disabled:opacity-50 disabled:cursor-not-allowed"
              [class.bg-blue-50]="modelValue() === option.value"
              [class.text-blue-600]="modelValue() === option.value"
              [disabled]="option.disabled"
              role="option"
              [attr.aria-selected]="modelValue() === option.value"
              (click)="onSelect(option)">
              @if (option.icon) {
                <i class="material-icons text-sm">{{ option.icon }}</i>
              }
              <span>{{ option.label }}</span>
              @if (modelValue() === option.value) {
                <i class="material-icons text-sm ml-auto">check</i>
              }
            </button>
          }
          @if (filteredOptions.length === 0) {
            <div class="px-3 py-2 text-sm text-gray-500">{{ noResultsText() }}</div>
          }
        </div>
      }
    </div>
  `
})
export class SelectComponent implements ControlValueAccessor {
  options = input<SelectOption[]>([]);
  placeholder = input<string>('Select an option');
  ariaLabel = input<string>('');
  ariaLabelledBy = input<string>('');
  noResultsText = input<string>('No results found');
  searchEnabled = input<boolean>(false);
  disabled = signal(false);
  modelValue = signal('');
  isOpen = signal(false);
  searchQuery = signal('');
  changed = output<string>();
  opened = output<void>();
  closed = output<void>();

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  get filteredOptions(): SelectOption[] {
    let opts = this.options();
    if (this.searchEnabled() && this.searchQuery()) {
      const query = this.searchQuery().toLowerCase();
      opts = opts.filter(o => o.label.toLowerCase().includes(query));
    }
    return opts;
  }

  selectedLabel(): string {
    const option = this.options().find(o => o.value === this.modelValue());
    return option?.label || '';
  }

  writeValue(value: string): void {
    this.modelValue.set(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  isDisabled(): boolean {
    return this.disabled();
  }

  onToggle(): void {
    if (!this.disabled()) {
      this.isOpen.update(v => !v);
      if (this.isOpen()) {
        this.opened.emit();
      } else {
        this.closed.emit();
        this.onTouched();
      }
    }
  }

  onSelect(option: SelectOption): void {
    if (!option.disabled) {
      this.modelValue.set(option.value);
      this.onChange(option.value);
      this.changed.emit(option.value);
      this.isOpen.set(false);
      this.closed.emit();
      this.onTouched();
    }
  }

  cn = cn;
}
