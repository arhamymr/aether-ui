import { Component } from '@angular/core';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-alert-title',
  standalone: true,
  host: {
    '[class]': 'cn("font-medium leading-none tracking-tight")'
  },
  template: `
    <ng-content />
  `
})
export class AlertTitleComponent {
  cn = cn;
}
