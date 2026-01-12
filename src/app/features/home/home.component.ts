import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, MatButtonModule, MatCardModule],
  template: `
    <div class="page">
      <h1>{{ title() }}</h1>
      
      <mat-card class="demo-card">
        <mat-card-header>
          <mat-card-title>Programmatic Navigation</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Navigate using Router service:</p>
          <div class="button-group">
            <button mat-raised-button color="primary" (click)="navigateTo('/about')">
              Go to About
            </button>
            <button mat-raised-button color="accent" (click)="navigateTo('/users')">
              Go to Users
            </button>
            <button mat-raised-button color="warn" (click)="navigateTo('/settings')">
              Go to Settings
            </button>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="demo-card">
        <mat-card-header>
          <mat-card-title>Navigation with RouterLink</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Use links in the navbar above or click below:</p>
          <div class="button-group">
            <a mat-stroked-button routerLink="/about">About Page</a>
            <a mat-stroked-button routerLink="/users">Users Page</a>
            <a mat-stroked-button routerLink="/settings">Settings Page</a>
          </div>
        </mat-card-content>
      </mat-card>

      <router-outlet />
    </div>
  `,
  styles: [`
    .page { padding: 2rem; }
    h1 { color: #1976d2; margin-bottom: 1.5rem; }
    .demo-card { margin-bottom: 1rem; }
    .button-group { display: flex; gap: 0.5rem; margin-top: 1rem; flex-wrap: wrap; }
    a { text-decoration: none; }
  `]
})
export class HomeComponent {
  protected readonly title = signal('Home Page');

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
