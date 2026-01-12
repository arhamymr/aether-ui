import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '@shared/ui/card';

interface NavDemo {
  title: string;
  description: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-navigation-section',
  imports: [MatIconModule, MatButtonModule, CardComponent],
  template: `
    <section class="navigation-section">
      <h2 class="section-title">Navigation Patterns</h2>
      <p class="section-subtitle">This boilerplate demonstrates multiple navigation approaches</p>
      
      <div class="nav-grid">
        @for (demo of navDemos(); track demo.route) {
          <app-card
            variant="outlined"
            [interactive]="true"
            [header]="demo.title"
            [title]="demo.description"
            (actionClick)="navigateTo(demo.route)">
            <div class="nav-card-footer" slot="[card-actions]">
              <mat-icon>{{ demo.icon }}</mat-icon>
              <span>View Demo</span>
            </div>
          </app-card>
        }
      </div>
    </section>
  `,
  styles: [`
    .navigation-section {
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

    .nav-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }

    .nav-card-footer {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #1976d2;
      font-weight: 500;
    }

    .nav-card-footer mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }
  `]
})
export class NavigationSectionComponent {
  private readonly router = inject(Router);

  navDemos = signal<NavDemo[]>([
    { title: 'Programmatic Navigation', description: 'Navigate using Router service methods', route: '/about', icon: 'route' },
    { title: 'RouterLink Directives', description: 'Navigate using template directives', route: '/users', icon: 'link' },
    { title: 'Nested Routes', description: 'Lazy loaded feature modules', route: '/components', icon: 'account_tree' }
  ]);

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
