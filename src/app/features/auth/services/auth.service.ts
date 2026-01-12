import { Injectable, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { delay, of, throwError } from 'rxjs';
import { type LoginCredentials, type RegisterCredentials, type AuthResponse, type AuthUser } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly router = inject(Router);
  
  private readonly _user = signal<AuthUser | null>(null);
  private readonly _loading = signal<boolean>(false);
  private readonly _error = signal<string | null>(null);
  
  readonly user = computed(() => this._user());
  readonly loading = computed(() => this._loading());
  readonly error = computed(() => this._error());
  readonly isAuthenticated = computed(() => !!this._user());

  constructor() {
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
      try {
        this._user.set(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem('auth_user');
      }
    }
  }

  private setUser(user: AuthUser): void {
    this._user.set(user);
    localStorage.setItem('auth_user', JSON.stringify(user));
  }

  login(credentials: LoginCredentials) {
    this._loading.set(true);
    this._error.set(null);

    return of(this.mockLogin(credentials)).pipe(
      delay(1000)
    ).subscribe({
      next: (response) => {
        this.setUser(response.user);
        localStorage.setItem('access_token', response.accessToken);
        localStorage.setItem('refresh_token', response.refreshToken);
        this._loading.set(false);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this._error.set(err.message);
        this._loading.set(false);
      }
    });
  }

  register(credentials: RegisterCredentials) {
    this._loading.set(true);
    this._error.set(null);

    return of(this.mockRegister(credentials)).pipe(
      delay(1000)
    ).subscribe({
      next: (response) => {
        this.setUser(response.user);
        localStorage.setItem('access_token', response.accessToken);
        localStorage.setItem('refresh_token', response.refreshToken);
        this._loading.set(false);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this._error.set(err.message);
        this._loading.set(false);
      }
    });
  }

  logout(): void {
    this._user.set(null);
    localStorage.removeItem('auth_user');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['/auth/login']);
  }

  clearError(): void {
    this._error.set(null);
  }

  private mockLogin(credentials: LoginCredentials): AuthResponse {
    if (credentials.email === 'demo@example.com' && credentials.password === 'password123') {
      return {
        user: {
          id: '1',
          email: credentials.email,
          name: 'Demo User',
          avatar: ''
        },
        accessToken: 'mock-access-token',
        refreshToken: 'mock-refresh-token'
      };
    }
    throw new Error('Invalid email or password');
  }

  private mockRegister(credentials: RegisterCredentials): AuthResponse {
    if (credentials.password !== credentials.confirmPassword) {
      throw new Error('Passwords do not match');
    }
    return {
      user: {
        id: '1',
        email: credentials.email,
        name: credentials.name,
        avatar: ''
      },
      accessToken: 'mock-access-token',
      refreshToken: 'mock-refresh-token'
    };
  }
}
