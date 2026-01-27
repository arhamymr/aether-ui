import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, ButtonComponent } from '@aether/ui';

@Component({
  selector: 'app-menu-showcase',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent],
  template: `
    <app-card class="flex-1 flex flex-col h-full">
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-foreground mb-1.5">Dropdown Menu</h3>
        <p class="text-sm text-muted-foreground">Context menus and dropdowns</p>
      </div>
      <div class="flex-1 flex items-center justify-center min-h-[150px]">
        <div class="flex gap-2">
          <app-button variant="outline" size="sm">File</app-button>
          <app-button variant="outline" size="sm">Edit</app-button>
          <app-button variant="outline" size="sm">View</app-button>
        </div>
      </div>
    </app-card>
  `
})
export class MenuShowcaseComponent {}
