import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@apsara/ui';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, IconComponent],
  template: `
    <footer class="border-t border-[var(--border)] bg-[var(--surface)] py-6">
      <div class="max-w-[1400px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-[var(--dimmed)]">
          Built by
          <a href="https://apsaradigital.com" target="_blank" rel="noopener noreferrer" class="text-[var(--primary)] hover:underline">
            apsaradigital.com
          </a>
        </p>
        <div class="flex items-center gap-4">
          <a href="https://github.com/apsaradigital" target="_blank" rel="noopener noreferrer" class="text-[var(--dimmed)] hover:text-[var(--foreground)] transition-colors" aria-label="GitHub">
            <app-icon name="code" class="text-lg" />
          </a>
          <a href="https://twitter.com/apsaradigital" target="_blank" rel="noopener noreferrer" class="text-[var(--dimmed)] hover:text-[var(--foreground)] transition-colors" aria-label="Twitter">
            <app-icon name="chat" class="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
