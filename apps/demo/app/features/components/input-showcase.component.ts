import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '@apsara/ui';
import { CardComponent } from '@apsara/ui';
import { CodeSnippetComponent } from '../../shared/components/code-snippet/code-snippet.component';

@Component({
  selector: 'app-input-showcase',
  standalone: true,
  imports: [CommonModule, FormsModule, InputComponent, CardComponent, CodeSnippetComponent],
  template: `
    <section id="input" class="mb-16 scroll-m-20">
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-foreground mb-2">Input</h2>
        <p class="text-dimmed">Inputs allow users to enter text into a UI</p>
      </div>

      <app-card>
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide">Basic Input</h3>
            <div class="flex gap-1 bg-tertiary rounded-lg p-1">
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="basicTab() === 'preview'"
                [class.text-foreground]="basicTab() === 'preview'"
                [class.text-dimmed]="basicTab() !== 'preview'"
                [class.shadow-sm]="basicTab() === 'preview'"
                (click)="setBasicTab('preview')">
                Preview
              </button>
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="basicTab() === 'code'"
                [class.text-foreground]="basicTab() === 'code'"
                [class.text-dimmed]="basicTab() !== 'code'"
                [class.shadow-sm]="basicTab() === 'code'"
                (click)="setBasicTab('code')">
                Code
              </button>
            </div>
          </div>

          @if (basicTab() === 'preview') {
            <div class="grid grid-cols-1 max-w-[320px] gap-4">
              <app-input
                label="Username"
                placeholder="Enter your username"
                [(ngModel)]="inputValue" />
              <p class="text-sm text-dimmed mt-2 font-mono">Value: {{ inputValue }}</p>
            </div>
          } @else {
            <app-code-snippet [code]="basicCode" language="html" />
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
                <app-input label="Default" placeholder="Placeholder" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">With Hint</span>
                <app-input
                  label="Email"
                  placeholder="Enter email"
                  hint="We'll never share your email" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">With Error</span>
                <app-input
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  error="Password must be at least 8 characters"
                  [showPassword]="showPassword()" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Disabled</span>
                <app-input
                  label="Disabled"
                  placeholder="Cannot edit"
                  [disabled]="true" />
              </div>
            </div>
          } @else {
            <app-code-snippet [code]="statesCode" language="html" />
          }
        </div>
      </app-card>

      <app-card class="mt-6">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide">Input Types</h3>
            <div class="flex gap-1 bg-tertiary rounded-lg p-1">
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="typesTab() === 'preview'"
                [class.text-foreground]="typesTab() === 'preview'"
                [class.text-dimmed]="typesTab() !== 'preview'"
                [class.shadow-sm]="typesTab() === 'preview'"
                (click)="setTypesTab('preview')">
                Preview
              </button>
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="typesTab() === 'code'"
                [class.text-foreground]="typesTab() === 'code'"
                [class.text-dimmed]="typesTab() !== 'code'"
                [class.shadow-sm]="typesTab() === 'code'"
                (click)="setTypesTab('code')">
                Code
              </button>
            </div>
          </div>

          @if (typesTab() === 'preview') {
            <div class="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6">
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Text</span>
                <app-input type="text" label="Text" placeholder="Text input" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Email</span>
                <app-input type="email" label="Email" placeholder="email@example.com" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Password</span>
                <app-input
                  type="password"
                  label="Password"
                  placeholder="Enter password"
                  [showPassword]="showPassword()"
                  (suffixClick)="togglePassword()" />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Number</span>
                <app-input type="number" label="Quantity" placeholder="0" />
              </div>
            </div>
          } @else {
            <app-code-snippet [code]="typesCode" language="html" />
          }
        </div>
      </app-card>

      <app-card class="mt-6">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide">Required Field</h3>
            <div class="flex gap-1 bg-tertiary rounded-lg p-1">
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="requiredTab() === 'preview'"
                [class.text-foreground]="requiredTab() === 'preview'"
                [class.text-dimmed]="requiredTab() !== 'preview'"
                [class.shadow-sm]="requiredTab() === 'preview'"
                (click)="setRequiredTab('preview')">
                Preview
              </button>
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="requiredTab() === 'code'"
                [class.text-foreground]="requiredTab() === 'code'"
                [class.text-dimmed]="requiredTab() !== 'code'"
                [class.shadow-sm]="requiredTab() === 'code'"
                (click)="setRequiredTab('code')">
                Code
              </button>
            </div>
          </div>

          @if (requiredTab() === 'preview') {
            <div class="grid grid-cols-1 max-w-[320px] gap-4">
              <app-input
                label="Full Name"
                placeholder="Enter your full name"
                [required]="true" />
              <span class="text-xs text-dimmed">This field is required</span>
            </div>
          } @else {
            <app-code-snippet [code]="requiredCode" language="html" />
          }
        </div>
      </app-card>

      <div class="mt-6">
        <h3 class="text-lg font-semibold text-foreground mb-4">Usage</h3>
        <app-code-snippet [code]="inputImportCode" language="typescript" />
        <app-code-snippet [code]="inputUsageCode" language="html" />
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
              <td class="p-3 border-b border-border text-foreground">Floating label text</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">type</code></td>
              <td class="p-3 border-b border-border text-foreground">'text' | 'email' | 'password' | 'number' | 'tel' | 'url'</td>
              <td class="p-3 border-b border-border text-foreground">'text'</td>
              <td class="p-3 border-b border-border text-foreground">Input type</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">placeholder</code></td>
              <td class="p-3 border-b border-border text-foreground">string</td>
              <td class="p-3 border-b border-border text-foreground">''</td>
              <td class="p-3 border-b border-border text-foreground">Placeholder text</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">value</code></td>
              <td class="p-3 border-b border-border text-foreground">string</td>
              <td class="p-3 border-b border-border text-foreground">''</td>
              <td class="p-3 border-b border-border text-foreground">Input value</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">disabled</code></td>
              <td class="p-3 border-b border-border text-foreground">boolean</td>
              <td class="p-3 border-b border-border text-foreground">false</td>
              <td class="p-3 border-b border-border text-foreground">Disables the input</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">error</code></td>
              <td class="p-3 border-b border-border text-foreground">string</td>
              <td class="p-3 border-b border-border text-foreground">''</td>
              <td class="p-3 border-b border-border text-foreground">Error message text</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">hint</code></td>
              <td class="p-3 border-b border-border text-foreground">string</td>
              <td class="p-3 border-b border-border text-foreground">''</td>
              <td class="p-3 border-b border-border text-foreground">Hint text below input</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">required</code></td>
              <td class="p-3 border-b border-border text-foreground">boolean</td>
              <td class="p-3 border-b border-border text-foreground">false</td>
              <td class="p-3 border-b border-border text-foreground">Shows required indicator</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">prefixIcon</code></td>
              <td class="p-3 border-b border-border text-foreground">string</td>
              <td class="p-3 border-b border-border text-foreground">''</td>
              <td class="p-3 border-b border-border text-foreground">Icon before input (emoji/text)</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">suffixIcon</code></td>
              <td class="p-3 border-b border-border text-foreground">string</td>
              <td class="p-3 border-b border-border text-foreground">''</td>
              <td class="p-3 border-b border-border text-foreground">Icon after input (emoji/text)</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">showPassword</code></td>
              <td class="p-3 border-b border-border text-foreground">boolean</td>
              <td class="p-3 border-b border-border text-foreground">false</td>
              <td class="p-3 border-b border-border text-foreground">Show password toggle button</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `
})
export class InputShowcaseComponent {
  basicTab = signal<'preview' | 'code'>('preview');
  statesTab = signal<'preview' | 'code'>('preview');
  typesTab = signal<'preview' | 'code'>('preview');
  requiredTab = signal<'preview' | 'code'>('preview');

