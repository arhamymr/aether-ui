import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

interface ComponentShowcase {
  name: string;
  route: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-components-grid-section',
  imports: [MatIconModule],
  template: `
    <section class="components-section">
      <h2 class="section-title">Reusable UI Components</h2>
      <p class="section-subtitle">Custom components built with Angular best practices</p>
      
      <div class="components-grid">
        @for (comp of components(); track comp.route) {
          <div class="component-card" (click)="navigateTo('/components/' + comp.route)">
            <mat-icon class="component-icon">{{ comp.icon }}</mat-icon>
            <span class="component-name">{{ comp.name }}</span>
            <span class="component-category">{{ comp.category }}</span>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .components-section {
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

    .section-subtitle {
      font-size: 16px;
      color: #616161;
      margin: 0 0 40px;
      text-align: center;
    }

    .components-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 16px;
    }

    .component-card {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .component-card:hover {
      border-color: #1976d2;
      background: rgba(25, 118, 210, 0.04);
    }

    .component-icon {
      font-size: 32px;
      width: 32px;
      height: 32px;
      color: #1976d2;
      margin-bottom: 12px;
    }

    .component-name {
      display: block;
      font-weight: 600;
      color: #1c1b1f;
      margin-bottom: 4px;
    }

    .component-category {
      font-size: 12px;
      color: #757575;
    }
  `]
})
export class ComponentsGridSectionComponent {
  private readonly router = inject(Router);

  components = signal<ComponentShowcase[]>([
    { name: 'Button', route: 'button', icon: 'smart_button', category: 'Form Controls' },
    { name: 'Input', route: 'input', icon: 'input', category: 'Form Controls' },
    { name: 'Card', route: 'card', icon: 'card_giftcard', category: 'Layout' },
    { name: 'Menu', route: 'menu', icon: 'menu', category: 'Navigation' },
    { name: 'Dialog', route: 'dialog', icon: 'picture_in_picture_alt', category: 'Popups' },
    { name: 'Table', route: 'table', icon: 'table_chart', category: 'Data' },
    { name: 'Slider', route: 'slider', icon: 'linear_scale', category: 'Form Controls' },
    { name: 'Tabs', route: 'tabs', icon: 'tab', category: 'Navigation' }
  ]);

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
