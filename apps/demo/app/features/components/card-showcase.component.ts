import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@apsara/ui';
import { CardComponent } from '@apsara/ui';
import { CodeSnippetComponent } from '../../shared/components/code-snippet/code-snippet.component';

@Component({
  selector: 'app-card-showcase',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent, CodeSnippetComponent],
  template: `
    <section id="card" class="mb-16 scroll-m-20">
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-foreground mb-2">Card</h2>
        <p class="text-dimmed">Cards contain content and actions about a single subject</p>
      </div>

      <app-card>
        <div class="p-6">
          <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide mb-4">Basic Card</h3>
          <app-card>
            <div class="min-h-[60px] flex items-center justify-center text-dimmed text-sm">Card Content</div>
          </app-card>
        </div>
      </app-card>

      <app-card class="mt-6">
        <div class="p-6">
          <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide mb-4">Padding</h3>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6">
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">None</span>
              <app-card padding="none">
                <div class="min-h-[60px] flex items-center justify-center text-dimmed text-sm border border-dashed border-border rounded">No Padding</div>
              </app-card>
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Small</span>
              <app-card padding="small">
                <div class="min-h-[60px] flex items-center justify-center text-dimmed text-sm">Small Padding</div>
              </app-card>
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Medium</span>
              <app-card padding="medium">
                <div class="min-h-[60px] flex items-center justify-center text-dimmed text-sm">Medium Padding</div>
              </app-card>
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-dimmed font-medium">Large</span>
              <app-card padding="large">
                <div class="min-h-[60px] flex items-center justify-center text-dimmed text-sm">Large Padding</div>
              </app-card>
            </div>
          </div>
        </div>
      </app-card>

      <app-card class="mt-6">
        <div class="p-6">
          <h3 class="text-sm font-semibold text-dimmed uppercase tracking-wide mb-4">Rich Content</h3>
          <app-card>
            <div class="min-h-[100px]">
              <h4 class="text-base font-semibold text-foreground mb-2">Card Title</h4>
              <p class="text-sm text-dimmed mb-4 leading-relaxed">This is a sample card with multiple content elements including headers, text, and actions.</p>
              <div class="flex gap-2">
                <app-button label="Action 1" size="sm" />
                <app-button label="Action 2" size="sm" variant="plain" />
              </div>
            </div>
          </app-card>
        </div>
      </app-card>

      <div class="mt-6">
        <h3 class="text-lg font-semibold text-foreground mb-4">Usage</h3>
        <app-code-snippet [code]="cardImportCode" language="typescript" />
        <app-code-snippet [code]="cardUsageCode" language="html" />
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
              <td class="p-3 border-b border-border text-foreground"><code class="bg-tertiary px-1.5 py-0.5 rounded text-xs">padding</code></td>
              <td class="p-3 border-b border-border text-foreground">'none' | 'small' | 'medium' | 'large'</td>
              <td class="p-3 border-b border-border text-foreground">'medium'</td>
              <td class="p-3 border-b border-border text-foreground">Internal padding size</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `
})
export class CardShowcaseComponent {
  cardImportCode = `import { CardComponent } from '@apsara/ui/card';`;

  cardUsageCode = `<app-card padding="medium">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</app-card>`;
}
