import { Component, input, output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [MatInputModule, MatFormFieldModule, FormsModule],
  template: `
    <mat-form-field appearance="outline" class="full-width">
      @if (label()) {
        <mat-label>{{ label() }}</mat-label>
      }
      <input matInput
        [type]="type()"
        [placeholder]="placeholder()"
        [value]="value()"
        (input)="onInput($event)"
        [disabled]="disabled()"
      />
      @if (hint()) {
        <mat-hint>{{ hint() }}</mat-hint>
      }
    </mat-form-field>
  `,
  styles: [`
    .full-width { width: 100%; }
  `]
})
export class InputComponent {
  readonly label = input<string>('');
  readonly type = input<string>('text');
  readonly placeholder = input<string>('');
  readonly value = input<string>('');
  readonly hint = input<string>('');
  readonly disabled = input<boolean>(false);
  readonly valueChange = output<string>();

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value);
  }
}
