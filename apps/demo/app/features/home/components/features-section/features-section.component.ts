import { Component, signal } from '@angular/core';
import { CardComponent } from '@apsara/ui';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CardComponent],
  template: `
    <section class="features-section">
      <h2 class="section-title">Key Features</h2>
      <div class="features-grid">
        @for (feature of features(); track feature.title) {
          <app-card class="feature-card">
            <div class="feature-icon-wrapper">
              <i class="material-icons feature-icon">{{ feature.icon }}</i>
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </app-card>
        }
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      padding: 64px 24px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 28px;
      font-weight: 600;
      text-align: center;
      color: var(--foreground);
      margin: 0 0 48px;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }

    .feature-card {
      text-align: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .feature-card:hover {
      transform: translateY(-4px);
    }

    .feature-icon-wrapper {
      width: 64px;
      height: 64px;
      background: var(--accent);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
    }

    .feature-icon {
      font-size: 28px;
      color: var(--accent-foreground);
    }

    .feature-title {
      font-size: 20px;
      font-weight: 600;
      color: var(--foreground);
      margin: 0 0 12px;
    }

    .feature-description {
      font-size: 14px;
      color: var(--dimmed);
      line-height: 1.6;
      margin: 0;
    }
  `]
})
export class FeaturesSectionComponent {
  features = signal<Feature[]>([
    { icon: 'speed', title: 'High Performance', description: 'Optimized Angular build with lazy loading and efficient change detection' },
    { icon: 'verified', title: 'Type Safe', description: 'Strict TypeScript configuration with full type inference' },
    { icon: 'palette', title: 'Custom Design', description: 'Beautiful Tailwind-based design system' },
    { icon: 'widgets', title: 'Standalone Components', description: 'Modern Angular architecture without NgModules' },
    { icon: 'architecture', title: 'Clean Architecture', description: 'Well-organized folder structure following best practices' },
    { icon: 'sync', title: 'Signals Ready', description: 'Reactive state management using Angular Signals' }
  ]);
}
