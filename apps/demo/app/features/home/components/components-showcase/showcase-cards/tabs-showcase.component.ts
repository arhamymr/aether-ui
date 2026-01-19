import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@apsara/ui';

@Component({
  selector: 'app-tabs-showcase',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <app-card class="flex-1 flex flex-col h-full">
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-[var(--foreground)] mb-1.5">Tabs</h3>
        <p class="text-sm text-[var(--dimmed)]">Tab navigation for content organization</p>
      </div>
      <div class="flex-1 flex flex-col min-h-[150px]">
        <div class="flex border-b border-[var(--border)] mb-4">
          <button class="px-4 py-2.5 text-sm font-medium text-[var(--primary)] bg-transparent border-none border-b-2 border-[var(--primary)] cursor-pointer transition-all">
            Account
          </button>
          <button class="px-4 py-2.5 text-sm font-medium text-[var(--dimmed)] bg-transparent border-none border-b-2 border-transparent cursor-pointer transition-all hover:text-[var(--foreground)]">
            Security
          </button>
          <button class="px-4 py-2.5 text-sm font-medium text-[var(--dimmed)] bg-transparent border-none border-b-2 border-transparent cursor-pointer transition-all hover:text-[var(--foreground)]">
            Notifications
          </button>
        </div>
        <div class="flex-1 flex items-center">
          <p class="text-sm text-[var(--dimmed)]">Manage your account settings and preferences.</p>
        </div>
      </div>
    </app-card>
  `
})
export class TabsShowcaseComponent {}
