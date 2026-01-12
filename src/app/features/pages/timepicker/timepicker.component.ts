import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-timepicker',
  imports: [RouterLink, MatTimepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatIconModule],
  template: `
    <div class="page-container">
      <nav class="breadcrumb">
        <a routerLink="/components" routerLinkActive="active">Components</a>
        <mat-icon>chevron_right</mat-icon>
        <span>Timepicker</span>
      </nav>
      
      <header class="page-header">
        <h1>Timepicker</h1>
        <p>Picker for selecting time values.</p>
      </header>
      
      <section class="demo-section">
        <h2>Basic Timepicker</h2>
        <p>Standard time selection.</p>
        <div class="demo-row">
          <mat-form-field appearance="outline">
            <mat-label>Select time</mat-label>
            <input matInput [matTimepicker]="picker">
            <mat-timepicker-toggle matIconSuffix [for]="picker"></mat-timepicker-toggle>
            <mat-timepicker #picker></mat-timepicker>
          </mat-form-field>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>With 12-hour Format</h2>
        <p>Timepicker with AM/PM selection.</p>
        <div class="demo-row">
          <mat-form-field appearance="outline">
            <mat-label>Time (12h format)</mat-label>
            <input matInput [matTimepicker]="ampmPicker" format12h>
            <mat-timepicker-toggle matIconSuffix [for]="ampmPicker"></mat-timepicker-toggle>
            <mat-timepicker #ampmPicker format12h></mat-timepicker>
          </mat-form-field>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>Inline Timepicker</h2>
        <p>Timepicker displayed inline.</p>
        <div class="demo-row">
          <mat-form-field appearance="outline">
            <mat-label>Select time</mat-label>
            <input matInput [matTimepicker]="inlinePicker">
            <mat-timepicker-toggle matIconSuffix [for]="inlinePicker"></mat-timepicker-toggle>
            <mat-timepicker #inlinePicker></mat-timepicker>
          </mat-form-field>
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
    mat-form-field { width: 200px; }
  `]
})
export class PageTimepickerComponent {}
