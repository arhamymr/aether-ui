import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from '@apsara/ui';

@Component({
  selector: 'app-stepper-showcase',
  standalone: true,
  imports: [CommonModule, StepperComponent],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Horizontal Stepper</h3>
        <app-stepper
          [steps]="['Account', 'Profile', 'Review']"
          [currentStep]="currentStep()"
          (stepChange)="onStepChange($event)" />
        <div class="mt-6 p-4 bg-gray-50 rounded-lg">
          <p class="text-sm text-gray-600">
            Current Step: <strong>Step {{ currentStep() + 1 }} - {{ getStepContent() }}</strong>
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .ai-review-banner {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 1.5rem;
      background: #fef3c7;
      border: 1px solid #f59e0b;
      border-radius: 8px;
      margin-bottom: 2rem;
    }

    .ai-review-icon {
      font-size: 1.25rem;
    }

    .ai-review-text {
      font-size: 0.875rem;
      font-weight: 600;
      color: #92400e;
    }
  `]
})
export class StepperShowcaseComponent {
  currentStep = signal(0);

  onStepChange(step: number): void {
    this.currentStep.set(step);
  }

  getStepContent(): string {
    const contents = [
      'Enter your account details',
      'Fill in your profile information',
      'Review before submitting'
    ];
    return contents[this.currentStep()];
  }
}
