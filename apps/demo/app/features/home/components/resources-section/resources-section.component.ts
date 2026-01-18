import { Component } from '@angular/core';
import { ButtonComponent, CardComponent } from '@apsara/ui';

@Component({
  selector: 'app-resources-section',
  standalone: true,
  imports: [ButtonComponent, CardComponent],
  template: `
    <section class="resources-section">
      <h2 class="section-title">Resources</h2>
      <div class="resources-grid">
        <app-card class="resource-link" (clicked)="navigateTo('/about')">
          <span>About Page</span>
        </app-card>
        <app-card class="resource-link" (clicked)="navigateTo('/settings')">
          <span>Settings Page</span>
        </app-card>
        <app-card class="resource-link" (clicked)="navigateTo('/docs')">
          <span>Documentation</span>
        </app-card>
        <app-card class="resource-link" (clicked)="navigateTo('/auth/login')">
          <span>Login</span>
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

    .resource-link span {
      font-weight: 500;
    }
  `]
})
export class ResourcesSectionComponent {
  navigateTo(path: string): void {
    window.location.href = path;
  }
}
