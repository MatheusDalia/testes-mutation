# Mutation Testing Guide

This guide outlines the standard procedure for adding and running Stryker mutation tests on projects within this repository.

## Prerequisites

- Node.js installed.
- The project should have an existing test suite (e.g., Jest).
- The `generate-summary.js` script should be present in the root of the repository.

## Setup Instructions

### 1. Install Dependencies

Navigate to the project directory and install Stryker and the Jest runner as development dependencies:

```bash
npm install --save-dev @stryker-mutator/core @stryker-mutator/jest-runner
```

### 2. Configure Stryker

Create a `stryker.config.json` file in the project root with the following content. Adjust the `mutate` patterns to match the project's structure (e.g., `src/**/*.js` vs `packages/**/*.js`).

```json
{
  "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",
  "reporters": ["json"],
  "testRunner": "jest",
  "coverageAnalysis": "perTest",
  "mutate": [
    "src/**/*.js", 
    "!src/**/*.test.js",
    "!src/**/__tests__/**/*.js"
  ]
}
```

> **Note**: Ensure `testRunner` matches your project's test runner.

### 3. Add NPM Scripts (Optional)

Add a script to `package.json` for convenience:

```json
"scripts": {
  "mutation": "stryker run"
}
```

## Running Tests

Execute Stryker to generate the mutation report:

```bash
npx stryker run
```

This will generate a full report at `reports/mutation/mutation.json` (location may vary based on version, but `json` reporter usually defaults there or you can specify it).

## Generating Summary

To reduce the report size and focus on surviving mutants, run the shared summary script located in the repository root.

**From the project directory:**

```bash
node ../generate-summary.js ./reports/mutation/mutation.json ./reports/mutation/mutation-summary.json
```

### Arguments:
1. **Input Report**: Path to the full Stryker JSON report.
2. **Output Summary**: Path where the summary JSON should be saved.

> **Important**: The `generate-summary.js` script **deletes the original input file** to save space after generating the summary.

## Expected Output

- A `mutation-summary.json` file containing only files with surviving mutants or no coverage.
- The original large `mutation.json` will be removed.
