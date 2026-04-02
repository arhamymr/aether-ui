import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent, CardComponent, TabsComponent, TableComponent } from '@aether/ui';
import { CodeSnippetComponent } from '../../shared/components/code-snippet/code-snippet.component';
import { LucideAngularModule, Volume2, Volume1, VolumeX, Sun, Moon, Thermometer, Star, DollarSign } from 'lucide-angular';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

interface SliderProp {
  name: string;
  type: string;
  default?: string;
  description: string;
}

@Component({
  selector: 'app-slider-showcase',
  standalone: true,
  imports: [CommonModule, SliderComponent, CardComponent, TabsComponent, TableComponent, LucideAngularModule, CodeSnippetComponent, FormsModule, ReactiveFormsModule],
  template: `
    <section id="slider" class="mb-16 scroll-m-20">
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-foreground mb-2">Slider</h2>
        <p class="text-muted-foreground">A slider component for selecting values from a range with support for forms, disabled states, and custom sizes.</p>
      </div>

      <app-card>
        <app-tabs [options]="previewCodeOptions" [modelValue]="basicTab()" (changed)="basicTab.set($event)">
          @if (basicTab() === 'preview') {
            <div class="p-6">
              <div class="flex flex-col gap-6">
                <div>
                  <label class="text-sm font-medium text-foreground mb-2 block">Volume: {{ volume }}%</label>
                  <div class="flex items-center gap-3">
                    <lucide-angular [img]="VolumeX" [size]="18" class="text-gray-400 flex-shrink-0" />
                    <app-slider
                      [(ngModel)]="volume"
                      [min]="0"
                      [max]="100"
                      [step]="1"
                      [showValue]="false" />
                    <lucide-angular [img]="Volume2" [size]="18" class="text-gray-400 flex-shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          } @else {
            <app-code-snippet [code]="basicCode" language="html" />
          }
        </app-tabs>
      </app-card>

      <div class="mt-8">
        <h3 class="text-lg font-semibold text-foreground mb-4">Installation</h3>
        <app-code-snippet [code]="installCode" language="bash" />
      </div>

      <div class="mt-8">
        <h3 class="text-lg font-semibold text-foreground mb-4">Usage</h3>
        <app-code-snippet [code]="importCode" language="typescript" />
        <app-code-snippet [code]="usageCode" language="html" />
      </div>

      <div class="mt-8">
        <h3 class="text-lg font-semibold text-foreground mb-4">Configurable Options</h3>
        <p class="text-muted-foreground mb-4">Customize the slider appearance with ticks and thumb labels</p>
        <app-card>
          <app-tabs [options]="previewCodeOptions" [modelValue]="configTab()" (changed)="configTab.set($event)">
            @if (configTab() === 'preview') {
              <div class="p-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Controls -->
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <label class="text-sm font-medium text-foreground">Show Ticks</label>
                      <input 
                        type="checkbox" 
                        [(ngModel)]="configShowTicks" 
                        class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                    </div>
                    <div class="flex items-center justify-between">
                      <label class="text-sm font-medium text-foreground">Thumb Label</label>
                      <input 
                        type="checkbox" 
                        [(ngModel)]="configThumbLabel" 
                        class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                    </div>
                    <div>
                      <label class="text-sm font-medium text-foreground mb-2 block">Value: {{ configValue() }}</label>
                      <app-slider 
                        [(ngModel)]="configValue"
                        [showTicks]="configShowTicks()"
                        [thumbLabel]="configThumbLabel()"
                        [tickInterval]="configTickInterval"
                        [min]="0"
                        [max]="100"
                        [step]="1" />
                    </div>
                  </div>

                  <!-- Description -->
                  <div class="bg-muted p-4 rounded-lg space-y-3">
                    <div>
                      <h4 class="text-sm font-semibold text-foreground mb-1">Show Ticks</h4>
                      <p class="text-xs text-muted-foreground">Display tick marks along the slider track at regular intervals.</p>
                    </div>
                    <div>
                      <h4 class="text-sm font-semibold text-foreground mb-1">Thumb Label</h4>
                      <p class="text-xs text-muted-foreground">Show a tooltip above the thumb displaying the current value.</p>
                    </div>
                  </div>
                </div>
              </div>
            } @else {
              <app-code-snippet [code]="configCode" language="html" />
            }
          </app-tabs>
        </app-card>
      </div>

      <div class="mt-8">
        <h3 class="text-lg font-semibold text-foreground mb-4">Step Increments</h3>
        <p class="text-muted-foreground mb-4">Control the granularity of value changes with the step property</p>
        <app-card>
          <app-tabs [options]="previewCodeOptions" [modelValue]="stepTab()" (changed)="stepTab.set($event)">
            @if (stepTab() === 'preview') {
              <div class="p-6">
                <div class="flex flex-col gap-6">
                  <div>
                    <div class="flex items-center justify-between mb-2">
                      <label class="text-sm font-medium text-foreground">Step 1 (Default)</label>
                      <span class="text-sm text-muted-foreground">{{ step1() }}</span>
                    </div>
                    <app-slider [(ngModel)]="step1" [min]="0" [max]="100" [step]="1" [showValue]="false" />
                  </div>
                  <div>
                    <div class="flex items-center justify-between mb-2">
                      <label class="text-sm font-medium text-foreground">Step 5</label>
                      <span class="text-sm text-muted-foreground">{{ step5() }}</span>
                    </div>
                    <app-slider [(ngModel)]="step5" [min]="0" [max]="100" [step]="5" [showValue]="false" />
                  </div>
                  <div>
                    <div class="flex items-center justify-between mb-2">
                      <label class="text-sm font-medium text-foreground">Step 10</label>
                      <span class="text-sm text-muted-foreground">{{ step10() }}</span>
                    </div>
                    <app-slider [(ngModel)]="step10" [min]="0" [max]="100" [step]="10" [showValue]="false" />
                  </div>
                  <div>
                    <div class="flex items-center justify-between mb-2">
                      <label class="text-sm font-medium text-foreground">Step 25</label>
                      <span class="text-sm text-muted-foreground">{{ step25() }}</span>
                    </div>
                    <app-slider [(ngModel)]="step25" [min]="0" [max]="100" [step]="25" [showValue]="false" />
                  </div>
                </div>
              </div>
            } @else {
              <app-code-snippet [code]="stepCode" language="html" />
            }
          </app-tabs>
        </app-card>
      </div>

      <div class="mt-8">
        <h3 class="text-lg font-semibold text-foreground mb-4">Custom Range</h3>
        <p class="text-muted-foreground mb-4">Define custom min and max values for your specific use case</p>
        <app-card>
          <app-tabs [options]="previewCodeOptions" [modelValue]="rangeTab()" (changed)="rangeTab.set($event)">
            @if (rangeTab() === 'preview') {
              <div class="p-6">
                <div class="flex flex-col gap-6">
                  <div>
                    <div class="flex items-center justify-between mb-2">
                      <label class="text-sm font-medium text-foreground">Price Range</label>
                      <span class="text-sm text-muted-foreground">\${{ price() }}</span>
                    </div>
                    <app-slider [(ngModel)]="price" [min]="0" [max]="1000" [step]="10" [showValue]="false" />
                  </div>
                  <div>
                    <div class="flex items-center justify-between mb-2">
                      <label class="text-sm font-medium text-foreground">Temperature (°C)</label>
                      <span class="text-sm text-muted-foreground">{{ temperature() }}°C</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <lucide-angular [img]="Thermometer" [size]="18" class="text-blue-400 flex-shrink-0" />
                      <app-slider [(ngModel)]="temperature" [min]="-10" [max]="40" [step]="1" [showValue]="false" />
                    </div>
                  </div>
                  <div>
                    <div class="flex items-center justify-between mb-2">
                      <label class="text-sm font-medium text-foreground">Rating</label>
                      <div class="flex items-center gap-1">
                        @for (i of [1,2,3,4,5]; track i) {
                          <lucide-angular [img]="Star" [size]="16" [class.fill-yellow-400]="i <= rating()" [class.text-yellow-400]="i <= rating()" [class.text-gray-300]="i > rating()" />
                        }
                        <span class="text-sm text-muted-foreground ml-2">{{ rating() }}/5</span>
                      </div>
                    </div>
                    <app-slider [(ngModel)]="rating" [min]="1" [max]="5" [step]="1" [showValue]="false" />
                  </div>
                </div>
              </div>
            } @else {
              <app-code-snippet [code]="rangeCode" language="html" />
            }
          </app-tabs>
        </app-card>
      </div>

      <div class="mt-8">
        <h3 class="text-lg font-semibold text-foreground mb-4">Disabled State</h3>
        <p class="text-muted-foreground mb-4">Sliders can be disabled to prevent user interaction</p>
        <app-card>
          <app-tabs [options]="previewCodeOptions" [modelValue]="disabledTab()" (changed)="disabledTab.set($event)">
            @if (disabledTab() === 'preview') {
              <div class="p-6">
                <div class="flex flex-col gap-6">
                  <div>
                    <span class="text-xs text-muted-foreground font-medium mb-2 block">Disabled (value 30)</span>
                    <app-slider [ngModel]="30" [disabled]="true" />
                  </div>
                  <div>
                    <span class="text-xs text-muted-foreground font-medium mb-2 block">Disabled (value 70, no value display)</span>
                    <app-slider [ngModel]="70" [disabled]="true" [showValue]="false" />
                  </div>
                  <div>
                    <span class="text-xs text-muted-foreground font-medium mb-2 block">Disabled with custom range</span>
                    <app-slider [ngModel]="50" [min]="20" [max]="80" [disabled]="true" />
                  </div>
                </div>
              </div>
            } @else {
              <app-code-snippet [code]="disabledCode" language="html" />
            }
          </app-tabs>
        </app-card>
      </div>

      <div class="mt-8">
        <h3 class="text-lg font-semibold text-foreground mb-4">Real-World Examples</h3>
        <p class="text-muted-foreground mb-4">Common use cases for sliders in application interfaces</p>
        
        <app-card class="mb-4">
          <div class="p-6">
            <h4 class="text-base font-semibold text-foreground mb-4">Display Settings</h4>
            <div class="flex flex-col gap-5">
              <div class="flex items-center justify-between py-3 border-b border-border">
                <div class="flex items-center gap-3">
                  <lucide-angular [img]="Sun" [size]="20" class="text-yellow-500" />
                  <div class="flex flex-col gap-0.5">
                    <span class="text-sm font-medium text-foreground">Brightness</span>
                    <span class="text-xs text-muted-foreground">Adjust screen brightness</span>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-sm text-muted-foreground w-12 text-right">{{ brightness() }}%</span>
                  <app-slider [(ngModel)]="brightness" [min]="0" [max]="100" [showValue]="false" class="w-48" />
                </div>
              </div>
              
              <div class="flex items-center justify-between py-3">
                <div class="flex items-center gap-3">
                  <lucide-angular [img]="Volume1" [size]="20" class="text-blue-500" />
                  <div class="flex flex-col gap-0.5">
                    <span class="text-sm font-medium text-foreground">System Volume</span>
                    <span class="text-xs text-muted-foreground">Control system audio level</span>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-sm text-muted-foreground w-12 text-right">{{ systemVolume() }}%</span>
                  <app-slider [(ngModel)]="systemVolume" [min]="0" [max]="100" [showValue]="false" class="w-48" />
                </div>
              </div>
            </div>
          </div>
        </app-card>

        <app-card>
          <div class="p-6">
            <h4 class="text-base font-semibold text-foreground mb-4">Price Filter</h4>
            <div class="flex flex-col gap-4">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-sm font-medium text-foreground">Maximum Price</span>
                  <span class="text-sm font-semibold text-primary">\${{ maxPrice() }}</span>
                </div>
                <app-slider [(ngModel)]="maxPrice" [min]="0" [max]="10000" [step]="100" />
                <div class="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>$0</span>
                  <span>$10,000</span>
                </div>
              </div>
              
              <div class="bg-muted p-3 rounded-md">
                <div class="text-xs text-muted-foreground mb-1">Selected range:</div>
                <div class="text-sm font-medium text-foreground">$0 - \${{ maxPrice() }}</div>
              </div>
            </div>
          </div>
        </app-card>
      </div>

      <div class="mt-8">
        <h3 class="text-lg font-semibold text-foreground mb-4">Form Integration</h3>
        <p class="text-muted-foreground mb-4">Sliders work seamlessly with Angular's Reactive Forms and Template-driven forms</p>
        
        <app-card class="mb-4">
          <app-tabs [options]="previewCodeOptions" [modelValue]="reactiveFormTab()" (changed)="reactiveFormTab.set($event)">
            @if (reactiveFormTab() === 'preview') {
              <div class="p-6">
                <form [formGroup]="settingsForm" class="space-y-4">
                  <div>
                    <label class="text-sm font-medium text-foreground mb-2 block">Volume Control</label>
                    <app-slider formControlName="volume" [min]="0" [max]="100" [showValue]="true" />
                  </div>
                  <div class="text-sm text-muted-foreground bg-muted p-3 rounded">
                    <div class="font-medium mb-1">Form Value:</div>
                    <pre class="text-xs">{{ settingsForm.value | json }}</pre>
                  </div>
                  <div class="text-sm">
                    <span class="font-medium">Valid:</span> 
                    <span [class.text-green-600]="settingsForm.valid" [class.text-red-600]="settingsForm.invalid">
                      {{ settingsForm.valid ? 'Yes' : 'No' }}
                    </span>
                  </div>
                </form>
              </div>
            } @else {
              <app-code-snippet [code]="reactiveFormCode" language="typescript" />
            }
          </app-tabs>
        </app-card>

        <app-card>
          <app-tabs [options]="previewCodeOptions" [modelValue]="templateFormTab()" (changed)="templateFormTab.set($event)">
            @if (templateFormTab() === 'preview') {
              <div class="p-6">
                <form>
                  <app-slider 
                    [(ngModel)]="templateVolume" 
                    name="volume" 
                    [min]="0" 
                    [max]="100" 
                    [showValue]="true" />
                </form>
                <div class="text-sm text-muted-foreground mt-3 bg-muted p-3 rounded">
                  <div class="font-medium mb-1">Current Value:</div>
                  <div class="text-base">{{ templateVolume() }}</div>
                </div>
              </div>
            } @else {
              <app-code-snippet [code]="templateFormCode" language="html" />
            }
          </app-tabs>
        </app-card>
      </div>

      <div class="mt-8">
        <h3 class="text-lg font-semibold text-foreground mb-4">Sizes</h3>
        <p class="text-muted-foreground mb-4">Available in three sizes for different use cases</p>
        <app-card>
          <app-tabs [options]="previewCodeOptions" [modelValue]="sizesTab()" (changed)="sizesTab.set($event)">
            @if (sizesTab() === 'preview') {
              <div class="p-6">
                <div class="flex flex-col gap-6">
                  <div>
                    <span class="text-xs text-muted-foreground font-medium mb-2 block">Small (32px height)</span>
                    <app-slider [ngModel]="30" [size]="'sm'" [showValue]="false" />
                  </div>
                  <div>
                    <span class="text-xs text-muted-foreground font-medium mb-2 block">Medium (default, 40px height)</span>
                    <app-slider [ngModel]="50" [size]="'md'" [showValue]="false" />
                  </div>
                  <div>
                    <span class="text-xs text-muted-foreground font-medium mb-2 block">Large (48px height)</span>
                    <app-slider [ngModel]="70" [size]="'lg'" [showValue]="false" />
                  </div>
                </div>
              </div>
            } @else {
              <app-code-snippet [code]="sizesCode" language="html" />
            }
          </app-tabs>
        </app-card>
      </div>

      <div class="mt-8">
        <h3 class="text-lg font-semibold text-foreground mb-4">API Reference</h3>
        <ng-template #tableHeader>
          <th class="text-left p-3 bg-muted font-semibold text-muted-foreground text-xs uppercase tracking-wide">Prop</th>
          <th class="text-left p-3 bg-muted font-semibold text-muted-foreground text-xs uppercase tracking-wide">Type</th>
          <th class="text-left p-3 bg-muted font-semibold text-muted-foreground text-xs uppercase tracking-wide">Default</th>
          <th class="text-left p-3 bg-muted font-semibold text-muted-foreground text-xs uppercase tracking-wide">Description</th>
        </ng-template>
        <ng-template #tableCell let-prop>
          <td class="p-3 text-foreground"><code class="bg-muted px-1.5 py-0.5 rounded text-xs">{{ prop.name }}</code></td>
          <td class="p-3 text-foreground">{{ prop.type }}</td>
          <td class="p-3 text-foreground">{{ prop.default || '-' }}</td>
          <td class="p-3 text-foreground">{{ prop.description }}</td>
        </ng-template>
        <app-table [rows]="propsData()" [tableHeaderTemplate]="tableHeader" [tableCellTemplate]="tableCell" />
      </div>
    </section>
  `
})
export class SliderShowcaseComponent {
  previewCodeOptions = [
    { value: 'preview', label: 'Preview' },
    { value: 'code', label: 'Code' }
  ];

