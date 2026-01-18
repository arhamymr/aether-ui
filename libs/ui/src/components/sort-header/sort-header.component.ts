import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/cn';

export interface SortColumn {
  name: string;
  direction: 'asc' | 'desc' | '';
}

export interface SortEvent {
  active: string;
  direction: 'asc' | 'desc' | '';
}

@Component({
  selector: 'app-sort-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="flex items-center gap-2 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      (click)="onSort()"
      [attr.aria-sort]="sortDirection()">
      <span>{{ label() }}</span>
      <i
        class="material-icons text-sm transition-transform"
        [class.rotate-180]="sortDirection() === 'asc'"
        [class.opacity-0]="sortDirection() === ''"
        [class.opacity-100]="sortDirection() !== ''">
        arrow_upward
      </i>
    </button>
  `
})
export class SortHeaderComponent {
  label = input<string>('');
  column = input<string>('');
  sortDirection = signal<'asc' | 'desc' | ''>('');
  sortChange = output<SortEvent>();

  onSort(): void {
    const current = this.sortDirection();
    let direction: 'asc' | 'desc' | '' = 'asc';
    if (current === 'asc') {
      direction = 'desc';
    } else if (current === 'desc') {
      direction = '';
    }
    this.sortDirection.set(direction);
    this.sortChange.emit({ active: this.column(), direction });
  }

  cn = cn;
}
