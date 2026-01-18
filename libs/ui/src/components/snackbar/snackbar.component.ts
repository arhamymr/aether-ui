import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (isOpen()) {
      <div
        class="fixed bottom-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg
               bg-white border border-gray-200 min-w-[300px] max-w-md"
        role="alert"
        [attr.aria-live]="polite() ? 'polite' : 'assertive'">
        @if (icon()) {
          <i class="material-icons text-sm">{{ icon() }}</i>
        }
        <div class="flex-1">
          @if (title()) {
            <p class="text-sm font-medium text-gray-900">{{ title() }}</p>
          }
          @if (message()) {
            <p class="text-sm text-gray-600">{{ message() }}</p>
          }
        </div>
        @if (showClose()) {
          <button
            class="p-1 rounded hover:bg-gray-100"
            (click)="onClose()"
            aria-label="Dismiss">
            <i class="material-icons text-sm">close</i>
          </button>
        }
        @if (action()) {
          <button
            class="px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded"
            (click)="onAction()">
            {{ action() }}
          </button>
        }
      </div>
    }
  `
})
export class SnackbarComponent {
  isOpen = input<boolean>(false);
  message = input<string>('');
  title = input<string>('');
  icon = input<string>('');
  action = input<string>('');
  showClose = input<boolean>(true);
  polite = input<boolean>(true);
  duration = input<number>(5000);
  closed = output<void>();
  actionClicked = output<void>();

  private timeout?: ReturnType<typeof setTimeout>;

  ngOnChanges(): void {
    if (this.isOpen() && this.duration() > 0) {
      this.timeout = setTimeout(() => {
        this.onClose();
      }, this.duration());
    }
  }

  onClose(): void {
    this.closed.emit();
  }

  onAction(): void {
    this.actionClicked.emit();
  }

  cn = cn;
}
