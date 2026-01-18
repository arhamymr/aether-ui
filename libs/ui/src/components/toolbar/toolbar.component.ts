import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header
      class="flex items-center justify-between px-4 h-16 bg-white border-b border-gray-200"
      [class]="cn(
        dense() ? 'h-12' : 'h-16',
        colorClass(),
        className()
      )"
      [attr.role]="role()">
      <div class="flex items-center gap-4">
        @if (hasMenu()) {
          <button
            class="p-2 rounded-lg hover:bg-gray-100"
            (click)="onMenuClick()"
            aria-label="Toggle menu">
            <i class="material-icons">menu</i>
          </button>
        }
        @if (title()) {
          <h1 class="text-lg font-semibold text-gray-900">{{ title() }}</h1>
        }
      </div>
      <div class="flex items-center gap-2">
        <ng-content select="[toolbar-actions]" />
      </div>
    </header>
  `
})
export class ToolbarComponent {
  title = input<string>('');
  hasMenu = input<boolean>(false);
  dense = input<boolean>(false);
  variant = input<'primary' | 'surface' | 'transparent'>('surface');
  role = input<string>('banner');
  className = input<string>('');
  menuClicked = output<void>();

  colorClass(): string {
    const colors: Record<string, string> = {
      primary: 'bg-blue-600 text-white',
      surface: 'bg-white text-gray-900',
      transparent: 'bg-transparent text-gray-900',
    };
    return colors[this.variant()] || colors['surface'];
  }

  onMenuClick(): void {
    this.menuClicked.emit();
  }

  cn = cn;
}
