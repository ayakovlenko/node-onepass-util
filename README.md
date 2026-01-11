# node-onepass-util

[![NPM Version](https://img.shields.io/npm/v/node-onepass-util)](https://www.npmjs.com/package/node-onepass-util)

A simple Node.js wrapper for the 1Password CLI (`op`) to retrieve secrets.

## Prerequisites

- [1Password CLI](https://developer.1password.com/docs/cli/get-started/)
  installed and authenticated.

## Installation

```bash
npm install node-onepass-util
```

## Usage

```typescript
import { getTokenSync } from "node-onepass-util";

try {
  const token = getTokenSync("my-secret-item-name-or-id");
  console.log(token);
} catch (error) {
  console.error("failed to retrieve token:", error);
}
```
