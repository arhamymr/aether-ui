import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../../core/services';
import { IconComponent, ButtonComponent } from '@apsara/ui';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage, IconComponent, ButtonComponent],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)] px-4">
      <div class="max-w-[1400px] mx-auto flex items-center justify-between h-16">
        <div class="flex items-center gap-3">
          <a routerLink="/" class="flex items-center">
            <img
              [ngSrc]="themeService.theme() === 'dark' ? 'https://assets.apsaradigital.com/logo-angular-white.png' : 'https://assets.apsaradigital.com/logo-angular.png'"
              width="100"
              height="25"
              alt="Logo"
              class="h-5 w-auto">
          </a>
          <span class="bg-[oklch(0.55_0.2_250/0.1)] text-[var(--primary)] text-[11px] font-semibold px-2 py-1 rounded-sm">
            v1.0.0
          </span>
        </div>

        <div class="flex items-center gap-1">
          <a routerLink="/components" routerLinkActive="bg-[var(--accent)] text-[var(--foreground)]" [routerLinkActiveOptions]="{exact: false}"
             class="text-[var(--foreground)] no-underline px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-[var(--accent)]">
            Components
          </a>
          <a routerLink="/docs" routerLinkActive="bg-[var(--accent)] text-[var(--foreground)]"
             class="text-[var(--foreground)] no-underline px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-[var(--accent)]">
            Docs
          </a>

          <app-button
            variant="tertiary"
            size="icon"
            class="ml-2"
            (clicked)="themeService.toggle()">
            @if (themeService.theme() === 'dark') {
              <app-icon name="light_mode" />
            } @else {
              <app-icon name="dark_mode" />
            }
          </app-button>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  themeService = inject(ThemeService);
}
