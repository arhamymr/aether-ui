import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-slider',
  imports: [RouterLink, MatSliderModule, FormsModule, MatIconModule],
  template: `
    <div class="page-container">
      <nav class="breadcrumb">
        <a routerLink="/components" routerLinkActive="active">Components</a>
        <mat-icon>chevron_right</mat-icon>
        <span>Slider</span>
      </nav>
      
      <header class="page-header">
        <h1>Slider</h1>
        <p>Slider for selecting a value from a range.</p>
      </header>
      
      <section class="demo-section">
        <h2>Basic Slider</h2>
        <p>Simple slider for selecting a value.</p>
        <div class="demo-row">
          <mat-slider min="0" max="100" step="1">
            <input matSliderThumb [(ngModel)]="sliderValue">
          </mat-slider>
          <span class="value-display">{{sliderValue}}</span>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>With Thumb Label</h2>
        <p>Slider showing the current value.</p>
        <div class="demo-row">
          <mat-slider min="0" max="100" step="1" showThumbLabel="true">
            <input matSliderThumb>
          </mat-slider>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>With Tick Interval</h2>
        <p>Slider with tick marks.</p>
        <div class="demo-row">
          <mat-slider min="0" max="100" step="1" tickInterval="10">
            <input matSliderThumb>
          </mat-slider>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>Color Variants</h2>
        <p>Sliders with different colors.</p>
        <div class="demo-row">
          <mat-slider min="0" max="100" step="1" color="primary">
            <input matSliderThumb value="30">
          </mat-slider>
          <mat-slider min="0" max="100" step="1" color="accent">
            <input matSliderThumb value="50">
          </mat-slider>
          <mat-slider min="0" max="100" step="1" color="warn">
            <input matSliderThumb value="70">
          </mat-slider>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>Range Slider</h2>
        <p>Slider for selecting a range.</p>
        <div class="demo-row">
          <mat-slider min="0" max="100" step="1" class="range-slider">
            <input matSliderStartThumb [(ngModel)]="rangeStart">
            <input matSliderEndThumb [(ngModel)]="rangeEnd">
          </mat-slider>
          <span class="value-display">{{rangeStart}} - {{rangeEnd}}</span>
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
    .value-display { font-weight: 500; color: #1c1b1f; min-width: 40px; }
    .range-slider { width: 300px; }
  `]
})
export class PageSliderComponent {
  sliderValue = 50;
  rangeStart = 30;
  rangeEnd = 70;
}
