import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200"
      [class]="cn('gap-4', className())">
      <div class="flex items-center gap-2">
        <span class="text-sm text-gray-700">
          {{ startItem() }}-{{ endItem() }} of {{ totalItems() }}
        </span>
      </div>
      <div class="flex items-center gap-2">
        <button
          class="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          [disabled]="isFirstPage()"
          (click)="onPrevious()"
          aria-label="Previous page">
          <i class="material-icons text-sm">chevron_left</i>
        </button>
        <span class="text-sm text-gray-700">
          Page {{ currentPage() }} of {{ totalPages() }}
        </span>
        <button
          class="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          [disabled]="isLastPage()"
          (click)="onNext()"
          aria-label="Next page">
          <i class="material-icons text-sm">chevron_right</i>
        </button>
      </div>
    </div>
  `
})
export class PaginatorComponent {
  pageSize = input<number>(10);
  pageIndex = input<number>(0);
  length = input<number>(0);
  className = input<string>('');
  pageChange = output<{ pageIndex: number; pageSize: number }>();

  totalItems(): number {
    return this.length();
  }

  totalPages(): number {
    return Math.ceil(this.length() / this.pageSize()) || 1;
  }

  currentPage(): number {
    return this.pageIndex() + 1;
  }

  startItem(): number {
    return this.pageIndex() * this.pageSize() + 1;
  }

  endItem(): number {
    return Math.min((this.pageIndex() + 1) * this.pageSize(), this.length());
  }

  isFirstPage(): boolean {
    return this.pageIndex() === 0;
  }

  isLastPage(): boolean {
    return this.pageIndex() >= this.totalPages() - 1;
  }

  onPrevious(): void {
    if (!this.isFirstPage()) {
      const newIndex = this.pageIndex() - 1;
      this.pageChange.emit({ pageIndex: newIndex, pageSize: this.pageSize() });
    }
  }

  onNext(): void {
    if (!this.isLastPage()) {
      const newIndex = this.pageIndex() + 1;
      this.pageChange.emit({ pageIndex: newIndex, pageSize: this.pageSize() });
    }
  }

  cn = cn;
}
