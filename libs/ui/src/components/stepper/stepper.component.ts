import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkStepperModule, CdkStep } from '@angular/cdk/stepper';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule, CdkStepperModule],
  template: `
    <div class="w-full">
      <div class="flex items-center justify-between mb-8">
        @for (step of steps(); track $index) {
          <div class="flex items-center">
            <div class="flex flex-col items-center">
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                       transition-colors"
                [class.bg-blue-600]="currentStep() >= $index"
                [class.text-white]="currentStep() >= $index"
                [class.bg-gray-200]="currentStep() < $index"
                [class.text-gray-600]="currentStep() < $index">
                @if (currentStep() > $index) {
                  <i class="material-icons text-sm">check</i>
                } @else {
                  {{ $index + 1 }}
                }
              </div>
              <span class="text-xs mt-1 text-gray-600">{{ step }}</span>
            </div>
            @if ($index < steps().length - 1) {
              <div
                class="w-12 h-0.5 mx-2"
                [class.bg-blue-600]="currentStep() > $index"
                [class.bg-gray-200]="currentStep() <= $index"></div>
            }
          </div>
        }
      </div>
      <div class="py-4">
        <ng-content />
      </div>
      <div class="flex justify-between mt-6">
        <button
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg
                 hover:bg-gray-200 disabled:opacity-50"
          [disabled]="currentStep() === 0"
          (click)="onPrevious()">
          Previous
        </button>
        <button
          class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg
                 hover:bg-blue-700"
          (click)="onNext()">
          {{ currentStep() === steps().length - 1 ? 'Finish' : 'Next' }}
        </button>
      </div>
    </div>
  `
})
export class StepperComponent {
  steps = input<string[]>([]);
  currentStep = signal(0);
  stepChange = output<number>();

  onNext(): void {
    if (this.currentStep() < this.steps().length - 1) {
      const newStep = this.currentStep() + 1;
      this.currentStep.set(newStep);
      this.stepChange.emit(newStep);
    }
  }

  onPrevious(): void {
    if (this.currentStep() > 0) {
      const newStep = this.currentStep() - 1;
      this.currentStep.set(newStep);
      this.stepChange.emit(newStep);
    }
  }

  cn = cn;
}
