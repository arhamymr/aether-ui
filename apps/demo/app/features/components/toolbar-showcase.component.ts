import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '@apsara/ui';

@Component({
  selector: 'app-toolbar-showcase',
  standalone: true,
  imports: [CommonModule, ToolbarComponent],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Default Toolbar</h3>
        <app-toolbar
          [title]="'My Application'"
          [hasMenu]="true"
          (menuClicked)="onMenuClick()">
          <button toolbar-actions class="p-2 rounded hover:bg-gray-100">
            <i class="material-icons">search</i>
          </button>
          <button toolbar-actions class="p-2 rounded hover:bg-gray-100">
            <i class="material-icons">notifications</i>
          </button>
        </app-toolbar>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Dense Toolbar</h3>
        <app-toolbar
          [title]="'Settings'"
          [dense]="true"
          [hasMenu]="true">
          <button toolbar-actions class="p-2 rounded hover:bg-gray-100">
            <i class="material-icons">more_vert</i>
          </button>
        </app-toolbar>
      </div>
    </div>
  `,
  styles: [`
    .ai-review-banner {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 1.5rem;
      background: #fef3c7;
      border: 1px solid #f59e0b;
      border-radius: 8px;
      margin-bottom: 2rem;
    }

    .ai-review-icon {
      font-size: 1.25rem;
    }

    .ai-review-text {
      font-size: 0.875rem;
      font-weight: 600;
      color: #92400e;
    }
  `]
})
export class ToolbarShowcaseComponent {
  onMenuClick(): void {
    console.log('Menu clicked');
  }
}