  inputValue = '';
  showPassword = signal(false);

  setBasicTab(tab: 'preview' | 'code') {
    this.basicTab.set(tab);
  }

  setStatesTab(tab: 'preview' | 'code') {
    this.statesTab.set(tab);
  }

  setTypesTab(tab: 'preview' | 'code') {
    this.typesTab.set(tab);
  }

  setRequiredTab(tab: 'preview' | 'code') {
    this.requiredTab.set(tab);
  }

  togglePassword(): void {
    this.showPassword.update(v => !v);
  }

  inputImportCode = `import { InputComponent } from '@apsara/ui/input';`;

  inputUsageCode = `<app-input
  label="Email"
  type="email"
  placeholder="Enter your email"
  hint="We'll never share your email"
  [(ngModel)]="email" />`;

  basicCode = `<app-input
  label="Username"
  placeholder="Enter your username"
  [(ngModel)]="inputValue" />`;

  statesCode = `<app-input label="Default" placeholder="Placeholder" />

<app-input
  label="Email"
  placeholder="Enter email"
  hint="We'll never share your email" />

<app-input
  label="Password"
  type="password"
  placeholder="Enter password"
  error="Password must be at least 8 characters" />

<app-input
  label="Disabled"
  placeholder="Cannot edit"
  [disabled]="true" />`;

  typesCode = `<app-input type="text" label="Text" placeholder="Text input" />
<app-input type="email" label="Email" placeholder="email@example.com" />
<app-input type="password" label="Password" placeholder="Enter password" />
<app-input type="number" label="Quantity" placeholder="0" />`;

  requiredCode = `<app-input
  label="Full Name"
  placeholder="Enter your full name"
  [required]="true" />`;
}
