import { Component, input, output, signal, TemplateRef, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-expansion-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border border-gray-200 rounded-lg overflow-hidden">
      <button
        type="button"
        class="w-full flex items-center justify-between px-4 py-3 bg-gray-50
               hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        (click)="onToggle()"
        [attr.aria-expanded]="isOpen()">
        <span class="font-medium text-gray-900">{{ title() }}</span>
        <i
          class="material-icons text-sm transition-transform"
          [class.rotate-180]="isOpen()">
          expand_more
        </i>
      </button>
      @if (isOpen()) {
        <div class="px-4 py-3 bg-white border-t border-gray-200">
          <ng-content />
        </div>
      }
    </div>
  `
})
export class ExpansionPanelComponent {
  title = input<string>('');
  isOpen = input<boolean>(false);
  expanded = output<boolean>();

  onToggle(): void {
    this.expanded.emit(!this.isOpen());
  }

  cn = cn;
}
