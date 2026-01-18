import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      role="tabpanel"
      [attr.aria-labelledby]="'tab-' + value()"
      [attr.aria-hidden]="!active()"
      [hidden]="!active()"
      class="py-6"
      [attr.data-state]="active() ? 'active' : 'hidden'">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsPanelComponent {
  readonly value = input.required<string>();
  readonly active = input<boolean>(false);
}
