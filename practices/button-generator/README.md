# Overview

- This document provides information about React Practice
- Build a Button Generator application using React
- [Documentation details](https://docs.google.com/document/d/1GTWoVyu5h6ESgMrfwD-cCnBwB8WXOxb-TYDn3MR4xOA/edit#)

## Table of Contents

- [Main app features](#main-app-features)
- [Targets](#targets)
- [Timeline](#timeline)
- [Tech Stacks](#tech-stacks)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone repository](#clone-repository)
  - [Installation commands](#installation-commands)

## Main app features

- User can view how the button look like at the home page
- User can generate a button by choosing properties for button style
- User can add generated button to the "Collection"
- User can see the list of created buttons in “Collection” page
- User can click on any button to see the HTML code of it
- User can remove the button from collection

## Targets

- Apply knowledge about React
- Using React Hooks
- Apply useReducer, useContext for state management
- Apply React-router
- Apply Storybook

## Timeline

- Estimate time: 7 days of working
- Actual time: 9 days of working

## Tech Stacks

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [React](https://reactjs.org/): A powerful JavaScript library for building user interfaces.
- [TailwindCSS](https://tailwindcss.com/): Tailwind CSS makes it quicker to write and maintain the code of your application
- [Storybook](https://storybook.js.org/): Storybook is a frontend workshop for building UI components and pages in isolation
- [Vite](https://vitejs.dev/): Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects

## Getting Started

### Prerequisites

- Node (v.16.0.0 or higher)
  - Install Node [here](https://nodejs.org/en/)

### Clone repository

- Step 1: Clone repository with SSH

```
git clone git@gitlab.asoft-python.com:ngoc.nguyenquang/react-training.git
```

- Step 2: Go to folder react-training

```
cd react-training
```

- Step 3: Checkout branch

```
git checkout practice-02
```

- Step 4: Go to folder button-generator

```
cd practices/button-generator
```

### Installation Commands

All commands are run from the root of the project, from a terminal:

| **Command**          | **Action**                                   |
| -------------------- | -------------------------------------------- |
| yarn                 | Installs dependencies                        |
| yarn dev             | Starts local dev server                      |
| yarn build           | Build your production site to `./dist/`      |
| yarn preview         | Preview your build locally, before deploying |
| yarn storybook       | Start Storybook dev at: `localhost: 6006`    |
| yarn build-storybook | Build Storybook                              |
| yarn lint            | Detect code format error                     |
| yarn lint:fix        | Detect and fix code format error             |
