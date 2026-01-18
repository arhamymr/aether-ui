import { Component, input, signal, ElementRef, ViewChild, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-ripple',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      #container
      class="relative overflow-hidden"
      (click)="onClick($event)">
      <ng-content />
    </div>
  `
})
export class RippleComponent {
  @ViewChild('container') container?: ElementRef<HTMLDivElement>;
  disabled = input<boolean>(false);
  color = input<string>('rgba(0, 0, 0, 0.1)');

  constructor(private ngZone: NgZone) {}

  onClick(event: MouseEvent): void {
    if (this.disabled()) return;

    const element = this.container?.nativeElement;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'absolute rounded-full animate-ripple pointer-events-none';
    ripple.style.backgroundColor = this.color();
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.left = `${event.clientX - rect.left - 10}px`;
    ripple.style.top = `${event.clientY - rect.top - 10}px`;

    element.appendChild(ripple);

    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => ripple.remove(), 600);
    });
  }

  cn = cn;
}
