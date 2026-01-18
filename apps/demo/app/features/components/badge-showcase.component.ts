import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent, CardComponent } from '@apsara/ui';

@Component({
  selector: 'app-badge-showcase',
  standalone: true,
  imports: [CommonModule, BadgeComponent, CardComponent],
  template: `
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <app-card class="flex flex-col items-center gap-2 p-4">
        <app-badge variant="default">Default</app-badge>
        <span class="text-xs text-dimmed">Default</span>
      </app-card>
      <app-card class="flex flex-col items-center gap-2 p-4">
        <app-badge variant="secondary">Secondary</app-badge>
        <span class="text-xs text-dimmed">Secondary</span>
      </app-card>
      <app-card class="flex flex-col items-center gap-2 p-4">
        <app-badge variant="destructive">Destructive</app-badge>
        <span class="text-xs text-dimmed">Destructive</span>
      </app-card>
      <app-card class="flex flex-col items-center gap-2 p-4">
        <app-badge variant="outline">Outline</app-badge>
        <span class="text-xs text-dimmed">Outline</span>
      </app-card>
      <app-card class="flex flex-col items-center gap-2 p-4">
        <app-badge variant="success">Success</app-badge>
        <span class="text-xs text-dimmed">Success</span>
      </app-card>
      <app-card class="flex flex-col items-center gap-2 p-4">
        <app-badge variant="warning">Warning</app-badge>
        <span class="text-xs text-dimmed">Warning</span>
      </app-card>
    </div>
  `
})
export class BadgeShowcaseComponent {}