  basicTab = signal<string>('preview');
  configTab = signal<string>('preview');
  stepTab = signal<string>('preview');
  rangeTab = signal<string>('preview');
  disabledTab = signal<string>('preview');
  reactiveFormTab = signal<string>('preview');
  templateFormTab = signal<string>('preview');
  sizesTab = signal<string>('preview');

  Volume2 = Volume2;
  Volume1 = Volume1;
  VolumeX = VolumeX;
  Sun = Sun;
  Moon = Moon;
  Thermometer = Thermometer;
  Star = Star;
  DollarSign = DollarSign;

  volume = 75;
  step1 = signal(50);
  step5 = signal(50);
  step10 = signal(50);
  step25 = signal(50);
  price = signal(500);
  temperature = signal(22);
  rating = signal(4);
  brightness = signal(80);
  systemVolume = signal(60);
  maxPrice = signal(5000);
  templateVolume = signal(50);
  configValue = signal(50);
  configShowTicks = signal(false);
  configThumbLabel = signal(false);
  configTickInterval = 10;

  settingsForm = new FormGroup({
    volume: new FormControl(75, [Validators.min(0), Validators.max(100)])
  });

  installCode = `npm install @aether/ui/slider`;

  importCode = `import { SliderComponent } from '@aether/ui/slider';
import { FormsModule } from '@angular/forms';`;

