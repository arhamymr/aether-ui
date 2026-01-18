import { Component, input, output, signal, Input } from '@angular/core';
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
                [class.bg-primary]="getCurrentStep() >= $index"
                [class.text-white]="getCurrentStep() >= $index"
                [class.bg-gray-200]="getCurrentStep() < $index"
                [class.text-gray-600]="getCurrentStep() < $index">
                @if (getCurrentStep() > $index) {
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
                [class.bg-primary]="getCurrentStep() > $index"
                [class.bg-gray-200]="getCurrentStep() <= $index"></div>
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
          [disabled]="getCurrentStep() === 0"
          (click)="onPrevious()">
          Previous
        </button>
        <button
          class="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg
                 hover:bg-primary/90"
          (click)="onNext()">
          {{ getCurrentStep() === steps().length - 1 ? 'Finish' : 'Next' }}
        </button>
      </div>
    </div>
  `
})
export class StepperComponent {
  steps = input<string[]>([]);
  private _currentStep = signal(0);
  stepChange = output<number>();

  getCurrentStep(): number {
    return this._currentStep();
  }

  @Input()
  set currentStep(value: number) {
    this._currentStep.set(value);
  }

  onNext(): void {
    if (this._currentStep() < this.steps().length - 1) {
      const newStep = this._currentStep() + 1;
      this._currentStep.set(newStep);
      this.stepChange.emit(newStep);
    }
  }

  onPrevious(): void {
    if (this._currentStep() > 0) {
      const newStep = this._currentStep() - 1;
      this._currentStep.set(newStep);
      this.stepChange.emit(newStep);
    }
  }

  cn = cn;
}
