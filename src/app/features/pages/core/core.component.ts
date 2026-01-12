import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-core',
  imports: [RouterLink, MatButtonModule, MatIconModule, MatCardModule, CommonModule],
  template: `
    <div class="page-container">
      <nav class="breadcrumb">
        <a routerLink="/components" routerLinkActive="active">Components</a>
        <mat-icon>chevron_right</mat-icon>
        <span>Core</span>
      </nav>
      
      <header class="page-header">
        <h1>Core Utilities</h1>
        <p>Angular Material core utilities and directives.</p>
      </header>
      
      <section class="demo-section">
        <h2>Common Directives</h2>
        <p>Core directives provided by Angular Material.</p>
        <div class="demo-row">
          <mat-card class="info-card">
            <mat-card-header>
              <mat-icon mat-card-avatar>info</mat-icon>
              <mat-card-title>Core Module</mat-card-title>
              <mat-card-subtitle>Essential utilities</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p>The core module contains essential utilities like:</p>
              <ul>
                <li>Error State Matcher</li>
                <li>Observers (Mutation, Resize)</li>
                <li>Ripple directives</li>
                <li>Unique selection ID</li>
              </ul>
            </mat-card-content>
            <mat-card-actions>
              <button mat-button color="primary">Learn More</button>
            </mat-card-actions>
          </mat-card>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>Date Adapter</h2>
        <p>Date formatting and parsing utilities.</p>
        <div class="demo-row">
          <div class="date-info">
            <p><strong>Default Date Format:</strong> MMM d, yyyy</p>
            <p><strong>Current Date:</strong> {{today | date:'fullDate'}}</p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .page-container { max-width: 1000px; margin: 0 auto; padding: 32px; }
    .breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 24px; font-size: 14px; }
    .breadcrumb a { color: #1976d2; text-decoration: none; }
    .breadcrumb mat-icon { font-size: 18px; width: 18px; height: 18px; color: #9e9e9e; }
    .page-header { margin-bottom: 48px; }
    .page-header h1 { font-size: 36px; font-weight: 600; color: #1c1b1f; margin: 0 0 8px; }
    .page-header p { font-size: 16px; color: #616161; margin: 0; line-height: 1.6; }
    .demo-section { margin-bottom: 48px; padding: 24px; background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); }
    .demo-section h2 { font-size: 20px; font-weight: 600; color: #1c1b1f; margin: 0 0 8px; }
    .demo-section p { font-size: 14px; color: #616161; margin: 0 0 20px; }
    .demo-row { display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-start; }
    .info-card { max-width: 400px; }
    .info-card ul { margin: 8px 0; padding-left: 20px; }
    .info-card li { margin-bottom: 4px; }
    .date-info { padding: 16px; background: #f5f5f5; border-radius: 8px; }
    .date-info p { margin: 8px 0; }
  `]
})
export class PageCoreComponent {
  today = new Date();
}
