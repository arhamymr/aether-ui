import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (isOpen()) {
      <div class="fixed inset-0 z-50 flex items-end justify-center">
        <div
          class="fixed inset-0 bg-black/50 transition-opacity"
          (click)="onBackdropClick()"
          aria-hidden="true"></div>
        <div
          class="relative w-full max-w-md max-h-[90vh] bg-white rounded-t-2xl shadow-xl
                 transform transition-transform">
          @if (hasHandle()) {
            <div class="flex justify-center pt-3 pb-1">
              <div class="w-12 h-1 bg-gray-200 rounded-full"></div>
            </div>
          }
          @if (title()) {
            <div class="px-4 py-2 border-b border-gray-200">
              <h3 class="font-semibold text-gray-900">{{ title() }}</h3>
            </div>
          }
          <div class="px-4 py-4 overflow-y-auto max-h-[60vh]">
            <ng-content />
          </div>
        </div>
      </div>
    }
  `
})
export class BottomSheetComponent {
  isOpen = input<boolean>(false);
  title = input<string>('');
  hasHandle = input<boolean>(true);
  closeOnBackdropClick = input<boolean>(true);
  closed = output<void>();

  onBackdropClick(): void {
    if (this.closeOnBackdropClick()) {
      this.closed.emit();
    }
  }

  cn = cn;
}
