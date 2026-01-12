# Angular Dev Starter

A modern Angular 21+ boilerplate with signals, standalone components, Material 3, and a comprehensive UI component library for building scalable web applications.

## Features

- **Angular 21.0.5** with signals and standalone components
- **OnPush change detection** for optimal performance
- **Angular Material 3** theming integrated
- **Vitest** setup with examples
- **Feature-based architecture** with lazy loading
- **Comprehensive UI Component Library** - 14+ reusable components
- **Production-ready** structure and patterns

## Tech Stack

| Technology | Version |
|------------|---------|
| Angular | 21.0.5 |
| TypeScript | 5.9.2 |
| RxJS | 7.8.0 |
| Angular Material | 21.0.6 |
| Tailwind CSS | 4.1.12 |
| SCSS | - |
| Vitest | 4.0.8 |
| Angular CLI | 21.0.5 |

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
ng serve

# Build for production
ng build

# Run tests
ng test

# Run tests with coverage
ng test --coverage
```

Open your browser to `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── core/                    # Singleton services, models, interceptors
│   │   ├── models/              # TypeScript interfaces and types
│   │   └── services/            # Singleton services (API, auth, etc.)
│   ├── features/                # Lazy-loaded feature modules
│   │   ├── home/                # Home page
│   │   ├── about/               # About page
│   │   ├── users/               # Users page
│   │   ├── settings/            # Settings page
│   │   └── components-showcase/ # Component documentation
│   │       ├── components/      # Section components (button, input, etc.)
│   │       ├── components-showcase.component.ts
│   │       └── components-showcase.routes.ts
│   ├── shared/                  # Reusable components and UI library
│   │   ├── ui/                  # UI component library
│   │   │   ├── button/          # Button component
│   │   │   ├── input/           # Input component
│   │   │   ├── card/            # Card component
│   │   │   └── menu/            # Menu component
│   │   ├── components/          # Shared components (navbar, code-snippet)
│   │   └── index.ts             # Barrel exports
│   ├── app.config.ts            # App configuration
│   ├── app.routes.ts            # Route definitions
│   ├── app.ts                   # Root component
│   └── app.html                 # Root template
├── material-theme.scss          # Angular Material theming
├── styles.css                   # Global styles
└── index.html                   # Entry HTML
```

## Component Showcase

Navigate to `/components` to see the comprehensive component library documentation. Each component includes:

- **Live Preview** - Interactive examples of the component
- **Code Tab** - Copy-paste ready usage examples

### Available Components

| Category | Components |
|----------|------------|
| **Form Controls** | Button, Input, Checkbox, Textarea, Select, Radio, Switch |
| **Layout** | Card, Toolbar, Sidenav |
| **Navigation** | Menu |
| **Popups** | Dialog, Snackbar |
| **Data Table** | Table |

## UI Component Library

This starter includes a comprehensive reusable UI component library designed for consistency and developer experience.

### Button Component

**Location:** `src/app/shared/ui/button/button.component.ts`

```typescript
import { ButtonComponent } from '@shared/ui/button';

@Component({
  imports: [ButtonComponent],
  template: `
    <app-button label="Primary" color="primary"></app-button>
    <app-button label="Accent" color="accent"></app-button>
    <app-button label="Warn" color="warn"></app-button>
    <app-button label="Success" color="success"></app-button>
    <app-button label="Outlined" variant="outlined"></app-button>
    <app-button label="Text" variant="text"></app-button>
    <app-button label="Soft" variant="soft"></app-button>
    <app-button label="Small" size="small"></app-button>
    <app-button label="Large" size="large"></app-button>
    <app-button label="With Icon" icon="add"></app-button>
    <app-button label="Loading" [loading]="true"></app-button>
    <app-button label="Disabled" [disabled]="true"></app-button>
    <app-button label="Full Width" [fullWidth]="true"></app-button>
  `
})
export class ExampleComponent {}
```

**Inputs:**
- `label` - Button text
- `icon` - Left icon name
- `iconRight` - Right icon name
- `variant` - `'filled' | 'outlined' | 'text' | 'soft'`
- `color` - `'primary' | 'accent' | 'warn' | 'success' | 'neutral'`
- `size` - `'small' | 'medium' | 'large'`
- `disabled` - Disable the button
- `loading` - Show loading spinner
- `fullWidth` - Make button full width
- `clicked` - Output event for click handler

---

### Input Component

**Location:** `src/app/shared/ui/input/input.component.ts`

```typescript
import { InputComponent } from '@shared/ui/input';

