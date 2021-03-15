# Contributing

Welcome to the **Denohavior** repository 🖖

First of all, the team want to thank you for spending some time to help us improving the project 🙏! In this documentation, you will find all the useful information to help you contribute to the project.

## Table of contents

[Introduction](#introduction)

[TypeScript](#typescript)
- [Naming conventions](#naming-conventions)
- [Code conventions](#typescript-code-conventions)

## <a id="introduction"></a>🏁 Introduction

The following guidelines ensure your contributions respect the project philosophy, design, conventions and rules.

> ℹ️ If you have any question, don't hesitate to ask it on [Discord](https://discord.gg/pqkZHKWMbU)!

## <a id="typescript"></a>🏷️ TypeScript

### <a id="naming-conventions"></a> Naming convention

- All TypeScript files need to be named with the **camelCase** convention (eg: **parseNode.ts**).
- A class name must use the **PascalCase** naming convention
```typescript
// don't
class featurenode {}

// do
class FeatureNode {}
```

- Variables, methods, functions, parameters, properties must use the **camelCase** naming convention 🐪
```typescript
// don't
const FeatureTags = ['skip', 'parser'];

// do
const featureTags = ['skip', 'parser'];
```

- If you define a constant with a **symbol**, use the **UPPER_SNAKE_CASE_CONVENTION** 🐍
```typescript
// don't
const scenarioKey = Symbol('parse');

// do
const SCENARIO_KEY = Symbol('parse');
```

- Don't use **I** as a prefix for interface name. We are not doing any C# here 😄
```typescript
// don't
interface IFeatureNode {
  // ...
}

// do
interface FeatureNode {
  // ...
}
```

- Suffix the name of errors with Error
```typescript
// don't
class InvalidFeature extends Error {
  // ...
}

// do
class InvalidFeatureError extends Error {
  // ...
}
```

- Don't suffix type alias with Type
```typescript
// don't
type FeatureNodeType = {
  // ...
}

// do
type FeatureNode = {
  // ...
}
```