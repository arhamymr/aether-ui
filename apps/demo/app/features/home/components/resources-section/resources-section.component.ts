import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent, CardComponent } from '@apsara/ui';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-resources-section',
  standalone: true,
  imports: [ButtonComponent, CardComponent, MatIconModule],
  template: `
    <section class="resources-section">
      <h2 class="section-title">Explore</h2>
      <div class="resources-grid">
        <app-card class="resource-link" (clicked)="navigateTo('/components')">
          <mat-icon>widgets</mat-icon>
          <span>Components</span>
        </app-card>
        <app-card class="resource-link" (clicked)="navigateTo('/docs')">
          <mat-icon>description</mat-icon>
          <span>Documentation</span>
        </app-card>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      text-align: center;
      padding: 64px 24px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 28px;
      font-weight: 600;
      color: var(--foreground);
      margin: 0 0 40px;
    }

    .resources-grid {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .resource-link {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 24px;
      cursor: pointer;
      transition: border-color 0.2s ease, color 0.2s ease;
    }

    .resource-link:hover {
      border-color: var(--primary);
      color: var(--primary);
    }

    .resource-link mat-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    .resource-link span {
      font-weight: 500;
    }
  `]
})
export class ResourcesSectionComponent {
  private router = inject(Router);

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
