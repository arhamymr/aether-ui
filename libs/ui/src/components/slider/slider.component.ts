import { Component, input, output, signal, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="relative h-2 bg-gray-200 rounded-full"
      [class.h-1]="size() === 'sm'"
      [class.h-3]="size() === 'lg'">
      <div
        class="absolute h-full bg-primary rounded-full transition-all"
        [style.width.%]="percent()"></div>
      <input
        type="range"
        [min]="min()"
        [max]="max()"
        [step]="step()"
        [value]="modelValue()"
        (input)="onInput($event)"
        class="absolute w-full h-full opacity-0 cursor-pointer"
        [disabled]="disabled()" />
      <div
        class="absolute w-4 h-4 bg-white border-2 border-[var(--primary)] rounded-full shadow
               transform -translate-x-1/2 transition-all cursor-pointer
               hover:scale-110"
        [style.left.%]="percent()"
        [class.w-3]="size() === 'sm'"
        [class.h-3]="size() === 'sm'"
        [class.w-5]="size() === 'lg'"
        [class.h-5]="size() === 'lg'"
        [class.cursor-not-allowed]="disabled()"></div>
    </div>
    @if (showValue()) {
      <div class="flex justify-between mt-2 text-sm text-gray-600">
        <span>{{ min() }}</span>
        <span>{{ modelValue() }}</span>
        <span>{{ max() }}</span>
      </div>
    }
  `
})
export class SliderComponent {
  min = input<number>(0);
  max = input<number>(100);
  step = input<number>(1);
  modelValue = input<number>(0);
  disabled = input<boolean>(false);
  size = input<'sm' | 'md' | 'lg'>('md');
  showValue = input<boolean>(true);
  changed = output<number>();

  percent(): number {
    const range = this.max() - this.min();
    return ((this.modelValue() - this.min()) / range) * 100;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = Number(target.value);
    this.changed.emit(value);
  }

  cn = cn;
}