@Component({
  imports: [InputComponent],
  template: `
    <app-input label="Username" placeholder="Enter username"></app-input>
    <app-input label="Email" type="email" placeholder="Enter email"></app-input>
    <app-input label="Password" type="password" suffixButton="visibility"></app-input>
    <app-input label="With Icon" prefixIcon="search"></app-input>
    <app-input label="Error State" error="This field is required"></app-input>
    <app-input label="Disabled" [disabled]="true"></app-input>
    <app-input label="Outline" appearance="outline"></app-input>
    <app-input label="Fill" appearance="fill"></app-input>
  `
})
export class ExampleComponent {}
```

**Inputs:**
- `label` - Field label
- `placeholder` - Placeholder text
- `type` - `'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'`
- `value` - Input value
- `prefixIcon` - Prefix icon name
- `suffixIcon` - Suffix icon name
- `suffixButton` - Button icon in suffix area
- `error` - Error message
- `disabled` - Disable input
- `required` - Mark as required
- `minLength` / `maxLength` - Validation
- `pattern` - Regex pattern
- `appearance` - `'outline' | 'fill'`
- `fullWidth` - Make full width
- `valueChange` - Output event for value changes
- `suffixClick` - Output event for suffix button click

---

### Card Component

**Location:** `src/app/shared/ui/card/card.component.ts`

```typescript
import { CardComponent } from '@shared/ui/card';

@Component({
  imports: [CardComponent],
  template: `
    <app-card header="Card Title" subheader="Subtitle">
      <p>Card content goes here.</p>
    </app-card>
    
    <app-card variant="outlined">
      <p>Outlined card styling.</p>
    </app-card>
    
    <app-card variant="tonal" header="Tonal Card">
      <p>Tonal background styling.</p>
    </app-card>
    
    <app-card image="path/to/image.jpg" header="With Image">
      <p>Card with header image.</p>
    </app-card>
  `
})
export class ExampleComponent {}
```

**Inputs:**
- `header` - Card header text
- `subheader` - Subtitle text
- `variant` - `'elevated' | 'outlined' | 'tonal'`
- `image` - Header image URL
- `clickable` - Make card interactive

---

### Menu Component

**Location:** `src/app/shared/ui/menu/menu.component.ts`

```typescript
import { MenuComponent, type MenuItem } from '@shared/ui/menu';

interface MyMenuItem {
  label: string;
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
  submenu?: MyMenuItem[];
}

@Component({
  imports: [MenuComponent],
  template: `
    <app-menu 
      label="Actions" 
      [items]="menuItems"
      triggerType="button"
      color="primary">
    </app-menu>
    
    <app-menu 
      [items]="iconMenuItems"
      triggerType="icon">
    </app-menu>
  `
})
export class ExampleComponent {
  menuItems: MenuItem[] = [
    { label: 'New Item', icon: 'add' },
    { label: 'Edit', icon: 'edit' },
    { label: 'Duplicate', icon: 'content_copy' },
    { divider: true },
    { label: 'Delete', icon: 'delete', disabled: true },
  ];
  
  iconMenuItems: MenuItem[] = [
    { label: 'Refresh', icon: 'refresh' },
    { label: 'Settings', icon: 'settings' },
    { divider: true },
    { label: 'Sign out', icon: 'logout' },
  ];
}
```

**Inputs:**
- `label` - Button label
- `icon` - Button icon
- `items` - Array of MenuItem objects
- `triggerType` - `'button' | 'icon' | 'text'`
- `color` - Button color
- `arrow` - Show dropdown arrow
- `disabled` - Disable menu
- `menuClass` - Custom CSS class

**MenuItem Interface:**
```typescript
interface MenuItem {
  label?: string;
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
  submenu?: MenuItem[];
}
```

---

## Key Angular Patterns

### Signals for State Management

```typescript
import { signal, computed, effect } from '@angular/core';

@Component({...})
export class MyComponent {
  count = signal(0);
  double = computed(() => this.count() * 2);
  
  constructor() {
    effect(() => {
      console.log('Count changed:', this.count());
    });
  }
  
  increment() {
    this.count.update(c => c + 1);
  }
}
```

### Standalone Components

```typescript
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule],
  template: `<button (click)="handleClick()">{{ label() }}</button>`
})
export class MyComponent {
  label = input('Default');
  clicked = output<void>();
  
