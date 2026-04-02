import { Component } from '@angular/core';
import { CardComponent } from '@aether/ui';
import { CommonModule } from '@angular/common';

interface ResourceItem {
  title: string;
  link?: string;
  description?: string;
}

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CardComponent, CommonModule],
  template: `
    <section class="mb-16 scroll-m-20">
      <h1 class="text-[32px] font-bold text-[color:var(--foreground,#1a1b1f)] mb-2 pb-4 border-b border-[var(--border,#e0e0e0)]">Resources</h1>
      <p class="text-lg text-[color:var(--foreground-variant,#666)] my-4 leading-relaxed">Additional learning materials and references.</p>

      <h2 class="text-2xl font-semibold text-[color:var(--foreground,#1a1b1f)] mt-10 mb-4">Official Links</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        @for (item of officialLinks; track item.title) {
          <app-card>
            <div class="flex flex-col gap-2">
              <strong class="text-foreground font-medium">{{ item.title }}</strong>
              @if (item.link) {
                <a [href]="item.link" target="_blank" rel="noopener noreferrer" class="text-primary no-underline text-sm hover:underline">
                  {{ getDomain(item.link) }}
                </a>
              }
              @if (item.description) {
                <span class="text-muted-foreground text-sm">{{ item.description }}</span>
              }
            </div>
          </app-card>
        }
      </div>

      <h2 class="text-2xl font-semibold text-[color:var(--foreground,#1a1b1f)] mt-10 mb-4">Learning Resources</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        @for (item of learningResources; track item.title) {
          <app-card>
            <div class="flex flex-col gap-2">
              <strong class="text-foreground font-medium">{{ item.title }}</strong>
              @if (item.link) {
                <a [href]="item.link" target="_blank" rel="noopener noreferrer" class="text-primary no-underline text-sm hover:underline">
                  Learn more
                </a>
              }
              @if (item.description) {
                <span class="text-muted-foreground text-sm">{{ item.description }}</span>
              }
            </div>
          </app-card>
        }
      </div>

      <h2 class="text-2xl font-semibold text-[color:var(--foreground,#1a1b1f)] mt-10 mb-4">Community</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        @for (item of communityResources; track item.title) {
          <app-card>
            <div class="flex flex-col gap-2">
              <strong class="text-foreground font-medium">{{ item.title }}</strong>
              @if (item.description) {
                <span class="text-muted-foreground text-sm">{{ item.description }}</span>
              }
            </div>
          </app-card>
        }
      </div>
    </section>
  `
})
export class ResourcesComponent {
  officialLinks: ResourceItem[] = [
    {
      title: 'Angular Documentation',
      link: 'https://angular.dev',
      description: 'Official Angular documentation'
    },
    {
      title: 'Apsara GitHub',
      link: 'https://github.com/apsaradigital',
      description: 'Source code and issues'
    },
    {
      title: 'Angular GitHub',
      link: 'https://github.com/angular/angular',
      description: 'Angular framework repository'
    }
  ];

  learningResources: ResourceItem[] = [
    {
      title: 'Angular YouTube Channel',
      description: 'Official tutorials and updates'
    },
    {
      title: 'Angular Blog',
      description: 'Latest announcements and guides'
    },
    {
      title: 'Angular Signals',
      link: 'https://angular.dev/guide/signals',
      description: 'Learn about reactive state'
    }
  ];

  communityResources: ResourceItem[] = [
    {
      title: 'Discord',
      description: 'Join our community chat'
    },
    {
      title: 'Stack Overflow',
      description: 'Ask and answer questions'
    }
  ];

  getDomain(url: string): string {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  }
}
