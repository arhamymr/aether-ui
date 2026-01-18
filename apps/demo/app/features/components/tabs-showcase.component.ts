import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from '@apsara/ui';
import { CardComponent } from '@apsara/ui';
import { CodeSnippetComponent } from '../../shared/components/code-snippet/code-snippet.component';
import { tabsShowcaseCode } from './tabs-showcase.code';

@Component({
  selector: 'app-tabs-showcase',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TabsComponent,
    CardComponent,
    CodeSnippetComponent
  ],
  template: `
    <section id="tabs" class="mb-16 scroll-m-20">
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-foreground mb-2">Tabs</h2>
        <p class="text-dimmed">Navigation tabs component for organizing content into sections</p>
      </div>

      <app-card>
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide">Account Settings</h3>
            <div class="flex gap-1 bg-tertiary rounded-lg p-1">
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="accountTab() === 'preview'"
                [class.text-foreground]="accountTab() === 'preview'"
                [class.text-dimmed]="accountTab() !== 'preview'"
                [class.shadow-sm]="accountTab() === 'preview'"
                (click)="setAccountTab('preview')">
                Preview
              </button>
              <button
                class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
                [class.bg-card]="accountTab() === 'code'"
                [class.text-foreground]="accountTab() === 'code'"
                [class.text-dimmed]="accountTab() !== 'code'"
                [class.shadow-sm]="accountTab() === 'code'"
                (click)="setAccountTab('code')">
                Code
              </button>
            </div>
          </div>

          @if (accountTab() === 'preview') {
            <div class="lg:w-6/12 w-full">
              <app-tabs [defaultValue]="'account'" [tabs]="accountTabs">
                <div class="flex flex-col gap-4">
                  @if (activeTab === 'account') {
                    <div class="flex flex-col gap-4">
                      <div class="flex flex-col gap-1.5">
                        <label class="text-sm font-medium text-foreground">Name</label>
                        <input
                          type="text"
                          class="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Enter your name"
                          [(ngModel)]="accountForm.name" />
                      </div>
                      <div class="flex flex-col gap-1.5">
                        <label class="text-sm font-medium text-foreground">Email</label>
                        <input
                          type="email"
                          class="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Enter your email"
                          [(ngModel)]="accountForm.email" />
                      </div>
                    </div>
                  }
                  @if (activeTab === 'password') {
                    <div class="flex flex-col gap-4">
                      <div class="flex flex-col gap-1.5">
                        <label class="text-sm font-medium text-foreground">Password</label>
                        <input
                          type="password"
                          class="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Enter your password"
                          [(ngModel)]="accountForm.password" />
                      </div>
                      <div class="flex flex-col gap-1.5">
                        <label class="text-sm font-medium text-foreground">Confirm Password</label>
                        <input
                          type="password"
                          class="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Confirm your password"
                          [(ngModel)]="accountForm.confirmPassword" />
                      </div>
                    </div>
                  }
                </div>
              </app-tabs>
            </div>
          } @else {
            <app-code-snippet [code]="tabsShowcaseCode.accountCode" language="html" />
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
            <div class="lg:w-6/12 w-full">
              <app-tabs [defaultValue]="'tab1'" [tabs]="statesTabs">
                <div class="flex flex-col gap-4">
                  @if (activeTab === 'tab1') {
                    <p class="text-sm text-dimmed">This is the active tab content.</p>
                  }
                  @if (activeTab === 'tab2') {
                    <p class="text-sm text-dimmed">This is another tab content.</p>
                  }
                  @if (activeTab === 'tab3') {
                    <p class="text-sm text-dimmed">This tab is disabled.</p>
                  }
                </div>
              </app-tabs>
            </div>
          } @else {
            <app-code-snippet [code]="tabsShowcaseCode.statesCode" language="html" />
          }
        </div>
      </app-card>

      <div class="mt-6">
        <h3 class="text-lg font-semibold text-foreground mb-4">Usage</h3>
        <app-code-snippet [code]="tabsShowcaseCode.importCode" language="typescript" />
        <app-code-snippet [code]="tabsShowcaseCode.usageCode" language="html" />
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
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">tabs</code></td>
              <td class="p-3 border-b border-border text-foreground">Array of TabItem</td>
              <td class="p-3 border-b border-border text-foreground">[]</td>
              <td class="p-3 border-b border-border text-foreground">Array of tab items with value, label, and disabled</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">defaultValue</code></td>
              <td class="p-3 border-b border-border text-foreground">string</td>
              <td class="p-3 border-b border-border text-foreground">''</td>
              <td class="p-3 border-b border-border text-foreground">Default active tab value</td>
            </tr>
            <tr>
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">animationDuration</code></td>
              <td class="p-3 border-b border-border text-foreground">'300ms' | '150ms'</td>
              <td class="p-3 border-b border-border text-foreground">'300ms'</td>
              <td class="p-3 border-b border-border text-foreground">Animation duration</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `
})
export class TabsShowcaseComponent {
  accountTab = signal<'preview' | 'code'>('preview');
  statesTab = signal<'preview' | 'code'>('preview');
  activeTab = 'account';

  accountTabs = [
    { value: 'account', label: 'Account' },
    { value: 'password', label: 'Password' }
  ];

  statesTabs = [
    { value: 'tab1', label: 'Active Tab' },
    { value: 'tab2', label: 'Another Tab' },
    { value: 'tab3', label: 'Disabled', disabled: true }
  ];

  accountForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  setAccountTab(tab: 'preview' | 'code') {
    this.accountTab.set(tab);
  }

  setStatesTab(tab: 'preview' | 'code') {
    this.statesTab.set(tab);
  }

  tabsShowcaseCode = tabsShowcaseCode;
}
