import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@apsara/ui';

interface ComponentItem {
  id: string;
  title: string;
  icon: string;
  description?: string;
}

interface ComponentCategory {
  name: string;
  items: ComponentItem[];
}

@Component({
  selector: 'app-components-overview',
  standalone: true,
  imports: [RouterLink, IconComponent],
  template: `
    <div class="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header class="text-center bg-[var(--surface)] border-b border-[var(--border)] px-8 py-16">
        <h1 class="text-[2.5rem] font-medium mb-4 text-[var(--foreground)]">Components</h1>
        <p class="text-[1.125rem] text-[var(--dimmed)] max-w-[600px] mx-auto leading-relaxed">
          A comprehensive library of accessible, customizable, and performant UI components
        </p>
      </header>

      <main class="max-w-[1400px] mx-auto pt-16">
        @for (category of categories; track category.name) {
          <section class="mb-14">
            <h2 class="text-[1.25rem] font-medium text-[var(--foreground)] mb-6 pb-3 border-b border-[var(--border)]">
              {{ category.name }}
            </h2>
            <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
              @for (item of category.items; track item.id) {
                <a
                  [routerLink]="'/components/' + item.id"
                  class="group flex items-start gap-4 p-5 bg-[var(--card)] border border-[var(--card-border)] rounded-xl no-underline text-inherit transition-all duration-200 hover:border-[var(--primary)] hover:shadow-lg hover:-translate-y-0.5">
                  <div class="flex items-center justify-center size-12 bg-[var(--accent)] rounded-xl flex-shrink-0">
                    <app-icon [name]="item.icon" class="text-[var(--primary)]" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="text-base font-medium mb-0.5 text-[var(--foreground)]">{{ item.title }}</h3>
                    @if (item.description) {
                      <p class="text-sm text-[var(--dimmed)] leading-relaxed m-0">{{ item.description }}</p>
                    }
                  </div>
                  <app-icon name="arrow_forward" class="text-[var(--dimmed)] text-xs self-center opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </a>
              }
            </div>
          </section>
        }
      </main>
    </div>
  `
})
export class ComponentsOverviewComponent {
  categories: ComponentCategory[] = [
    {
      name: 'Alert',
      items: [
        { id: 'alert', title: 'Alert', icon: 'warning', description: 'Feedback and notifications' },
        { id: 'alert-action', title: 'Alert Action', icon: 'bolt', description: 'Action button for alerts' },
        { id: 'alert-description', title: 'Alert Description', icon: 'notes', description: 'Description text for alerts' },
        { id: 'alert-title', title: 'Alert Title', icon: 'title', description: 'Title text for alerts' }
      ]
    },
    {
      name: 'Form Controls',
      items: [
        { id: 'button', title: 'Button', icon: 'smart_button', description: 'Trigger actions and events' },
        { id: 'checkbox', title: 'Checkbox', icon: 'check_box', description: 'Multi-selection control' },
        { id: 'radio', title: 'Radio', icon: 'radio_button_checked', description: 'Single selection from options' },
        { id: 'slide-toggle', title: 'Slide Toggle', icon: 'toggle_on', description: 'On/off binary switch' },
        { id: 'button-toggle', title: 'Button Toggle', icon: 'toggle_button', description: 'Grouped exclusive buttons' },
        { id: 'input', title: 'Input', icon: 'text_fields', description: 'Text field for user entry' },
        { id: 'select', title: 'Select', icon: 'list', description: 'Dropdown selection control' },
        { id: 'autocomplete', title: 'Autocomplete', icon: 'autocomplete', description: 'Searchable dropdown' },
        { id: 'datepicker', title: 'Datepicker', icon: 'calendar_today', description: 'Date selection input' },
        { id: 'timepicker', title: 'Timepicker', icon: 'schedule', description: 'Time selection input' },
        { id: 'slider', title: 'Slider', icon: 'linear_scale', description: 'Range selection control' },
        { id: 'chips', title: 'Chips', icon: 'label', description: 'Compact elements selection' }
      ]
    },
    {
      name: 'Navigation',
      items: [
        { id: 'menu', title: 'Menu', icon: 'menu', description: 'Collapsible navigation list' },
        { id: 'sidenav', title: 'Sidenav', icon: 'vertical_split', description: 'Side navigation panel' },
        { id: 'toolbar', title: 'Toolbar', icon: 'toolbar', description: 'Header action bar' },
        { id: 'tabs', title: 'Tabs', icon: 'tab', description: 'Tabbed navigation' },
        { id: 'list', title: 'List', icon: 'list', description: 'Vertical list of items' },
        { id: 'paginator', title: 'Paginator', icon: 'last_page', description: 'Navigation controls for data' },
        { id: 'stepper', title: 'Stepper', icon: 'linear_scale', description: 'Progress through steps' },
        { id: 'expansion-panel', title: 'Expansion Panel', icon: 'expand_more', description: 'Collapsible content panel' }
      ]
    },
    {
      name: 'Data Display',
      items: [
        { id: 'card', title: 'Card', icon: 'crop_square', description: 'Container for content' },
        { id: 'table', title: 'Table', icon: 'table_chart', description: 'Tabular data display' },
        { id: 'tree', title: 'Tree', icon: 'account_tree', description: 'Hierarchical data structure' },
        { id: 'badge', title: 'Badge', icon: 'local_offer', description: 'Status indicator' },
        { id: 'icon', title: 'Icon', icon: 'insert_emoticon', description: 'Visual symbol representation' },
        { id: 'progress-bar', title: 'Progress Bar', icon: 'progress_bar', description: 'Linear progress indicator' },
        { id: 'spinner', title: 'Spinner', icon: 'refresh', description: 'Loading indicator' },
        { id: 'sort-header', title: 'Sort Header', icon: 'sort', description: 'Column sorting control' }
      ]
    },
    {
      name: 'Layout',
      items: [
        { id: 'divider', title: 'Divider', icon: 'horizontal_rule', description: 'Horizontal line separator' },
        { id: 'grid-list', title: 'Grid List', icon: 'grid_on', description: 'Grid-based layout' }
      ]
    },
    {
      name: 'Overlay',
      items: [
        { id: 'dialog', title: 'Dialog', icon: 'picture_in_picture_alt', description: 'Modal popup window' },
        { id: 'tooltip', title: 'Tooltip', icon: 'info', description: 'Informational tooltip' },
        { id: 'snackbar', title: 'Snackbar', icon: 'notifications', description: 'Brief notification' },
        { id: 'bottom-sheet', title: 'Bottom Sheet', icon: 'vertical_align_bottom', description: 'Slide-up panel' }
      ]
    },
    {
      name: 'Utility',
      items: [
        { id: 'ripples', title: 'Ripples', icon: 'blur_on', description: 'Ripple interaction effect' }
      ]
    }
  ];
}
