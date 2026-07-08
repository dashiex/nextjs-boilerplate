# Coding Standards

These standards are used throughout this project to keep the codebase
clean, readable, and consistent.

## Core Principles

-   Keep it simple.
-   Readability over cleverness.
-   Consistency over personal preference.
-   Refactor only when necessary.
-   Avoid premature abstraction.

## Rule of Three

Only abstract code after it has been repeated at least three times.

## React Components

### Function Declaration

Use function declarations.

``` tsx
export default function Button() {
  return <button>Save</button>;
}
```

### Props

Use `type` for component props.

``` tsx
type ButtonProps = {
  children: React.ReactNode;
};
```

### Naming

Use PascalCase.

``` text
Button.tsx
HeroSection.tsx
```

### Component Size

Refactor when a component becomes difficult to read (around 200+ lines).

## Imports

Use absolute imports.

``` tsx
import Button from "@/components/ui/Button";
```

## Styling

-   Tailwind CSS
-   No inline styles
-   Reuse UI components

## Libraries

Prefer native solutions before introducing new libraries.

## Git Commits

``` text
feat: add authentication
fix: resolve login issue
refactor: simplify header
style: format code
docs: update documentation
chore: update dependencies
```

## Project Philosophy

> Simple \> Clever

> Readable \> Short

> Maintainable \> Fancy

> Consistency \> Personal Preference
