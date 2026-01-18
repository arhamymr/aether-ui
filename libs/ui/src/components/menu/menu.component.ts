import { Component, input, output, inject, signal, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkMenuModule, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, CdkMenuModule, CdkMenuTrigger, CdkMenuItem],
  template: `
    @if (trigger()) {
      <button
        [cdkMenuTriggerFor]="menu"
        class="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200
               hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        (cdkMenuOpened)="onMenuOpen()"
        (cdkMenuClosed)="onMenuClose()">
        @if (icon()) {
          <i class="material-icons text-sm">{{ icon() }}</i>
        }
        @if (label()) {
          <span class="text-sm">{{ label() }}</span>
        }
        <i class="material-icons text-sm">arrow_drop_down</i>
      </button>
    }
    <ng-template #menu>
      <div
        class="py-1 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[200px]"
        cdkMenu>
        @for (item of items(); track item.label) {
          @if (item.divider) {
            <div class="h-px bg-gray-200 my-1" role="separator"></div>
          } @else {
            <button
              class="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700
                     hover:bg-gray-100 focus:outline-none focus-visible:bg-gray-100
                     disabled:opacity-50 disabled:cursor-not-allowed"
              cdkMenuItem
              [cdkMenuItemDisabled]="item.disabled"
              (click)="onItemClick(item)">
              @if (item.icon) {
                <i class="material-icons text-sm">{{ item.icon }}</i>
              }
              <span>{{ item.label }}</span>
              @if (item.shortcut) {
                <span class="ml-auto text-xs text-gray-400">{{ item.shortcut }}</span>
              }
            </button>
          }
        }
      </div>
    </ng-template>
  `
})
export class MenuComponent {
  items = input<Array<{ label: string; icon?: string; disabled?: boolean; divider?: boolean; shortcut?: string; value?: unknown }>>([]);
  label = input<string>('');
  icon = input<string>('');
  trigger = input<boolean>(true);
  itemClicked = output<unknown>();

  onMenuOpen(): void {}
  onMenuClose(): void {}

  onItemClick(item: { label: string; icon?: string; disabled?: boolean; divider?: boolean; shortcut?: string; value?: unknown }): void {
    if (!item.disabled && !item.divider) {
      this.itemClicked.emit(item.value ?? item.label);
    }
  }

  cn = cn;
}
