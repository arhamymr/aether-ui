import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <span class="logo">Petaloker</span>
      <span class="spacer"></span>
      
      <a mat-button routerLink="/docs" routerLinkActive="active">Docs</a>
      <a mat-button routerLink="/components" routerLinkActive="active">Components</a>
      <a mat-button routerLink="/auth/login" routerLinkActive="active">Login</a>
    </mat-toolbar>
  `,
  styles: [`
    .spacer { flex: 1 1 auto; }
    .active { background: rgba(255,255,255,0.1); }
    a { color: white; text-decoration: none; }
    .logo { font-weight: 600; font-size: 20px; }
  `]
})
export class NavbarComponent {}
