import { Component } from '@angular/core';
import { CardComponent, TableComponent } from '@aether/ui';
import { CodeSnippetComponent } from '../../shared/components/code-snippet/code-snippet.component';

interface CliCommand {
  command: string;
  description: string;
}

@Component({
  selector: 'app-cli',
  standalone: true,
  imports: [CardComponent, TableComponent, CodeSnippetComponent],
  template: `
    <section class="mb-16 scroll-m-20">
      <h1
        class="text-[32px] font-bold text-[color:var(--foreground,#1a1b1f)] mb-2 pb-4 border-b border-[var(--border,#e0e0e0)]"
      >
        CLI Commands
      </h1>
      <p class="text-lg text-[color:var(--foreground-variant,#666)] my-4 leading-relaxed">
        Aether CLI provides commands to streamline your development workflow.
      </p>

      <h2 class="text-2xl font-semibold text-[color:var(--foreground,#1a1b1f)] mt-10 mb-4">
        Initialize Project
      </h2>
      <app-card>
        <app-code-snippet [code]="initCode" language="bash" />
      </app-card>

      <h2 class="text-2xl font-semibold text-[color:var(--foreground,#1a1b1f)] mt-10 mb-4">
        Add Component
      </h2>
      <app-card>
        <app-code-snippet [code]="addComponentCode" language="bash" />
      </app-card>

      <h2 class="text-2xl font-semibold text-[color:var(--foreground,#1a1b1f)] mt-10 mb-4">
        Available Commands
      </h2>
      <app-card padding="none">
        <ng-template #tableHeader>
          <th
            class="text-left p-3 bg-muted font-semibold text-muted-foreground text-xs uppercase tracking-wide"
          >
            Command
          </th>
          <th
            class="text-left p-3 bg-muted font-semibold text-muted-foreground text-xs uppercase tracking-wide"
          >
            Description
          </th>
        </ng-template>
        <ng-template #tableCell let-command>
          <td class="p-3 text-foreground">
            <code class="bg-muted px-1.5 py-0.5 rounded text-xs">{{ command.command }}</code>
          </td>
          <td class="p-3 text-foreground">{{ command.description }}</td>
        </ng-template>
        <app-table
          [rows]="commands()"
          [tableHeaderTemplate]="tableHeader"
          [tableCellTemplate]="tableCell"
        />
      </app-card>
    </section>
  `,
})
export class CliComponent {
  initCode = `npx @aether/cli init my-project`;

  addComponentCode = `npx @aether/cli add component my-component`;

  commands = (): CliCommand[] => [
    { command: 'init [name]', description: 'Initialize a new Aether project' },
    { command: 'add <type> [name]', description: 'Add a new component, service, or feature' },
    { command: 'list', description: 'List available templates' },
    { command: '--help', description: 'Show help information' },
  ];
}
