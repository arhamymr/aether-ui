import { Component, input, ChangeDetectionStrategy, signal, output, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TabItem {
  value: string;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col">
      <div class="flex border-b border-[var(--border)]" role="tablist">
        @for (tab of tabs(); track tab.value) {
          <button
            type="button"
            role="tab"
            class="px-4 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                   hover:text-[var(--foreground)] hover:border-[var(--border)]
                   text-[var(--dimmed)] border-transparent
                   data-[active]:text-[var(--primary)] data-[active]:border-[var(--primary)]
                   disabled:cursor-not-allowed disabled:opacity-50"
            [attr.data-active]="activeTab() === tab.value || ''"
            [disabled]="tab.disabled"
            (click)="setActiveTab(tab.value)">
            {{ tab.label }}
          </button>
        }
      </div>
      <div class="py-6" role="tabpanel">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
  readonly defaultValue = input<string>('');
  readonly animationDuration = input<'300ms' | '150ms'>('300ms');
  readonly tabs = input.required<Array<TabItem>>();

  activeTab = signal<string>('');

  constructor() {
    effect(() => {
      const defaultVal = this.defaultValue();
      const tabsList = this.tabs();
      if (defaultVal && tabsList.length > 0) {
        this.activeTab.set(defaultVal);
      }
    });
  }

  setActiveTab(value: string) {
    this.activeTab.set(value);
  }
}
