import { Component, input } from '@angular/core';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'border-border bg-card text-card-foreground',
        info: 'border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100',
        success: 'border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100',
        warning: 'border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-100',
        danger: 'border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100',
        tertiary: 'border-gray-200 bg-gray-50 text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100',
      },
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export type AlertVariantProps = VariantProps<typeof alertVariants>;

@Component({
  selector: 'app-alert',
  standalone: true,
  host: {
    '[class]': 'cn(alertVariants({ variant: variant() }), class)',
    'role': 'alert'
  },
  template: `
    <ng-content />
    <ng-content select="app-alert-title" />
    <ng-content select="app-alert-description" />
    <ng-content select="app-alert-action" />
  `
})
export class AlertComponent {
  variant = input<AlertVariantProps['variant']>('default');
  class = input<string>('');
  cn = cn;
  alertVariants = alertVariants;
}
