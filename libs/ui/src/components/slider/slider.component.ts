import { Component, input, output, signal, forwardRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-slider',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderComponent),
      multi: true
    }
  ],
  template: `
    <div class="relative py-3">
      @if (thumbLabel() && !isDisabled()) {
        <div
          class="absolute -top-8 transform -translate-x-1/2 pointer-events-none
                 bg-gray-900 text-white text-xs font-medium
                 px-2 py-1 rounded shadow-lg
                 transition-all duration-150"
          [style.left.%]="percent()">
          {{ modelValue() }}
          <div class="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
            <div class="border-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      }

      <div
        class="relative h-2 bg-gray-200 rounded-full"
        [class.h-1]="size() === 'sm'"
        [class.h-3]="size() === 'lg'"
        [class.opacity-50]="isDisabled()">
        
        <!-- Tick marks -->
        @if (showTicks()) {
          <div class="absolute top-0 left-0 right-0 flex justify-between px-1">
            @for (tick of ticks(); track tick) {
              <div
                class="w-px bg-gray-400 absolute"
                [style.height.%]="size() === 'sm' ? '60' : size() === 'lg' ? '80' : '70'"
                [style.left.%]="tick"></div>
            }
          </div>
        }

        <!-- Fill track -->
        <div
          class="absolute h-full bg-primary rounded-full transition-all"
          [style.width.%]="percent()"></div>

        <!-- Native input for interaction -->
        <input
          type="range"
          [min]="min()"
          [max]="max()"
          [step]="step()"
          [value]="modelValue()"
          (input)="onInput($event)"
          (blur)="onBlur()"
          class="absolute w-full h-full opacity-0 cursor-pointer z-10"
          [disabled]="isDisabled()"
          aria-label="Slider"
          [attr.aria-valuenow]="modelValue()"
          [attr.aria-valuemin]="min()"
          [attr.aria-valuemax]="max()" />

        <!-- Thumb -->
        <div
          class="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2
                 bg-white border-2 border-[var(--primary)] rounded-full shadow
                 transition-all cursor-pointer
                 hover:scale-110 active:scale-95
                 z-20"
          [style.left.%]="percent()"
          [class.w-3]="size() === 'sm'"
          [class.h-3]="size() === 'sm'"
          [class.w-5]="size() === 'lg'"
          [class.h-5]="size() === 'lg'"
          [class.w-4]="size() === 'md'"
          [class.h-4]="size() === 'md'"
          [class.cursor-not-allowed]="isDisabled()"
          [class.hover:scale-110]="!isDisabled()"></div>
      </div>

      <!-- Value display -->
      @if (showValue()) {
        <div class="flex justify-between mt-2 text-sm text-gray-600">
          <span>{{ min() }}</span>
          <span class="font-medium text-foreground">{{ modelValue() }}</span>
          <span>{{ max() }}</span>
        </div>
      }
    </div>
  `
})
export class SliderComponent implements ControlValueAccessor {
  min = input<number>(0);
  max = input<number>(100);
  step = input<number>(1);
  size = input<'sm' | 'md' | 'lg'>('md');
  showValue = input<boolean>(true);
  showTicks = input<boolean>(false);
  thumbLabel = input<boolean>(false);
  tickInterval = input<number>(1);

  modelValue = signal(0);
  private _isDisabled = signal(false);
  changed = output<number>();

  get isDisabled() {
    return this._isDisabled;
  }

  @Input()
  set disabled(value: boolean) {
    this._isDisabled.set(value);
  }

  private _onChange: (value: number) => void = () => {};
  private _onTouched: () => void = () => {};

  writeValue(value: number): void {
    this.modelValue.set(value ?? 0);
  }

  registerOnChange(fn: (value: number) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._isDisabled.set(isDisabled);
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = Number(target.value);
    this.modelValue.set(value);
    this._onChange(value);
    this.changed.emit(value);
  }

  onBlur(): void {
    this._onTouched();
  }

  percent(): number {
    const range = this.max() - this.min();
    return ((this.modelValue() - this.min()) / range) * 100;
  }

  ticks(): number[] {
    if (!this.showTicks()) return [];
    const range = this.max() - this.min();
    const interval = this.tickInterval() || this.step();
    const tickCount = Math.floor(range / interval);
    return Array.from({ length: tickCount + 1 }, (_, i) => (i * interval / range) * 100);
  }

  cn = cn;
}