  usageCode = `<app-slider
  [(ngModel)]="volume"
  [min]="0"
  [max]="100"
  [showValue]="true" />`;

  configCode = `<!-- With ticks -->
<app-slider
  [(ngModel)]="value"
  [showTicks]="true"
  [tickInterval]="10" />

<!-- With thumb label -->
<app-slider
  [(ngModel)]="value"
  [thumbLabel]="true" />

<!-- With both ticks and thumb label -->
<app-slider
  [(ngModel)]="value"
  [showTicks]="true"
  [thumbLabel]="true"
  [tickInterval]="10" />`;

  basicCode = `<div class="flex flex-col gap-6">
  <div>
    <label class="text-sm font-medium mb-2 block">Volume: {{ volume }}%</label>
    <div class="flex items-center gap-3">
      <lucide-angular [img]="VolumeX" [size]="18" />
      <app-slider
        [(ngModel)]="volume"
        [min]="0"
        [max]="100"
        [showValue]="false" />
      <lucide-angular [img]="Volume2" [size]="18" />
    </div>
  </div>
</div>`;

  stepCode = `<!-- Step of 1 (default) -->
<app-slider [(ngModel)]="value1" [min]="0" [max]="100" [step]="1" />

<!-- Step of 5 -->
<app-slider [(ngModel)]="value2" [min]="0" [max]="100" [step]="5" />

<!-- Step of 10 -->
<app-slider [(ngModel)]="value3" [min]="0" [max]="100" [step]="10" />

<!-- Step of 25 -->
<app-slider [(ngModel)]="value4" [min]="0" [max]="100" [step]="25" />`;

