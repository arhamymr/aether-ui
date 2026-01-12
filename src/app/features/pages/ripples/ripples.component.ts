import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-ripples',
  imports: [RouterLink, MatRippleModule, MatButtonModule, MatIconModule],
  template: `
    <div class="page-container">
      <nav class="breadcrumb">
        <a routerLink="/components" routerLinkActive="active">Components</a>
        <mat-icon>chevron_right</mat-icon>
        <span>Ripples</span>
      </nav>
      
      <header class="page-header">
        <h1>Ripples</h1>
        <p>Ripple effects for touch interactions.</p>
      </header>
      
      <section class="demo-section">
        <h2>Button with Ripple</h2>
        <p>Buttons with Material ripple effect.</p>
        <div class="demo-row">
          <button mat-raised-button color="primary" matRipple>
            <mat-icon>touch_app</mat-icon>
            Click Me
          </button>
          <button mat-raised-button color="accent" matRipple>
            <mat-icon>star</mat-icon>
            Star
          </button>
          <button mat-raised-button color="warn" matRipple>
            <mat-icon>warning</mat-icon>
            Alert
          </button>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>Centered Ripple</h2>
        <p>Ripple centered on the element.</p>
        <div class="demo-row">
          <button mat-stroked-button matRipple [matRippleCentered]="true">
            Centered Ripple
          </button>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>Ripple with Bounded Container</h2>
        <p>Ripple contained within a specific area.</p>
        <div class="demo-row">
          <div class="ripple-container" matRipple [matRippleCentered]="false" [matRippleRadius]="30">
            <span>Click here</span>
          </div>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>Disabled Ripple</h2>
        <p>Element without ripple effect.</p>
        <div class="demo-row">
          <button mat-raised-button matRippleDisabled color="primary">
            No Ripple
          </button>
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
    .demo-row { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }
    .ripple-container { width: 200px; height: 100px; display: flex; align-items: center; justify-content: center; background: #e3f2fd; border-radius: 8px; cursor: pointer; color: #1976d2; font-weight: 500; transition: background 0.3s; }
    .ripple-container:hover { background: #bbdefb; }
    mat-icon { margin-right: 8px; }
  `]
})
export class PageRipplesComponent {}
