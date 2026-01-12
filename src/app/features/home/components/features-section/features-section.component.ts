import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features-section',
  imports: [MatIconModule],
  template: `
    <section class="features-section">
      <h2 class="section-title">Key Features</h2>
      <div class="features-grid">
        @for (feature of features(); track feature.title) {
          <div class="feature-card">
            <div class="feature-icon">
              <mat-icon>{{ feature.icon }}</mat-icon>
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .features-section {
      padding: 64px 24px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 28px;
      font-weight: 600;
      color: #1c1b1f;
      margin: 0 0 8px;
      text-align: center;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }

    .feature-card {
      background: white;
      border-radius: 16px;
      padding: 32px;
      text-align: center;
      border: 1px solid #e0e0e0;
      transition: all 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }

    .feature-icon {
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
    }

    .feature-icon mat-icon {
      font-size: 32px;
      width: 32px;
      height: 32px;
      color: white;
    }

    .feature-title {
      font-size: 20px;
      font-weight: 600;
      color: #1c1b1f;
      margin: 0 0 12px;
    }

    .feature-description {
      font-size: 14px;
      color: #616161;
      margin: 0;
      line-height: 1.6;
    }
  `]
})
export class FeaturesSectionComponent {
  features = signal<Feature[]>([
    { icon: 'speed', title: 'High Performance', description: 'Optimized Angular build with lazy loading and efficient change detection' },
    { icon: 'security', title: 'Type Safe', description: 'Strict TypeScript configuration with full type inference' },
    { icon: 'palette', title: 'Material Design', description: 'Beautiful Material components with custom theming support' },
    { icon: 'code', title: 'Standalone Components', description: 'Modern Angular architecture without NgModules' },
    { icon: 'architecture', title: 'Clean Architecture', description: 'Well-organized folder structure following best practices' },
    { icon: 'bolt', title: 'Signals Ready', description: 'Reactive state management using Angular Signals' }
  ]);
}
