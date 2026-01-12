import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [RouterOutlet],
  template: `
    <div class="page">
      <h1>{{ title() }}</h1>
      <p>Settings and preferences.</p>
      <router-outlet />
    </div>
  `,
  styles: [`
    .page { padding: 2rem; }
    h1 { color: #7b1fa2; }
  `]
})
export class SettingsComponent {
  protected readonly title = signal('Settings Page');
}
