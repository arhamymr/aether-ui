import { Component, input, ChangeDetectionStrategy, output, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav
      class="flex border-b border-gray-200"
      role="tablist"
      [attr.aria-label]="ariaLabel()">
      <ng-content></ng-content>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsListComponent {
  readonly ariaLabel = input<string>('Tabs navigation');
}
