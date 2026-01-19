import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, BadgeComponent, IconComponent } from '@apsara/ui';

@Component({
  selector: 'app-badges-showcase',
  standalone: true,
  imports: [CommonModule, CardComponent, BadgeComponent, IconComponent],
  template: `
    <app-card class="flex-1 flex flex-col h-full">
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-[var(--foreground)] mb-1.5">Status Badges</h3>
        <p class="text-sm text-[var(--dimmed)]">Different variants for status indicators</p>
      </div>
      <div class="flex-1 flex flex-col gap-5">
        <div class="flex flex-wrap gap-2">
          <app-badge label="Default" variant="default" />
          <app-badge label="Secondary" variant="secondary" />
          <app-badge label="Success" variant="success" />
          <app-badge label="Warning" variant="warning" />
          <app-badge label="Danger" variant="destructive" />
        </div>
        <div class="flex flex-wrap gap-2">
          <app-badge label="Outline" variant="outline" />
        </div>
        <div class="flex flex-wrap gap-2">
          <app-badge label="Syncing" variant="default">
            <app-icon name="sync" size="sm" />
          </app-badge>
          <app-badge label="Updating" variant="secondary">
            <app-icon name="download" size="sm" />
          </app-badge>
          <app-badge label="Loading" variant="secondary">
            <app-icon name="hourglass_empty" size="sm" />
          </app-badge>
        </div>
      </div>
    </app-card>
  `
})
export class BadgesShowcaseComponent {}
