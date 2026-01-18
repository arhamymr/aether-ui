import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent, CardComponent } from '@apsara/ui';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [ButtonComponent, CardComponent],
  template: `
    <section class="cta-section">
      <app-card class="cta-card">
        <div class="cta-content">
          <h2 class="cta-title">Start Building Today</h2>
          <p class="cta-text">
            Explore our comprehensive component library and build beautiful,
            accessible Angular applications faster.
          </p>
          <div class="cta-buttons">
            <app-button
              label="View Components"
              (clicked)="navigateTo('/components')" />
            <app-button
              variant="outline"
              label="Read Documentation"
              (clicked)="navigateTo('/docs')" />
          </div>
        </div>
      </app-card>
    </section>
  `,
  styles: [`
    .cta-section {
      max-width: 800px;
      margin: 0 auto;
      padding: 64px 24px;
    }

    .cta-card {
      padding: 40px;
    }

    .cta-content {
      text-align: center;
    }

    .cta-title {
      font-size: 28px;
      font-weight: 600;
      color: var(--foreground);
      margin: 0 0 16px;
    }

    .cta-text {
      font-size: 16px;
      color: var(--dimmed);
      margin: 0 0 32px;
      line-height: 1.6;
    }

    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }
  `]
})
export class CtaSectionComponent {
  private readonly router = inject(Router);

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
