import { Component, input, ChangeDetectionStrategy, output, computed, HostBinding, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      role="tab"
      [attr.aria-selected]="active()"
      [attr.aria-controls]="panelId()"
      [attr.id]="'tab-' + value()"
      [attr.data-state]="active() ? 'active' : 'inactive'"
      [disabled]="disabled()"
      class="px-4 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
             text-gray-500 border-transparent
             hover:text-gray-900 hover:border-gray-300
             data-[state=active]:text-blue-600 data-[state=active]:border-blue-600
             disabled:cursor-not-allowed disabled:opacity-50"
      (click)="onClick()"
      (keydown)="onKeydown($event)">
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsItemComponent {
  readonly value = input.required<string>();
  readonly active = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly panelId = input<string>('');
  readonly clicked = output<string>();

  onClick(): void {
    if (!this.disabled()) {
      this.clicked.emit(this.value());
    }
  }

  onKeydown(event: KeyboardEvent): void {
    const key = event.key;
    if (key === 'Enter' || key === ' ') {
      event.preventDefault();
      this.onClick();
    }
  }
}