  rangeCode = `<div class="flex flex-col gap-6">
  <!-- Price Range -->
  <div>
    <label class="text-sm font-medium mb-2 block">Price: \${{ price() }}</label>
    <app-slider 
      [(ngModel)]="price" 
      [min]="0" 
      [max]="1000" 
      [step]="10" 
      [showValue]="false" />
  </div>

  <!-- Temperature -->
  <div>
    <label class="text-sm font-medium mb-2 block">Temperature: {{ temperature() }}°C</label>
    <app-slider 
      [(ngModel)]="temperature" 
      [min]="-10" 
      [max]="40" 
      [step]="1" 
      [showValue]="false" />
  </div>

  <!-- Rating -->
  <div>
    <label class="text-sm font-medium mb-2 block">Rating: {{ rating() }}/5</label>
    <app-slider 
      [(ngModel)]="rating" 
      [min]="1" 
      [max]="5" 
      [step]="1" 
      [showValue]="false" />
  </div>
</div>`;

  disabledCode = `<!-- Disabled with value display -->
<app-slider [ngModel]="30" [disabled]="true" />

<!-- Disabled without value display -->
<app-slider [ngModel]="70" [disabled]="true" [showValue]="false" />

<!-- Disabled with custom range -->
<app-slider [ngModel]="50" [min]="20" [max]="80" [disabled]="true" />`;

