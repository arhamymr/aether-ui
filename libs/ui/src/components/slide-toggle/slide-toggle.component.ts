import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-slide-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label
      class="flex items-center gap-3 cursor-pointer"
      [class.cursor-not-allowed]="isDisabled()">
      <button
        type="button"
        role="switch"
        [attr.aria-checked]="isChecked()"
        [disabled]="isDisabled()"
        (click)="onToggle()"
        class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors
               focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
               disabled:opacity-50 disabled:cursor-not-allowed"
        [class.bg-blue-600]="isChecked()"
        [class.bg-gray-200]="!isChecked()">
        <span
          class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm
                 pointer-events-none"
          [class.translate-x-6]="isChecked()"
          [class.translate-x-1]="!isChecked()"></span>
      </button>
      @if (label()) {
        <span class="text-sm text-gray-700" [class.opacity-50]="isDisabled()">{{ label() }}</span>
      }
      <ng-content />
    </label>
  `
})
export class SlideToggleComponent {
  checked = input<boolean>(false);
  isDisabled = signal(false);
  label = input<string>('');
  changed = output<boolean>();

  isChecked(): boolean {
    return this.checked();
  }

  onToggle(): void {
    if (!this.isDisabled()) {
      const newValue = !this.checked();
      this.changed.emit(newValue);
    }
  }

  cn = cn;
}
