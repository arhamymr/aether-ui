import { Component } from '@angular/core';

@Component({
  selector: 'app-icons-demo',
  standalone: true,
  template: `
    <div class="icons-demo">
      <h2>Icons Demo</h2>
      <p>Lucide icons have been removed from this template.</p>
    </div>
  `,
  styles: [`
    .icons-demo {
      padding: 2rem;
      font-family: system-ui, -apple-system, sans-serif;
    }
  `]
})
export class IconsDemoComponent {}
