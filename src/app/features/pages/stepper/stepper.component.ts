import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-stepper',
  imports: [RouterLink, MatStepperModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatIconModule],
  template: `
    <div class="page-container">
      <nav class="breadcrumb">
        <a routerLink="/components" routerLinkActive="active">Components</a>
        <mat-icon>chevron_right</mat-icon>
        <span>Stepper</span>
      </nav>
      
      <header class="page-header">
        <h1>Stepper</h1>
        <p>Stepper for multi-step forms and wizards.</p>
      </header>
      
      <section class="demo-section">
        <h2>Horizontal Stepper</h2>
        <p>Multi-step form with horizontal layout.</p>
        <div class="demo-row">
          <mat-stepper [linear]="true" #stepper>
            <mat-step label="Personal Info">
              <div class="step-content">
                <mat-form-field appearance="outline">
                  <mat-label>First Name</mat-label>
                  <input matInput>
                </mat-form-field>
                <mat-form-field appearance="outline">
                  <mat-label>Last Name</mat-label>
                  <input matInput>
                </mat-form-field>
                <div class="step-actions">
                  <button mat-raised-button color="primary" matStepperNext>Next</button>
                </div>
              </div>
            </mat-step>
            
            <mat-step label="Contact">
              <div class="step-content">
                <mat-form-field appearance="outline">
                  <mat-label>Email</mat-label>
                  <input matInput type="email">
                </mat-form-field>
                <mat-form-field appearance="outline">
                  <mat-label>Phone</mat-label>
                  <input matInput type="tel">
                </mat-form-field>
                <div class="step-actions">
                  <button mat-button matStepperPrevious>Back</button>
                  <button mat-raised-button color="primary" matStepperNext>Next</button>
                </div>
              </div>
            </mat-step>
            
            <mat-step label="Review">
              <div class="step-content">
                <p>Review your information before submitting.</p>
                <div class="step-actions">
                  <button mat-button matStepperPrevious>Back</button>
                  <button mat-raised-button color="primary">Submit</button>
                </div>
              </div>
            </mat-step>
          </mat-stepper>
        </div>
      </section>
      
      <section class="demo-section">
        <h2>Vertical Stepper</h2>
        <p>Multi-step form with vertical layout.</p>
        <div class="demo-row">
          <mat-stepper [linear]="true" orientation="vertical" #verticalStepper>
            <mat-step label="Account">
              <div class="step-content">
                <mat-form-field appearance="outline">
                  <mat-label>Username</mat-label>
                  <input matInput>
                </mat-form-field>
                <div class="step-actions">
                  <button mat-raised-button color="primary" matStepperNext>Next</button>
                </div>
              </div>
            </mat-step>
            
            <mat-step label="Security">
              <div class="step-content">
                <mat-form-field appearance="outline">
                  <mat-label>Password</mat-label>
                  <input matInput type="password">
                </mat-form-field>
                <div class="step-actions">
                  <button mat-button matStepperPrevious>Back</button>
                  <button mat-raised-button color="primary" matStepperNext>Next</button>
                </div>
              </div>
            </mat-step>
            
            <mat-step label="Complete">
              <div class="step-content">
                <p>Account setup complete!</p>
                <div class="step-actions">
                  <button mat-button matStepperPrevious>Back</button>
                  <button mat-raised-button color="primary" (click)="verticalStepper.reset()">Reset</button>
                </div>
              </div>
            </mat-step>
          </mat-stepper>
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
    .step-content { display: flex; flex-direction: column; gap: 16px; padding: 16px 0; }
    .step-actions { display: flex; gap: 8px; }
    mat-form-field { width: 250px; }
  `]
})
export class PageStepperComponent {}
