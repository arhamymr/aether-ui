# Contributing to apsara-ui

Thank you for your interest in contributing to apsara-ui! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful and inclusive. We're all here to build something great together.

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn
- Git

### Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/apsara-angular-devkit.git
   cd apsara-angular-devkit/libs/cli
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Build the project**
   ```bash
   npm run build
   ```

5. **Link for local testing**
   ```bash
   npm link
   ```

Now you can run `apsara-ui` commands locally during development.

## Development Workflow

### Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes**
   - Edit files in the `src/` directory
   - Follow the existing code style
   - Keep changes focused and atomic

3. **Build and test**
   ```bash
   npm run build
   
   # Test the CLI locally
   apsara-ui --version
   apsara-ui list
   ```

4. **Test in a real project**
   ```bash
   # In a separate directory
   mkdir test-project
   cd test-project
   apsara-ui init
   cd your-project-name
   npm install
   apsara-ui add button
   ```

### Code Style

- Use TypeScript strict mode
- Follow existing naming conventions
- Add JSDoc comments for public functions
- Use async/await instead of callbacks
- Handle errors gracefully with specific messages

### Example Code Style

```typescript
/**
 * Gets the path to a template/boilerplate directory
 */
export function getTemplatePath(importMetaUrl: string, templateName: string): string {
  const packageRoot = getPackageRoot(importMetaUrl);
  return join(packageRoot, 'boilerplate', templateName);
}
```

## Project Structure

```
libs/cli/
├── src/
│   ├── commands/          # CLI commands
│   │   ├── init.ts        # Initialize project
│   │   ├── add.ts         # Add components
│   │   ├── list.ts        # List components
│   │   ├── remove.ts      # Remove components
│   │   └── update.ts      # Update components
│   ├── utils/             # Utility functions
│   │   ├── logger.ts      # Colored logging
│   │   ├── paths.ts       # Path resolution
│   │   ├── config.ts      # Config management
│   │   └── components.ts  # Component utilities
│   └── main.ts            # CLI entry point
├── dist/                  # Compiled output
├── boilerplate/           # Project templates
├── ui/                    # Component library
└── package.json
```

## Adding a New Command

1. Create a new file in `src/commands/your-command.ts`
2. Follow this template:

```typescript
import { Command } from 'commander';
import { logger } from '../utils/logger.js';

export function yourCommand(): Command {
  const command = new Command('your-command');

  command
    .description('Description of your command')
    .option('-f, --flag', 'Optional flag')
    .action(async (options) => {
      try {
        // Your command logic here
        logger.success('Command completed!');
      } catch (error) {
        if (error instanceof Error) {
          logger.error(`Failed: ${error.message}`);
          logger.debug(error.stack || '');
        } else {
          logger.error('Failed due to an unknown error.');
        }
        process.exit(1);
      }
    });

  return command;
}
```

3. Register it in `src/main.ts`:

```typescript
import { yourCommand } from './commands/your-command.js';
// ...
program.addCommand(yourCommand().name('your-command'));
```

## Adding a New Component

1. Create component directory in `ui/src/components/your-component/`
2. Add the component files:
   - `your-component.component.ts`
   - `your-component.component.html`
   - `your-component.component.css`
   - `index.ts` (for exports)

3. Update `src/commands/list.ts` with component description:

```typescript
const componentDescriptions: Record<string, string> = {
  // ...
  'your-component': 'Description of your component',
};
```

## Commit Messages

Use conventional commit format:

- `feat: add new component search command`
- `fix: resolve path resolution issue on Windows`
- `docs: update README with new examples`
- `refactor: simplify error handling logic`
- `test: add tests for remove command`
- `chore: update dependencies`

## Pull Request Process

1. **Update documentation**
   - Update README.md if you added features
   - Update CHANGELOG.md under "Unreleased" section
   - Add JSDoc comments to new functions

2. **Ensure builds succeed**
   ```bash
   npm run build
   ```

3. **Test thoroughly**
   - Test your changes in a real Angular project
   - Test edge cases and error conditions
   - Test on different operating systems if possible

4. **Submit pull request**
   - Provide a clear description of changes
   - Reference any related issues
   - Include screenshots/GIFs for UI changes

5. **Respond to feedback**
   - Be open to suggestions
   - Make requested changes promptly
   - Ask questions if anything is unclear

## Release Process

(For maintainers)

1. Update version in `package.json`
2. Update `CHANGELOG.md` with release date
3. Build: `npm run build`
4. Commit: `git commit -am "Release v1.x.x"`
5. Tag: `git tag v1.x.x`
6. Push: `git push && git push --tags`
7. Publish: `npm publish`

## Questions?

- Open an issue for bugs or feature requests
- Start a discussion for questions
- Reach out to maintainers directly

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to apsara-ui! 🚀
