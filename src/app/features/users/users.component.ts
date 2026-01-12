import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterOutlet],
  template: `
    <div class="page">
      <h1>{{ title() }}</h1>
      <p>User management page.</p>
      <router-outlet />
    </div>
  `,
  styles: [`
    .page { padding: 2rem; }
    h1 { color: #f57c00; }
  `]
})
export class UsersComponent {
  protected readonly title = signal('Users Page');
}
