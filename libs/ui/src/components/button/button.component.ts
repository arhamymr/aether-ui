import { Component, input, output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';
import { LucideAngularModule, LoaderCircle } from 'lucide-angular';

export type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'outline' | 'plain' | 'danger';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'icon' | 'xs-icon';

const buttonVariants = cva(
  [
    'relative font-medium select-none inline-flex justify-center items-center gap-2.5 transition-colors cursor-pointer rounded-md',
    'after:absolute after:inset-0 after:bg-black/5 after:opacity-0 hover:after:opacity-100 active:after:opacity-100 data-popup-open:after:opacity-100 after:transition-opacity after:rounded-md',
    'focus:outline-0 focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:opacity-70 disabled:pointer-events-none data-disabled:opacity-70 data-disabled:pointer-events-none',
    'ring ring-border inset-shadow-2xs inset-shadow-white/15 shadow-sm',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary text-primary-foreground',
          'ring-primary-border outline-primary',
        ],
        secondary: [
          'bg-secondary text-secondary-foreground',
          'ring-border',
        ],
        destructive: [
          'bg-destructive text-destructive-foreground',
        ],
        danger: [
          'bg-destructive text-destructive-foreground',
        ],
        outline: [
          'bg-transparent text-foreground',
          'ring-border',
        ],
        plain: [
          'bg-transparent text-foreground',
          'ring-0 shadow-none',
        ],
      },
      size: {
        'xs': 'h-7 px-2 text-xs *:[svg]:size-3',
        'sm': 'h-[34px] px-3 text-sm *:[svg]:size-3.5',
        'md': 'h-[38px] px-4 text-sm *:[svg]:size-4',
        'lg': 'h-[46px] px-[22px] text-sm *:[svg]:size-5',
        'icon': 'h-10 w-10 *:[svg]:size-5',
        'xs-icon': 'h-8 w-8 *:[svg]:size-4',
      },
      block: {
        true: 'w-full',
      },
      loading: {
        true: 'pointer-events-none opacity-70',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <button
      [disabled]="disabled() || loading()"
      [class.pointer-events-none]="disabled() || loading()"
      [class.cursor-not-allowed]="disabled() || loading()"
      [class]="cn(
        buttonVariants({
          variant: variant(),
          size: size(),
          block: block(),
          loading: loading()
        })
      )"
      (click)="onClick($event)">

      @if (loading()) {
        <lucide-angular [img]="LoaderCircle" [class]="'animate-spin shrink-0 ' + getLoaderSizeClass()" />
      }

      @if (label()) {
        <span class="[&:has(+_*)]:sr-only">{{ label() }}</span>
      }

      <ng-content />
    </button>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class ButtonComponent {
  readonly label = input<string>('');
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly disabled = input<boolean>(false);
  readonly loading = input<boolean>(false);
  readonly block = input<boolean>(false);
  readonly clicked = output<Event>();

  readonly LoaderCircle = LoaderCircle;

  cn = cn;
  buttonVariants = buttonVariants;

  getLoaderSizeClass(): string {
    const sizeMap: Record<ButtonSize, string> = {
      'xs': 'size-3',
      'sm': 'size-3.5',
      'md': 'size-4',
      'lg': 'size-5',
      'icon': 'size-5',
      'xs-icon': 'size-4',
    };
    return sizeMap[this.size()];
  }

  onClick(event: Event): void {
    if (!this.disabled() && !this.loading()) {
      this.clicked.emit(event);
    }
  }
}
