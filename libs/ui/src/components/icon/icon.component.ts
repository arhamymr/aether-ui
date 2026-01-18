import { Component, input } from '@angular/core';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <i
      class="material-icons"
      [class]="cn(
        sizeClass(),
        'align-middle inline-block',
        className()
      )"
      [attr.aria-hidden]="ariaHidden()">
      {{ name() }}
    </i>
  `
})
export class IconComponent {
  name = input.required<string>();
  size = input<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md');
  ariaHidden = input<boolean>(true);
  className = input<string>('');

  sizeClass(): string {
    const sizes: Record<string, string> = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    };
    return sizes[this.size()] || sizes['md'];
  }

  cn = cn;
}
