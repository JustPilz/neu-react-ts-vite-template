# Neutralinojs + React + TS + Vite template

With HMR mode and `styled-components`

**If the native API calls don't work, look at the main.tsx file and try to uncomment some lines**. Maybe it would be useful in your case

## Instructions

### Install

1. `git clone https://github.com/JustPilz/neu-react-ts-vite-template.git`
2. `npm i -g @neutralinojs/neu` (skip if `neu` is already installed)
3. `cd react-src && npm install`
4. `cd ../ && npm run dev`

### Run

```
npm run dev
```

it's an alias to `neu run -- --window-enable-inspector`

### Build

```
npm run build
```

it's an alias to `neu build`

### Build + zip

```
neu build --release
```
