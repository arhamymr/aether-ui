import { Component } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section';
import { ComponentsShowcaseComponent } from './components/components-showcase/components-showcase.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent,
    ComponentsShowcaseComponent
  ],
  template: `
    <div class="landing-page">
      <app-hero-section />
      <app-components-showcase />
    </div>
  `,
  styles: [`
    .landing-page {
      min-height: 100vh;
    }
  `]
})
export class HomeComponent {}
