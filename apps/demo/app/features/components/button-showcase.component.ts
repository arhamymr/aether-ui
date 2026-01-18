import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, CardComponent } from '@apsara/ui';
import { CodeSnippetComponent } from '../../shared/components/code-snippet/code-snippet.component';

@Component({
  selector: 'app-button-showcase',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardComponent, CodeSnippetComponent],
  template: `
    <section id="button" class="mb-16 scroll-m-20">
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-foreground mb-2">Button</h2>
        <p class="text-dimmed">Interactive button component with multiple variants, sizes, and states</p>
      </div>

      <app-card>
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide">Variants</h3>
            <div class="flex gap-1 bg-tertiary rounded-lg p-1">
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="variantsTab() === 'preview'"
                [class.text-foreground]="variantsTab() === 'preview'"
                [class.text-dimmed]="variantsTab() !== 'preview'"
                [class.shadow-sm]="variantsTab() === 'preview'"
                (click)="setVariantsTab('preview')">
                Preview
              </button>
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="variantsTab() === 'code'"
                [class.text-foreground]="variantsTab() === 'code'"
                [class.text-dimmed]="variantsTab() !== 'code'"
                [class.shadow-sm]="variantsTab() === 'code'"
                (click)="setVariantsTab('code')">
                Code
              </button>
            </div>
          </div>

          @if (variantsTab() === 'preview') {
            <div class="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6">
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Primary</span>
                <app-button label="Primary" variant="primary" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Secondary</span>
                <app-button label="Secondary" variant="secondary" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Tertiary</span>
                <app-button label="Tertiary" variant="tertiary" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Danger</span>
                <app-button label="Danger" variant="danger" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Outline</span>
                <app-button label="Outline" variant="outline" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Plain</span>
                <app-button label="Plain" variant="plain" />
              </div>
            </div>
          } @else {
            <app-code-snippet [code]="variantsCode" language="html" />
          }
        </div>
      </app-card>

      <app-card class="mt-6">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide">Sizes</h3>
            <div class="flex gap-1 bg-tertiary rounded-lg p-1">
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="sizesTab() === 'preview'"
                [class.text-foreground]="sizesTab() === 'preview'"
                [class.text-dimmed]="sizesTab() !== 'preview'"
                [class.shadow-sm]="sizesTab() === 'preview'"
                (click)="setSizesTab('preview')">
                Preview
              </button>
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="sizesTab() === 'code'"
                [class.text-foreground]="sizesTab() === 'code'"
                [class.text-dimmed]="sizesTab() !== 'code'"
                [class.shadow-sm]="sizesTab() === 'code'"
                (click)="setSizesTab('code')">
                Code
              </button>
            </div>
          </div>

          @if (sizesTab() === 'preview') {
            <div class="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6">
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">XS</span>
                <app-button label="XS" size="xs" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">SM</span>
                <app-button label="SM" size="sm" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">MD</span>
                <app-button label="MD" size="md" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">LG</span>
                <app-button label="LG" size="lg" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Icon</span>
                <app-button size="icon">
                  <span slot="">+</span>
                </app-button>
              </div>
            </div>
          } @else {
            <app-code-snippet [code]="sizesCode" language="html" />
          }
        </div>
      </app-card>

      <app-card class="mt-6">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide">States</h3>
            <div class="flex gap-1 bg-tertiary rounded-lg p-1">
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="statesTab() === 'preview'"
                [class.text-foreground]="statesTab() === 'preview'"
                [class.text-dimmed]="statesTab() !== 'preview'"
                [class.shadow-sm]="statesTab() === 'preview'"
                (click)="setStatesTab('preview')">
                Preview
              </button>
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="statesTab() === 'code'"
                [class.text-foreground]="statesTab() === 'code'"
                [class.text-dimmed]="statesTab() !== 'code'"
                [class.shadow-sm]="statesTab() === 'code'"
                (click)="setStatesTab('code')">
                Code
              </button>
            </div>
          </div>

          @if (statesTab() === 'preview') {
            <div class="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6">
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Default</span>
                <app-button label="Default" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Disabled</span>
                <app-button label="Disabled" [disabled]="true" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Loading</span>
                <app-button label="Loading" [loading]="true" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Block</span>
                <app-button label="Block" [block]="true" />
              </div>
            </div>
          } @else {
            <app-code-snippet [code]="statesCode" language="html" />
          }
        </div>
      </app-card>

      <div class="mt-6">
        <h3 class="text-lg font-semibold text-foreground mb-4">Usage</h3>
        <app-code-snippet [code]="buttonImportCode" language="typescript" />
        <app-code-snippet [code]="buttonUsageCode" language="html" />
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-semibold text-foreground mb-4">Props</h3>
        <table class="w-full border-collapse text-sm bg-card rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr>
              <th class="text-left p-3 border-b border-border bg-tertiary font-semibold text-dimmed text-xs uppercase tracking-wide">Prop</th>
              <th class="text-left p-3 border-b border-border bg-tertiary font-semibold text-dimmed text-xs uppercase tracking-wide">Type</th>
              <th class="text-left p-3 border-b border-border bg-tertiary font-semibold text-dimmed text-xs uppercase tracking-wide">Default</th>
              <th class="text-left p-3 border-b border-border bg-tertiary font-semibold text-dimmed text-xs uppercase tracking-wide">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">label</code></td>
              <td class="p-3 border-b border-border text-foreground">string</td>
              <td class="p-3 border-b border-border text-foreground">''</td>
              <td class="p-3 border-b border-border text-foreground">Button text content</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">variant</code></td>
              <td class="p-3 border-b border-border text-foreground">'primary' | 'secondary' | 'tertiary' | 'danger' | 'outline' | 'plain'</td>
              <td class="p-3 border-b border-border text-foreground">'primary'</td>
              <td class="p-3 border-b border-border text-foreground">Visual style variant</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">size</code></td>
              <td class="p-3 border-b border-border text-foreground">'xs' | 'sm' | 'md' | 'lg' | 'icon'</td>
              <td class="p-3 border-b border-border text-foreground">'md'</td>
              <td class="p-3 border-b border-border text-foreground">Button size</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">disabled</code></td>
              <td class="p-3 border-b border-border text-foreground">boolean</td>
              <td class="p-3 border-b border-border text-foreground">false</td>
              <td class="p-3 border-b border-border text-foreground">Disables the button</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">loading</code></td>
              <td class="p-3 border-b border-border text-foreground">boolean</td>
              <td class="p-3 border-b border-border text-foreground">false</td>
              <td class="p-3 border-b border-border text-foreground">Shows loading spinner</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">block</code></td>
              <td class="p-3 border-b border-border text-foreground">boolean</td>
              <td class="p-3 border-b border-border text-foreground">false</td>
              <td class="p-3 border-b border-border text-foreground">Makes button full width</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">pill</code></td>
              <td class="p-3 border-b border-border text-foreground">boolean</td>
              <td class="p-3 border-b border-border text-foreground">false</td>
              <td class="p-3 border-b border-border text-foreground">Makes button pill shaped</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">clicked</code></td>
              <td class="p-3 border-b border-border text-foreground">EventEmitter&lt;Event&gt;</td>
              <td class="p-3 border-b border-border text-foreground">-</td>
              <td class="p-3 border-b border-border text-foreground">Emitted on button click</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `
})
export class ButtonShowcaseComponent {
  variantsTab = signal<'preview' | 'code'>('preview');
  sizesTab = signal<'preview' | 'code'>('preview');
  statesTab = signal<'preview' | 'code'>('preview');

