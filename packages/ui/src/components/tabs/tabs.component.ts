import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonToggleComponent } from '../button-toggle';
import { cn } from '../../lib/cn';

interface TabOption {
  value: string;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, ButtonToggleComponent],
  template: `
    <div class="flex flex-col">
      <app-button-toggle
        [options]="options()"
        [modelValue]="modelValue()"
        (changed)="onSelect($event)"
        [ariaLabel]="ariaLabel()" />
      <div class="py-6" role="tabpanel">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
  readonly options = input.required<Array<TabOption>>();
  readonly modelValue = input<string>('');
  readonly ariaLabel = input<string>('Tab options');
  readonly changed = output<string>();

  onSelect(value: string): void {
    this.changed.emit(value);
  }

  cn = cn;
}