  handleClick() {
    this.clicked.emit();
  }
}
```

### Modern Control Flow

```typescript
@Component({
  template: `
    @if (showContent) {
      <p>Content is visible</p>
    } @else {
      <p>Show placeholder</p>
    }
    
    @for (item of items; track item.id) {
      <li>{{ item.name }}</li>
    }
    
    @switch (status) {
      @case ('success') { <p>Success!</p> }
      @case ('error') { <p>Error!</p> }
      @default { <p>Unknown status</p> }
    }
  `
})
export class MyComponent {}
```

### Lazy Loading Routes

```typescript
// app.routes.ts
export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent) },
  { 
    path: 'components', 
    loadComponent: () => import('./features/components-showcase/components-showcase.component').then(m => m.ComponentsShowcaseComponent),
    loadChildren: () => import('./features/components-showcase/components-showcase.routes').then(m => m.COMPONENTS_SHOWCASE_ROUTES)
  },
  { path: '**', redirectTo: '' }
];
```

### Functional Dependency Injection

```typescript
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({...})
export class MyComponent {
  private router = inject(Router);
  
  navigate() {
    this.router.navigate(['/path']);
  }
}
```

## Scripts

| Command | Description |
|---------|-------------|
| `ng serve` | Start development server |
| `ng build` | Build for production |
| `ng build --configuration development` | Build for development |
| `ng test` | Run unit tests |
| `ng test --coverage` | Run tests with coverage report |
| `ng test --watch` | Run tests in watch mode |

## Theming

This project uses CSS custom properties (CSS variables) for easy theming, inspired by shadcn/ui.

### Theme Structure

```
src/
├── styles.css           # Entry point (DO NOT EDIT)
├── styles/
│   ├── variables.css    # Base theme tokens (DO NOT EDIT)
│   └── theme.css        # Your custom overrides (EDIT THIS)
```

### Overriding the Theme

Edit `src/styles/theme.css` to customize colors, typography, spacing, shadows, and more.

```css
/* Example: Change primary brand color */
:root {
  --color-primary-500: #6366f1;
  --color-primary-600: #4f46e5;
}

/* Example: Change typography */
:root {
  --font-family-primary: 'Inter', sans-serif;
  --font-size-base: 16px;
}

/* Example: Change border radius */
:root {
  --radius-md: 8px;
  --radius-lg: 16px;
}
```

### Available CSS Variables

All tokens are defined in `src/styles/variables.css`:

| Category | Variables |
|----------|-----------|
| **Colors** | `--color-primary-*`, `--color-accent-*`, `--color-success-*`, `--color-warning-*`, `--color-error-*`, `--color-gray-*`, `--color-surface*`, `--color-on-*`, `--color-border*` |
| **Spacing** | `--spacing-0` through `--spacing-24` |
| **Border Radius** | `--radius-none`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`, `--radius-2xl`, `--radius-full` |
| **Shadows** | `--shadow-1` through `--shadow-6`, `--shadow-elevated`, `--shadow-hover`, `--shadow-popover`, `--shadow-dialog` |
| **Typography** | `--font-family-primary`, `--font-family-mono`, `--font-size-xs` through `--font-size-4xl`, `--font-weight-*`, `--line-height-*` |

### Dark Mode

Uncomment the dark mode section in `src/styles/theme.css` to enable:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #0a0a0a;
    --color-surface: #1a1a1a;
    --color-on-surface: #ededed;
    --color-gray-100: #1f1f1f;
    --color-gray-200: #2a2a2a;
  }
}
```

### Using Tokens in Components

```typescript
@Component({
  selector: 'app-my-component',
  styles: [`
    :host {
      background-color: var(--color-surface);
      border-radius: var(--radius-md);
      padding: var(--spacing-4);
      box-shadow: var(--shadow-2);
    }
    
    .title {
      color: var(--color-on-surface);
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
    }
  `],
  template: `<h1 class="title">Hello</h1>`
})
export class MyComponent {}
```

## Adding New Components

1. Create component in `src/app/shared/ui/component-name/`
2. Export component and types from `src/app/shared/ui/index.ts`
3. Add documentation section in `src/app/features/components-showcase/components/`
4. Update `components-showcase.routes.ts` with new route
5. Add to sidebar navigation in `components-showcase.component.ts`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
