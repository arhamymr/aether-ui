import { Component } from '@angular/core';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-alert-description',
  standalone: true,
  host: {
    '[class]': 'cn("text-sm [&_p]:leading-relaxed")'
  },
  template: `
    <ng-content />
  `
})
export class AlertDescriptionComponent {
  cn = cn;
}