  setVariantsTab(tab: 'preview' | 'code') {
    this.variantsTab.set(tab);
  }

  setSizesTab(tab: 'preview' | 'code') {
    this.sizesTab.set(tab);
  }

  setStatesTab(tab: 'preview' | 'code') {
    this.statesTab.set(tab);
  }

  buttonImportCode = `import { ButtonComponent } from '@apsara/ui/button';`;

  buttonUsageCode = `<app-button
  label="Click me"
  variant="primary"
  size="md"
  (clicked)="onClick($event)" />`;

  variantsCode = `<app-button label="Primary" variant="primary" />
<app-button label="Secondary" variant="secondary" />
<app-button label="Tertiary" variant="tertiary" />
<app-button label="Danger" variant="danger" />
<app-button label="Outline" variant="outline" />
<app-button label="Plain" variant="plain" />`;

  sizesCode = `<app-button label="XS" size="xs" />
<app-button label="SM" size="sm" />
<app-button label="MD" size="md" />
<app-button label="LG" size="lg" />
<app-button size="icon">
  <span slot="">+</span>
</app-button>`;

  statesCode = `<app-button label="Default" />
<app-button label="Disabled" [disabled]="true" />
<app-button label="Loading" [loading]="true" />
<app-button label="Block" [block]="true" />`;
}
