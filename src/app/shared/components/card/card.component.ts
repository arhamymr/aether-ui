import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ title() }}</mat-card-title>
        <mat-card-subtitle>{{ subtitle() }}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <ng-content />
      </mat-card-content>
      <mat-card-actions>
        <ng-content select="[actions]" />
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class CardComponent {
  readonly title = input<string>('');
  readonly subtitle = input<string>('');
}
