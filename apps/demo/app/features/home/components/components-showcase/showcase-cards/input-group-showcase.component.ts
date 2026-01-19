import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, InputComponent, IconComponent } from '@apsara/ui';

@Component({
  selector: 'app-input-group-showcase',
  standalone: true,
  imports: [CommonModule, CardComponent, InputComponent, IconComponent],
  template: `
    <app-card class="flex-1 flex flex-col h-full">
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-[var(--foreground)] mb-1.5">Input Group</h3>
        <p class="text-sm text-[var(--dimmed)]">Input fields with prefix and suffix addons</p>
      </div>
      <div class="flex-1 flex flex-col gap-4">
        <div class="flex items-center border border-[var(--border)] rounded-md bg-[var(--input)] overflow-hidden">
          <span class="flex items-center justify-center px-3 text-sm text-[var(--dimmed)] bg-[var(--secondary)] h-[38px] border-r border-[var(--border)]">
            <app-icon name="search" size="sm" />
          </span>
          <app-input placeholder="Search..." />
        </div>
        <div class="flex items-center border border-[var(--border)] rounded-md bg-[var(--input)] overflow-hidden">
          <app-input placeholder="Username" />
          <span class="flex items-center justify-center px-3 text-sm text-[var(--dimmed)] bg-[var(--secondary)] h-[38px] border-l border-[var(--border)]">
            @gmail.com
          </span>
        </div>
        <div class="flex items-center border border-[var(--border)] rounded-md bg-[var(--input)] overflow-hidden">
          <span class="flex items-center justify-center px-3 text-sm text-[var(--dimmed)] bg-[var(--secondary)] h-[38px] border-r border-[var(--border)]">
            $
          </span>
          <app-input type="number" placeholder="0.00" />
          <span class="flex items-center justify-center px-3 text-sm text-[var(--dimmed)] bg-[var(--secondary)] h-[38px] border-l border-[var(--border)]">
            .00
          </span>
        </div>
        <div class="flex items-center border border-[var(--border)] rounded-md bg-[var(--input)] overflow-hidden">
          <app-input placeholder="Search packages..." suffixIcon="search" />
        </div>
      </div>
    </app-card>
  `
})
export class InputGroupShowcaseComponent {}
