import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent, AlertTitleComponent, AlertDescriptionComponent, AlertActionComponent, ButtonComponent, CardComponent } from '@apsara/ui';
import { CodeSnippetComponent } from '../../shared/components/code-snippet/code-snippet.component';

@Component({
  selector: 'app-alert-showcase',
  standalone: true,
  imports: [CommonModule, AlertComponent, AlertTitleComponent, AlertDescriptionComponent, AlertActionComponent, ButtonComponent, CardComponent, CodeSnippetComponent],
  template: `
    <section id="alert" class="mb-16 scroll-m-20">
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-foreground mb-2">Alert</h2>
        <p class="text-dimmed">Displays a callout for user attention</p>
      </div>

      <app-card>
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide">Variants</h3>
            <div class="flex gap-1 bg-tertiary rounded-lg p-1">
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="activeTab() === 'preview'"
                [class.text-foreground]="activeTab() === 'preview'"
                [class.text-dimmed]="activeTab() !== 'preview'"
                [class.shadow-sm]="activeTab() === 'preview'"
                (click)="setActiveTab('preview')">
                Preview
              </button>
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="activeTab() === 'code'"
                [class.text-foreground]="activeTab() === 'code'"
                [class.text-dimmed]="activeTab() !== 'code'"
                [class.shadow-sm]="activeTab() === 'code'"
                (click)="setActiveTab('code')">
                Code
              </button>
            </div>
          </div>

          @if (activeTab() === 'preview') {
            <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Default</span>
                <app-alert>
                  <app-alert-title>Alert Title</app-alert-title>
                  <app-alert-description>Alert description goes here.</app-alert-description>
                  <app-alert-action>
                    <app-button label="Action" variant="primary" size="sm" />
                  </app-alert-action>
                </app-alert>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Info</span>
                <app-alert variant="info">
                  <app-alert-title>Payment failed</app-alert-title>
                  <app-alert-description>Check your card details and try again.</app-alert-description>
                  <app-alert-action>
                    <app-button label="Retry" variant="primary" size="sm" />
                  </app-alert-action>
                </app-alert>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Success</span>
                <app-alert variant="success">
                  <app-alert-title>Success</app-alert-title>
                  <app-alert-description>Your changes have been saved successfully.</app-alert-description>
                  <app-alert-action>
                    <app-button label="View" variant="primary" size="sm" />
                  </app-alert-action>
                </app-alert>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Warning</span>
                <app-alert variant="warning">
                  <app-alert-title>Warning</app-alert-title>
                  <app-alert-description>Some features may not work as expected.</app-alert-description>
                  <app-alert-action>
                    <app-button label="Dismiss" variant="outline" size="sm" />
                  </app-alert-action>
                </app-alert>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Danger</span>
                <app-alert variant="danger">
                  <app-alert-title>Error</app-alert-title>
                  <app-alert-description>Message deleted successfully. This action cannot be undone.</app-alert-description>
                  <app-alert-action>
                    <app-button label="Undo" variant="danger" size="sm" />
                  </app-alert-action>
                </app-alert>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs text-dimmed font-medium">Tertiary</span>
                <app-alert variant="tertiary">
                  <app-alert-title>Note</app-alert-title>
                  <app-alert-description>Some useful information here.</app-alert-description>
                  <app-alert-action>
                    <app-button label="Learn more" variant="plain" size="sm" />
                  </app-alert-action>
                </app-alert>
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
            <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide">Description</h3>
            <div class="flex gap-1 bg-tertiary rounded-lg p-1">
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="descriptionTab() === 'preview'"
                [class.text-foreground]="descriptionTab() === 'preview'"
                [class.text-dimmed]="descriptionTab() !== 'preview'"
                [class.shadow-sm]="descriptionTab() === 'preview'"
                (click)="setDescriptionTab('preview')">
                Preview
              </button>
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="descriptionTab() === 'code'"
                [class.text-foreground]="descriptionTab() === 'code'"
                [class.text-dimmed]="descriptionTab() !== 'code'"
                [class.shadow-sm]="descriptionTab() === 'code'"
                (click)="setDescriptionTab('code')">
                Code
              </button>
            </div>
          </div>

          @if (descriptionTab() === 'preview') {
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">With Description</span>
              <app-alert variant="info">
                <app-alert-title>Payment failed</app-alert-title>
                <app-alert-description>Check your card details and try again. Your payment could not be processed due to insufficient funds.</app-alert-description>
              </app-alert>
            </div>
          } @else {
            <app-code-snippet [code]="descriptionCode" language="html" />
          }
        </div>
      </app-card>

      <app-card class="mt-6">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide">Action</h3>
            <div class="flex gap-1 bg-tertiary rounded-lg p-1">
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="actionTab() === 'preview'"
                [class.text-foreground]="actionTab() === 'preview'"
                [class.text-dimmed]="actionTab() !== 'preview'"
                [class.shadow-sm]="actionTab() === 'preview'"
                (click)="setActionTab('preview')">
                Preview
              </button>
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="actionTab() === 'code'"
                [class.text-foreground]="actionTab() === 'code'"
                [class.text-dimmed]="actionTab() !== 'code'"
                [class.shadow-sm]="actionTab() === 'code'"
                (click)="setActionTab('code')">
                Code
              </button>
            </div>
          </div>

          @if (actionTab() === 'preview') {
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">With Action</span>
              <app-alert variant="success">
                <app-alert-title>Changes saved</app-alert-title>
                <app-alert-description>Your profile has been updated successfully.</app-alert-description>
                <app-alert-action>
                  <app-button label="Undo" variant="plain" size="sm" />
                </app-alert-action>
              </app-alert>
            </div>
          } @else {
            <app-code-snippet [code]="actionCode" language="html" />
          }
        </div>
      </app-card>

      <div class="mt-6">
        <h3 class="text-lg font-semibold text-foreground mb-4">Usage</h3>
        <app-code-snippet [code]="alertImportCode" language="typescript" />
        <app-code-snippet [code]="alertUsageCode" language="html" />
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-semibold text-foreground mb-4">Props</h3>
        <table class="w-full border-collapse text-sm bg-card rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr>
              <th class="text-left p-3 border-b border-border bg-tertiary font-semibold text-dimmed text-xs uppercase tracking-wide">Component</th>
              <th class="text-left p-3 border-b border-border bg-tertiary font-semibold text-dimmed text-xs uppercase tracking-wide">Prop</th>
              <th class="text-left p-3 border-b border-border bg-tertiary font-semibold text-dimmed text-xs uppercase tracking-wide">Type</th>
              <th class="text-left p-3 border-b border-border bg-tertiary font-semibold text-dimmed text-xs uppercase tracking-wide">Default</th>
              <th class="text-left p-3 border-b border-border bg-tertiary font-semibold text-dimmed text-xs uppercase tracking-wide">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-3 border-b border-border text-foreground" rowspan="2"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">Alert</code></td>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">variant</code></td>
              <td class="p-3 border-b border-border text-foreground">'default' | 'info' | 'success' | 'warning' | 'danger' | 'tertiary'</td>
              <td class="p-3 border-b border-border text-foreground">'default'</td>
              <td class="p-3 border-b border-border text-foreground">Visual style variant</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">class</code></td>
              <td class="p-3 border-b border-border text-foreground">string</td>
              <td class="p-3 border-b border-border text-foreground">-</td>
              <td class="p-3 border-b border-border text-foreground">Additional CSS classes</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">AlertTitle</code></td>
              <td class="p-3 border-b border-border text-foreground">-</td>
              <td class="p-3 border-b border-border text-foreground">-</td>
              <td class="p-3 border-b border-border text-foreground">-</td>
              <td class="p-3 border-b border-border text-foreground">Title content for the alert</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">AlertDescription</code></td>
              <td class="p-3 border-b border-border text-foreground">-</td>
              <td class="p-3 border-b border-border text-foreground">-</td>
              <td class="p-3 border-b border-border text-foreground">-</td>
              <td class="p-3 border-b border-border text-foreground">Description content for the alert</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">AlertAction</code></td>
              <td class="p-3 border-b border-border text-foreground">-</td>
              <td class="p-3 border-b border-border text-foreground">-</td>
              <td class="p-3 border-b border-border text-foreground">-</td>
              <td class="p-3 border-b border-border text-foreground">Action container for buttons</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `
})
export class AlertShowcaseComponent {
  activeTab = signal<'preview' | 'code'>('preview');
  descriptionTab = signal<'preview' | 'code'>('preview');
  actionTab = signal<'preview' | 'code'>('preview');

