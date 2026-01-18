import { Component } from '@angular/core';
import { ButtonComponent, CardComponent } from '@apsara/ui';
import { CodeSnippetComponent } from '../../../../shared/components/code-snippet/code-snippet.component';

@Component({
  selector: 'app-code-example-section',
  standalone: true,
  imports: [ButtonComponent, CardComponent, CodeSnippetComponent],
  template: `
    <section class="code-section">
      <h2 class="section-title">Quick Start Example</h2>
      <p class="section-subtitle">Using the custom Button component</p>

      <div class="code-example">
        <app-card class="code-preview">
          <div class="preview-row">
            <app-button label="Primary" variant="primary" />
            <app-button label="Secondary" variant="secondary" />
            <app-button label="Tertiary" variant="tertiary" />
          </div>
          <div class="preview-row">
            <app-button label="Danger" variant="danger" />
            <app-button label="Outline" variant="outline" />
            <app-button label="Plain" variant="plain" />
          </div>
        </app-card>

        <div class="code-snippet-wrapper">
          <app-code-snippet
            [code]="codeExample"
            language="html" />
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      background: var(--secondary);
      border-radius: 24px;
      padding: 64px 24px;
      max-width: 1000px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 28px;
      font-weight: 600;
      color: var(--foreground);
      margin: 0 0 8px;
      text-align: center;
    }

    .section-subtitle {
      font-size: 16px;
      color: var(--dimmed);
      margin: 0 0 40px;
      text-align: center;
    }

    .code-example {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      align-items: start;
    }

    .code-preview {
      padding: 32px;
    }

    .preview-row {
      display: flex;
      gap: 12px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }

    .preview-row:last-child {
      margin-bottom: 0;
    }

    .code-snippet-wrapper {
      border-radius: var(--radius);
      overflow: hidden;
    }

    @media (max-width: 768px) {
      .code-example {
        grid-template-columns: 1fr;
      }

      .code-preview {
        order: 2;
      }

      .code-snippet-wrapper {
        order: 1;
      }
    }
  `]
})
export class CodeExampleSectionComponent {
  codeExample = `<app-button label="Primary" variant="primary">
</app-button>

<app-button label="Outline" variant="outline">
</app-button>`;
}
