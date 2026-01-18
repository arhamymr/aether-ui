import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

interface ComponentSection {
  id: string;
  title: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-components-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, MatIconModule],
  template: `
    <div class="flex min-h-[calc(100vh-64px)]">
      <aside class="w-[280px] bg-[var(--secondary)] border-r border-[var(--border)] flex flex-col sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
        <div class="p-6 border-b border-[var(--border)]">
          <h2 class="font-semibold text-[var(--foreground)]">Components</h2>
          <p class="text-xs text-[var(--dimmed)] mt-1">UI Library v1.0.0</p>
        </div>

        <nav class="flex-1 p-4 flex flex-col gap-1">
          @for (section of sections; track section.id) {
            <a
              [href]="'/components/' + section.id"
              [routerLink]="'/components/' + section.id"
              routerLinkActive="bg-[var(--accent)]"
              class="flex items-center gap-3 px-3 py-2.5 rounded-lg border-none bg-transparent cursor-pointer text-left transition-all duration-200 text-[var(--dimmed)] text-sm font-medium hover:bg-[var(--accent)]">
              <mat-icon class="text-center text-sm">{{ section.icon }}</mat-icon>
              <span>{{ section.title }}</span>
            </a>
          }
        </nav>
      </aside>

      <main class="flex-1 p-12 max-w-[900px]">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ComponentsLayoutComponent {
  sections: ComponentSection[] = [
    { id: 'alert', title: 'Alert', icon: 'warning', category: 'Data Display' },
    { id: 'button', title: 'Button', icon: 'smart_button', category: 'Form' },
    { id: 'card', title: 'Card', icon: 'crop_square', category: 'Data Display' },
    { id: 'input', title: 'Input', icon: 'text_fields', category: 'Form' },
    { id: 'tabs', title: 'Tabs', icon: 'tab', category: 'Navigation' },
    { id: 'checkbox', title: 'Checkbox', icon: 'check_box', category: 'Form' },
    { id: 'radio', title: 'Radio', icon: 'radio_button_checked', category: 'Form' },
    { id: 'slide-toggle', title: 'Slide Toggle', icon: 'toggle_on', category: 'Form' },
    { id: 'button-toggle', title: 'Button Toggle', icon: 'toggle_button', category: 'Form' },
    { id: 'select', title: 'Select', icon: 'list', category: 'Form' },
    { id: 'autocomplete', title: 'Autocomplete', icon: 'autocomplete', category: 'Form' },
    { id: 'datepicker', title: 'Datepicker', icon: 'calendar_today', category: 'Form' },
    { id: 'timepicker', title: 'Timepicker', icon: 'schedule', category: 'Form' },
    { id: 'slider', title: 'Slider', icon: 'linear_scale', category: 'Form' },
    { id: 'chips', title: 'Chips', icon: 'label', category: 'Form' },
    { id: 'badge', title: 'Badge', icon: 'local_offer', category: 'Data Display' },
    { id: 'icon', title: 'Icon', icon: 'insert_emoticon', category: 'Data Display' },
    { id: 'progress-bar', title: 'Progress Bar', icon: 'progress_bar', category: 'Data Display' },
    { id: 'spinner', title: 'Spinner', icon: 'refresh', category: 'Data Display' },
    { id: 'toolbar', title: 'Toolbar', icon: 'toolbar', category: 'Navigation' },
    { id: 'list', title: 'List', icon: 'list', category: 'Navigation' },
    { id: 'menu', title: 'Menu', icon: 'menu', category: 'Navigation' },
    { id: 'sidenav', title: 'Sidenav', icon: 'vertical_split', category: 'Navigation' },
    { id: 'table', title: 'Table', icon: 'table_chart', category: 'Data Display' },
    { id: 'tree', title: 'Tree', icon: 'account_tree', category: 'Data Display' },
    { id: 'paginator', title: 'Paginator', icon: 'last_page', category: 'Navigation' },
    { id: 'expansion-panel', title: 'Expansion Panel', icon: 'expand_more', category: 'Navigation' },
    { id: 'dialog', title: 'Dialog', icon: 'picture_in_picture_alt', category: 'Overlay' },
    { id: 'tooltip', title: 'Tooltip', icon: 'info', category: 'Overlay' },
    { id: 'snackbar', title: 'Snackbar', icon: 'notifications', category: 'Overlay' },
    { id: 'bottom-sheet', title: 'Bottom Sheet', icon: 'vertical_align_bottom', category: 'Overlay' },
    { id: 'divider', title: 'Divider', icon: 'horizontal_rule', category: 'Layout' },
    { id: 'grid-list', title: 'Grid List', icon: 'grid_on', category: 'Layout' },
    { id: 'stepper', title: 'Stepper', icon: 'linear_scale', category: 'Navigation' },
    { id: 'sort-header', title: 'Sort Header', icon: 'sort', category: 'Data Display' },
    { id: 'ripples', title: 'Ripples', icon: 'blur_on', category: 'Utility' }
  ];
}
