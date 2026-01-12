import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '@shared/components/navbar';

interface ComponentSection {
  name: string;
  route: string;
  icon: string;
}

interface ComponentCategory {
  name: string;
  components: ComponentSection[];
}

@Component({
  selector: 'app-components-showcase',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    NavbarComponent
  ],
  template: `
    <div class="showcase-layout">
      <app-navbar />
      
      <div class="showcase-container">
        <aside class="sidebar" [class.collapsed]="sidebarCollapsed()">
          <div class="sidebar-search">
            <mat-form-field appearance="outline" class="search-field">
              <mat-icon matPrefix>search</mat-icon>
              <input matInput 
                     placeholder="Search components..." 
                     [(ngModel)]="searchQuery"
                     (ngModelChange)="filterSections()"
                     aria-label="Search components">
            </mat-form-field>
          </div>
          
          <nav class="sidebar-nav">
            @for (category of filteredCategories(); track category.name) {
              <mat-expansion-panel [expanded]="isCategoryExpanded(category.name)" (opened)="expandCategory(category.name)" (closed)="collapseCategory(category.name)">
                <mat-expansion-panel-header>
                  <mat-panel-title>{{ category.name }}</mat-panel-title>
                </mat-expansion-panel-header>
                <div class="nav-list">
                  @for (component of category.components; track component.route) {
                    <a class="nav-item" 
                       [routerLink]="'/components/' + component.route" 
                       routerLinkActive="active"
                       [routerLinkActiveOptions]="{exact: true}">
                      <mat-icon class="nav-icon">{{ component.icon }}</mat-icon>
                      <span class="nav-label">{{ component.name }}</span>
                    </a>
                  }
                </div>
              </mat-expansion-panel>
            }
          </nav>
        </aside>
        
        <main class="main-content">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
  styles: [`
    .showcase-layout {
      height: 100vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    
    .showcase-container {
      display: flex;
      flex: 1;
      margin-top: 64px;
      height: calc(100vh - 64px);
    }
    
    .sidebar {
      width: 280px;
      background: white;
      border-right: 1px solid #e0e0e0;
      overflow-y: auto;
      transition: width 0.3s ease, margin 0.3s ease;
      flex-shrink: 0;
      
      &.collapsed {
        width: 0;
        margin-left: -280px;
      }
    }
    
    .sidebar-search {
      padding: 16px;
      position: sticky;
      top: 0;
      background: white;
      z-index: 10;
    }
    
    .search-field {
      width: 100%;
    }
    
    ::ng-deep .search-field .mat-mdc-form-field-subscript-wrapper {
      display: none;
    }
    
    .sidebar-nav {
      padding: 0 8px 16px;
    }
    
    ::ng-deep .mat-expansion-panel {
      box-shadow: none !important;
      background: transparent !important;
    }
    
    ::ng-deep .mat-expansion-panel-header {
      padding: 8px 16px;
      height: 48px !important;
    }
    
    .nav-list {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding-bottom: 8px;
    }
    
    .nav-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-radius: 8px;
      text-decoration: none;
      color: #49454f;
      transition: all 0.2s ease;
      
      &:hover {
        background: #f5f5f5;
      }
      
      &.active {
        background: rgba(25, 118, 210, 0.1);
        color: #1976d2;
        
        .nav-icon {
          color: #1976d2;
        }
      }
    }
    
    .nav-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
      color: #757575;
    }
    
    .nav-label {
      font-size: 14px;
      font-weight: 500;
    }
    
    .main-content {
      flex: 1;
      overflow-y: auto;
      padding: 32px;
      background: #fafafa;
    }
  `],
  host: {
    'class': 'showcase-layout'
  }
})
export class ComponentsShowcaseComponent {
  private readonly router = inject(Router);
  
  sidebarCollapsed = signal(false);
  searchQuery = signal('');
  expandedCategories = signal<Set<string>>(new Set(['Form Controls']));
  
  categories: ComponentCategory[] = [
    {
      name: 'Form Controls',
      components: [
        { name: 'Button', route: 'button', icon: 'smart_button' },
        { name: 'Input', route: 'input', icon: 'input' },
        { name: 'Checkbox', route: 'checkbox', icon: 'check_box' },
        { name: 'Textarea', route: 'textarea', icon: 'notes' },
        { name: 'Select', route: 'select', icon: 'arrow_drop_down_circle' },
        { name: 'Radio', route: 'radio', icon: 'radio_button_checked' },
        { name: 'Switch', route: 'switch', icon: 'toggle_on' },
        { name: 'Slider', route: 'slider', icon: 'linear_scale' },
        { name: 'Slide Toggle', route: 'slidetoggle', icon: 'toggle_on' },
        { name: 'Datepicker', route: 'datepicker', icon: 'date_range' },
        { name: 'Timepicker', route: 'timepicker', icon: 'access_time' },
        { name: 'Autocomplete', route: 'autocomplete', icon: 'autocomplete' },
        { name: 'Form Field', route: 'formfield', icon: 'text_fields' },
        { name: 'Button Toggle', route: 'buttontoggle', icon: 'toggle' },
      ]
    },
    {
      name: 'Layout',
      components: [
        { name: 'Card', route: 'card', icon: 'card_giftcard' },
        { name: 'Toolbar', route: 'toolbar', icon: 'view_week' },
        { name: 'Sidenav', route: 'sidenav', icon: 'view_sidebar' },
        { name: 'Grid List', route: 'gridlist', icon: 'grid_on' },
        { name: 'List', route: 'list', icon: 'list' },
        { name: 'Expansion Panel', route: 'expansion', icon: 'expand_more' },
        { name: 'Divider', route: 'divider', icon: 'horizontal_rule' },
      ]
    },
    {
      name: 'Navigation',
      components: [
        { name: 'Menu', route: 'menu', icon: 'menu' },
        { name: 'Tree', route: 'tree', icon: 'account_tree' },
        { name: 'Tabs', route: 'tabs', icon: 'tab' },
        { name: 'Stepper', route: 'stepper', icon: 'steps' },
      ]
    },
    {
      name: 'Popups & Modals',
      components: [
        { name: 'Dialog', route: 'dialog', icon: 'picture_in_picture_alt' },
        { name: 'Snackbar', route: 'snackbar', icon: 'notifications' },
        { name: 'Bottom Sheet', route: 'bottomsheet', icon: 'vertical_align_bottom' },
        { name: 'Tooltip', route: 'tooltip', icon: 'info' },
      ]
    },
    {
      name: 'Data Table',
      components: [
        { name: 'Table', route: 'table', icon: 'table_chart' },
        { name: 'Sort Header', route: 'sortheader', icon: 'sort' },
        { name: 'Paginator', route: 'paginator', icon: 'paginator' },
      ]
    },
    {
      name: 'Indicators',
      components: [
        { name: 'Badge', route: 'badge', icon: 'notification_important' },
        { name: 'Chips', route: 'chips', icon: 'label' },
        { name: 'Progress Bar', route: 'progressbar', icon: 'progress_bar' },
        { name: 'Progress Spinner', route: 'progressspinner', icon: 'spinner' },
        { name: 'Icon', route: 'icon', icon: 'insert_emoticon' },
      ]
    },
    {
      name: 'Utilities',
      components: [
        { name: 'Core', route: 'core', icon: 'settings' },
        { name: 'Ripples', route: 'ripples', icon: 'touch_app' },
      ]
    }
  ];
  
  filteredCategories = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.categories;
    
    return this.categories.map(category => ({
      ...category,
      components: category.components.filter(
        component => component.name.toLowerCase().includes(query)
      )
    })).filter(category => category.components.length > 0);
  });
  
  toggleSidebar(): void {
    this.sidebarCollapsed.update(collapsed => !collapsed);
  }
  
  expandCategory(categoryName: string): void {
    this.expandedCategories.update(cats => {
      const newCats = new Set(cats);
      newCats.add(categoryName);
      return newCats;
    });
  }
  
  collapseCategory(categoryName: string): void {
    this.expandedCategories.update(cats => {
      const newCats = new Set(cats);
      newCats.delete(categoryName);
      return newCats;
    });
  }
  
  isCategoryExpanded(categoryName: string): boolean {
    return this.expandedCategories().has(categoryName);
  }
  
  filterSections(): void {
    const query = this.searchQuery().toLowerCase().trim();
    if (query) {
      this.expandedCategories.set(new Set(this.categories.map(c => c.name)));
    }
  }
}