  setActiveTab(tab: 'preview' | 'code') {
    this.activeTab.set(tab);
  }

  setDescriptionTab(tab: 'preview' | 'code') {
    this.descriptionTab.set(tab);
  }

  setActionTab(tab: 'preview' | 'code') {
    this.actionTab.set(tab);
  }

  alertImportCode = `import { 
  AlertComponent, 
  AlertTitleComponent, 
  AlertDescriptionComponent, 
  AlertActionComponent 
} from '@apsara/ui/alert';`;

  alertUsageCode = `<app-alert variant="info">
  <app-alert-title>Alert Title</app-alert-title>
  <app-alert-description>
    Alert description goes here.
  </app-alert-description>
  <app-alert-action>
    <app-button label="Action" />
  </app-alert-action>
</app-alert>`;

  variantsCode = `<app-alert>
  <app-alert-title>Alert Title</app-alert-title>
  <app-alert-description>Alert description goes here.</app-alert-description>
  <app-alert-action>
    <app-button label="Action" variant="primary" size="sm" />
  </app-alert-action>
</app-alert>

<app-alert variant="info">
  <app-alert-title>Payment failed</app-alert-title>
  <app-alert-description>Check your card details and try again.</app-alert-description>
  <app-alert-action>
    <app-button label="Retry" variant="primary" size="sm" />
  </app-alert-action>
</app-alert>

<app-alert variant="success">
  <app-alert-title>Success</app-alert-title>
  <app-alert-description>Your changes have been saved successfully.</app-alert-description>
  <app-alert-action>
    <app-button label="View" variant="primary" size="sm" />
  </app-alert-action>
</app-alert>

<app-alert variant="warning">
  <app-alert-title>Warning</app-alert-title>
  <app-alert-description>Some features may not work as expected.</app-alert-description>
  <app-alert-action>
    <app-button label="Dismiss" variant="outline" size="sm" />
  </app-alert-action>
</app-alert>

<app-alert variant="danger">
  <app-alert-title>Error</app-alert-title>
  <app-alert-description>Message deleted successfully.</app-alert-description>
  <app-alert-action>
    <app-button label="Undo" variant="danger" size="sm" />
  </app-alert-action>
</app-alert>

<app-alert variant="tertiary">
  <app-alert-title>Note</app-alert-title>
  <app-alert-description>Some useful information here.</app-alert-description>
  <app-alert-action>
    <app-button label="Learn more" variant="plain" size="sm" />
  </app-alert-action>
</app-alert>`;

  descriptionCode = `<app-alert variant="info">
  <app-alert-title>Payment failed</app-alert-title>
  <app-alert-description>
    Check your card details and try again. 
    Your payment could not be processed due to insufficient funds.
  </app-alert-description>
</app-alert>`;

  actionCode = `<app-alert variant="success">
  <app-alert-title>Changes saved</app-alert-title>
  <app-alert-description>Your profile has been updated successfully.</app-alert-description>
  <app-alert-action>
    <app-button label="Undo" variant="plain" size="sm" />
  </app-alert-action>
</app-alert>`;
}
