import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <span>Petaloker</span>
      <span class="spacer"></span>
      
      <a mat-button routerLink="/home" routerLinkActive="active">Home</a>
      <a mat-button routerLink="/about" routerLinkActive="active">About</a>
      <a mat-button routerLink="/users" routerLinkActive="active">Users</a>
      <a mat-button routerLink="/settings" routerLinkActive="active">Settings</a>
    </mat-toolbar>
  `,
  styles: [`
    .spacer { flex: 1 1 auto; }
    .active { background: rgba(255,255,255,0.1); }
    a { color: white; text-decoration: none; }
  `]
})
export class NavbarComponent {}
