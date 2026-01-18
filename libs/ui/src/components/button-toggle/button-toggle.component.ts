import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-button-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="inline-flex items-center p-1 bg-gray-100 rounded-lg"
      role="group"
      [attr.aria-label]="ariaLabel()">
      @for (option of options(); track option.value) {
        <button
          type="button"
          class="px-3 py-1.5 text-sm font-medium rounded-md transition-all
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                 disabled:opacity-50 disabled:cursor-not-allowed"
          [class.bg-white]="modelValue() === option.value"
          [class.shadow-sm]="modelValue() === option.value"
          [class.text-gray-900]="modelValue() === option.value"
          [class.text-gray-600]="modelValue() !== option.value"
          [class.bg-transparent]="modelValue() !== option.value"
          [disabled]="option.disabled"
          (click)="onSelect(option.value)">
          @if (option.icon) {
            <i class="material-icons text-sm mr-1">{{ option.icon }}</i>
          }
          {{ option.label }}
        </button>
      }
    </div>
  `
})
export class ButtonToggleComponent {
  options = input<Array<{ value: string; label: string; icon?: string; disabled?: boolean }>>([]);
  modelValue = input<string>('');
  ariaLabel = input<string>('Button toggle options');
  changed = output<string>();

  onSelect(value: string): void {
    this.changed.emit(value);
  }

  cn = cn;
}
