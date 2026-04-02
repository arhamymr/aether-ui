# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-19

### Added
- **New Commands:**
  - `remove` command - Remove components from your project with interactive selection
  - `update` command - Update components to their latest versions with backup/restore on failure
  
- **Command Options:**
  - `--force` flag for `add` command to overwrite existing components
  - `--dry-run` flag for `add`, `remove`, and `update` commands to preview changes
  - `--all` flag for `update` command to update all installed components at once
  
- **Utilities:**
  - Path resolution utilities (`src/utils/paths.ts`) for reliable npm distribution
  - Config utility (`src/utils/config.ts`) to read package.json dynamically
  - Debug logging support (set `DEBUG=1` environment variable)

- **Documentation:**
  - Comprehensive README with usage examples for all commands
  - CHANGELOG to track version history
  
- **Package Metadata:**
  - Repository, bugs, and homepage fields in package.json
  - Node.js version requirement (>= 18.0.0)
  - Additional keywords for better discoverability

### Changed
- **Logger Enhancement:**
  - Replaced raw ANSI escape codes with `chalk` library for better cross-platform support
  - Added debug logger function
  
- **Path Resolution:**
  - Fixed hardcoded path resolutions that wouldn't work when published to npm
  - Now uses centralized path utilities for consistent behavior
  
- **Version Management:**
  - Version is now read dynamically from package.json instead of being hardcoded
  - Eliminates version sync issues between package.json and CLI code
  
- **Index File Management:**
  - Fixed `add` command to append to index.ts instead of overwriting
  - Prevents duplicate exports when adding components multiple times
  - Only updates index.ts if there are actual changes
  
- **Error Handling:**
  - Improved error messages with specific, actionable feedback
  - Better error context for debugging
  - Graceful handling of edge cases

### Fixed
- Path resolution issues for npm distribution
- Index file overwrite bug in `add` command
- Missing template existence check in `init` command
- Inconsistent error reporting across commands

### Security
- Added Node.js version requirement (>= 18.0.0) for security and compatibility

## [0.1.0] - Initial Release

### Added
- `init` command to initialize new Angular projects
- `add` command to add UI components
- `list` command to show available components
- Basic UI components: button, input, card
- Tailwind CSS integration
- TypeScript support
