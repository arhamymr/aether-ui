import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { InputComponent } from '../../shared/ui/input/input.component';
import { AuthService } from './services/auth.service';

type AuthMode = 'login' | 'register';

@Component({
  selector: 'app-auth',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    ButtonComponent,
    InputComponent
  ],
  template: `
    <div class="auth-page">
      <div class="auth-container">
        <div class="auth-card">
          <div class="auth-header">
            <div class="logo-badge">
              <mat-icon>lock</mat-icon>
            </div>
            <h1 class="auth-title">{{ isRegister() ? 'Create Account' : 'Welcome Back' }}</h1>
            <p class="auth-subtitle">
              {{ isRegister() ? 'Sign up to get started' : 'Sign in to your account' }}
            </p>
          </div>

          @if (error()) {
            <div class="error-alert">
              <mat-icon>error</mat-icon>
              <span>{{ error() }}</span>
              <button mat-icon-button (click)="clearError()">
                <mat-icon>close</mat-icon>
              </button>
            </div>
          }

          <form [formGroup]="authForm" (ngSubmit)="onSubmit()" class="auth-form">
            @if (isRegister()) {
              <app-input
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                prefixIcon="person"
                [fullWidth]="true"
                [required]="true"
                formControlName="name"
                [error]="getFieldError('name')" />
            }

            <app-input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              prefixIcon="email"
              [fullWidth]="true"
              [required]="true"
              formControlName="email"
              [error]="getFieldError('email')" />

            <app-input
              [label]="isRegister() ? 'Password' : 'Password'"
              [type]="showPassword() ? 'text' : 'password'"
              [placeholder]="isRegister() ? 'Create a password' : 'Enter your password'"
              prefixIcon="lock"
              suffixIcon="showPassword"
              [fullWidth]="true"
              [required]="true"
              formControlName="password"
              [error]="getFieldError('password')"
              (suffixClick)="togglePasswordVisibility()" />

            @if (isRegister()) {
              <app-input
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                prefixIcon="lock"
                [fullWidth]="true"
                [required]="true"
                formControlName="confirmPassword"
                [error]="getFieldError('confirmPassword')" />
            }

            @if (!isRegister()) {
              <div class="forgot-password">
                <a href="javascript:void(0)" (click)="onForgotPassword()">Forgot password?</a>
              </div>
            }

            <div class="form-actions">
              <app-button
                [label]="isRegister() ? 'Create Account' : 'Sign In'"
                [fullWidth]="true"
                [loading]="loading()"
                [disabled]="!authForm.valid"
                (clicked)="onSubmit()" />
            </div>
          </form>

          <div class="auth-divider">
            <mat-divider />
            <span>or continue with</span>
            <mat-divider />
          </div>

          <div class="social-buttons">
            <app-button
              variant="outlined"
              label="Google"
              icon="img"
              [fullWidth]="true"
              (clicked)="onSocialLogin('google')" />
            <app-button
              variant="outlined"
              label="GitHub"
              icon="code"
              [fullWidth]="true"
              (clicked)="onSocialLogin('github')" />
          </div>

          <div class="auth-footer">
            @if (isRegister()) {
              <span>Already have an account?</span>
              <a href="javascript:void(0)" (click)="toggleMode()">Sign in</a>
            } @else {
              <span>Don't have an account?</span>
              <a href="javascript:void(0)" (click)="toggleMode()">Create one</a>
            }
          </div>
        </div>

        <div class="demo-credentials">
          <mat-card variant="tonal">
            <mat-card-content>
              <h4>Demo Credentials</h4>
              <p><strong>Email:</strong> demo&#64;example.com</p>
              <p><strong>Password:</strong> password123</p>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
      padding: 24px;
    }

    .auth-container {
      width: 100%;
      max-width: 440px;
    }

    .auth-card {
      background: white;
      border-radius: 16px;
      padding: 40px 32px;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    }

    .auth-header {
      text-align: center;
      margin-bottom: 32px;
    }

    .logo-badge {
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
    }

    .logo-badge mat-icon {
      font-size: 32px;
      width: 32px;
      height: 32px;
      color: white;
    }

    .auth-title {
      font-size: 26px;
      font-weight: 600;
      color: #1c1b1f;
      margin: 0 0 8px;
    }

    .auth-subtitle {
      font-size: 14px;
      color: #616161;
      margin: 0;
    }

    .error-alert {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(244, 67, 54, 0.1);
      border: 1px solid rgba(244, 67, 54, 0.2);
      border-radius: 8px;
      padding: 12px 16px;
      margin-bottom: 24px;
      color: #f44336;
      font-size: 14px;
    }

    .error-alert mat-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    .error-alert span {
      flex: 1;
    }

    .error-alert button {
      width: 24px;
      height: 24px;
      line-height: 24px;
    }

    .error-alert button mat-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
    }

    .auth-form {
      margin-bottom: 24px;
    }

    .auth-form app-input {
      margin-bottom: 16px;
    }

    .forgot-password {
      text-align: right;
      margin-bottom: 24px;
    }

    .forgot-password a {
      color: #1976d2;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
    }

    .forgot-password a:hover {
      text-decoration: underline;
    }

    .form-actions {
      margin-top: 8px;
    }

    .auth-divider {
      display: flex;
      align-items: center;
      gap: 16px;
      margin: 24px 0;
    }

    .auth-divider mat-divider {
      flex: 1;
    }

    .auth-divider span {
      font-size: 13px;
      color: #757575;
      white-space: nowrap;
    }

    .social-buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 24px;
    }

    .auth-footer {
      text-align: center;
      font-size: 14px;
      color: #616161;
    }

    .auth-footer a {
      color: #1976d2;
      text-decoration: none;
      font-weight: 500;
      margin-left: 4px;
    }

    .auth-footer a:hover {
      text-decoration: underline;
    }

    .demo-credentials {
      margin-top: 24px;
    }

    .demo-credentials mat-card {
      padding: 16px;
    }

    .demo-credentials h4 {
      margin: 0 0 12px;
      font-size: 14px;
      font-weight: 600;
      color: #1c1b1f;
    }

    .demo-credentials p {
      margin: 4px 0;
      font-size: 13px;
      color: #616161;
    }

    .demo-credentials strong {
      color: #1c1b1f;
    }

    @media (max-width: 480px) {
      .auth-card {
        padding: 32px 24px;
      }

      .social-buttons {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AuthComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  readonly loading = this.authService.loading;
  readonly error = this.authService.error;
  readonly showPassword = signal(false);
  private readonly _isRegister = signal(false);

  readonly isRegister = computed(() => this._isRegister());

  authForm: FormGroup;

  constructor() {
    this.authForm = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    });
  }

  toggleMode(): void {
    this._isRegister.update(v => !v);
    this.authService.clearError();
    this.authForm = this.buildForm();
  }

  togglePasswordVisibility(): void {
    this.showPassword.update(v => !v);
  }

  getFieldError(fieldName: string): string {
    const field = this.authForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        const requiredLength = field.errors['minlength'].requiredLength;
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${requiredLength} characters`;
      }
    }
    return '';
  }

  onSubmit(): void {
    if (this.authForm.valid) {
      const { name, email, password, confirmPassword } = this.authForm.value;
      
      if (this.isRegister()) {
        if (password !== confirmPassword) {
          this.authForm.get('confirmPassword')?.setErrors({ mismatch: true });
          return;
        }
        this.authService.register({ name, email, password, confirmPassword });
      } else {
        this.authService.login({ email, password });
      }
    } else {
      Object.keys(this.authForm.controls).forEach(key => {
        this.authForm.get(key)?.markAsTouched();
      });
    }
  }

  onForgotPassword(): void {
    this.router.navigate(['/auth/forgot-password']);
  }

  onSocialLogin(provider: string): void {
    console.log(`Social login with ${provider}`);
  }

  clearError(): void {
    this.authService.clearError();
  }
}
