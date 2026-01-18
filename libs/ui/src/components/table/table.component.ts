import { Component, input, output, signal, ContentChildren, QueryList, AfterContentInit, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/cn';

@Directive({
  selector: '[appTableHeader]',
  standalone: true
})
export class TableHeaderDirective {}

@Directive({
  selector: '[appTableCell]',
  standalone: true
})
export class TableCellDirective {}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="overflow-x-auto border border-gray-200 rounded-lg">
      <table class="w-full text-sm">
        <thead class="bg-gray-50">
          <tr>
            <ng-content select="[table-header]" />
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          @for (row of rows(); track $index) {
            <tr class="hover:bg-gray-50">
              <ng-content select="[table-cell]" />
            </tr>
          }
        </tbody>
      </table>
    </div>
  `
})
export class TableComponent {
  rows = input<unknown[]>([]);
  cn = cn;
}