  reactiveFormCode = `import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

export class MyComponent {
  settingsForm = new FormGroup({
    volume: new FormControl(75, [Validators.min(0), Validators.max(100)])
  });
}

// In template:
<form [formGroup]="settingsForm">
  <app-slider formControlName="volume" [min]="0" [max]="100" />
</form>`;

  templateFormCode = `import { FormsModule } from '@angular/forms';

export class MyComponent {
  volume = 50;
}

// In template:
<form>
  <app-slider [(ngModel)]="volume" name="volume" [min]="0" [max]="100" />
</form>`;

  sizesCode = `<!-- Small -->
<app-slider [ngModel]="30" [size]="'sm'" [showValue]="false" />

<!-- Medium (default) -->
<app-slider [ngModel]="50" [size]="'md'" [showValue]="false" />

<!-- Large -->
<app-slider [ngModel]="70" [size]="'lg'" [showValue]="false" />`;

  propsData = (): SliderProp[] => [
    { name: 'min', type: 'number', default: '0', description: 'Minimum value of the range' },
    { name: 'max', type: 'number', default: '100', description: 'Maximum value of the range' },
    { name: 'step', type: 'number', default: '1', description: 'Step increment for each movement' },
    { name: 'showValue', type: 'boolean', default: 'true', description: 'Shows the current value below the slider' },
    { name: 'showTicks', type: 'boolean', default: 'false', description: 'Displays tick marks along the slider track' },
    { name: 'thumbLabel', type: 'boolean', default: 'false', description: 'Shows a tooltip above the thumb with the current value' },
    { name: 'tickInterval', type: 'number', default: '1', description: 'Interval between tick marks (requires showTicks)' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the slider and prevents interaction' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size variant of the slider' },
    { name: 'changed', type: 'EventEmitter<number>', default: '', description: 'Emits event when value changes' }
  ];
}
