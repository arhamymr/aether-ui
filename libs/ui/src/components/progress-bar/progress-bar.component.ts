import { Component, input } from '@angular/core';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-progress',
  standalone: true,
  template: `
    <div
      class="w-full bg-gray-200 rounded-full overflow-hidden"
      [attr.role]="role()"
      [attr.aria-valuenow]="value()"
      [attr.aria-valuemin]="0"
      [attr.aria-valuemax]="100"
      [attr.aria-label]="ariaLabel()">
      <div
        class="h-full rounded-full transition-all duration-300 ease-in-out"
        [class]="cn(
          'rounded-full',
          colorClass(),
          sizeClass()
        )"
        [style.width.%]="value()">
      </div>
    </div>
  `
})
export class ProgressComponent {
  value = input<number>(0);
  max = input<number>(100);
  color = input<'primary' | 'success' | 'warning' | 'danger'>('primary');
  size = input<'sm' | 'md' | 'lg'>('md');
  role = input<'progressbar' | 'none'>('progressbar');
  ariaLabel = input<string>('Progress');

  colorClass(): string {
    const colors: Record<string, string> = {
      primary: 'bg-blue-500',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      danger: 'bg-red-500',
    };
    return colors[this.color() as string] || colors['primary'];
  }

  sizeClass(): string {
    const sizes: Record<string, string> = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3',
    };
    return sizes[this.size() as string] || sizes['md'];
  }

  cn = cn;
}
