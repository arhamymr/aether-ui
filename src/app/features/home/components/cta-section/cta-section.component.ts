import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '@shared/ui/card';

@Component({
  selector: 'app-cta-section',
  imports: [MatIconModule, MatButtonModule, CardComponent],
  template: `
    <section class="cta-section">
      <app-card variant="tonal" class="cta-card">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Build?</h2>
          <p class="cta-text">
            Start your next Angular project with this boilerplate. 
            It includes everything you need to build modern, scalable applications.
          </p>
          <div class="cta-buttons">
            <button mat-raised-button color="primary" (click)="navigateTo('/components')">
              <mat-icon>explore</mat-icon>
              Explore Components
            </button>
            <button mat-stroked-button (click)="navigateTo('/settings')">
              <mat-icon>settings</mat-icon>
              View Settings
            </button>
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
      color: #1c1b1f;
      margin: 0 0 16px;
    }

    .cta-text {
      font-size: 16px;
      color: #616161;
      margin: 0 0 32px;
      line-height: 1.6;
    }

    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    .cta-buttons button mat-icon {
      margin-right: 8px;
    }
  `]
})
export class CtaSectionComponent {
  private readonly router = inject(Router);

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
