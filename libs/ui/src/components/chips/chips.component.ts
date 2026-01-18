import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkMenuModule } from '@angular/cdk/menu';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [CommonModule, CdkMenuModule],
  template: `
    <div class="flex flex-wrap gap-2">
      @for (chip of modelValue(); track chip.value) {
        <div
          class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full
                 text-sm text-gray-900"
          [class.opacity-50]="chip.disabled">
          <span>{{ chip.label }}</span>
          @if (!chip.disabled) {
            <button
              class="p-0.5 rounded-full hover:bg-gray-200"
              (click)="onRemove(chip)"
              aria-label="Remove {{ chip.label }}">
              <i class="material-icons text-xs">close</i>
            </button>
          }
        </div>
      }
      @if (addable()) {
        <input
          type="text"
          [placeholder]="placeholder()"
          class="px-3 py-1.5 bg-gray-100 rounded-full text-sm
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          (keydown.enter)="onAdd($event)"
          (keydown.comma)="onAdd($event)" />
      }
    </div>
  `
})
export class ChipsComponent {
  modelValue = signal<Array<{ value: string; label: string; disabled?: boolean }>>([]);
  placeholder = input<string>('Add a chip');
  addable = input<boolean>(false);
  changed = output<Array<{ value: string; label: string; disabled?: boolean }>>();

  onRemove(chip: { value: string; label: string; disabled?: boolean }): void {
    const updated = this.modelValue().filter(c => c.value !== chip.value);
    this.modelValue.set(updated);
    this.changed.emit(updated);
  }

  onAdd(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value.trim();
    if (value && !this.modelValue().find(c => c.value === value)) {
      const updated = [...this.modelValue(), { value, label: value }];
      this.modelValue.set(updated);
      this.changed.emit(updated);
      target.value = '';
    }
  }

  cn = cn;
}
