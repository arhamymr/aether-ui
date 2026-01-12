import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet],
  template: `
    <div class="page">
      <h1>{{ title() }}</h1>
      <p>This is the About page.</p>
      <router-outlet />
    </div>
  `,
  styles: [`
    .page { padding: 2rem; }
    h1 { color: #388e3c; }
  `]
})
export class AboutComponent {
  protected readonly title = signal('About Page');
}
