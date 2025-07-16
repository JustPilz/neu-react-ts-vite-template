# Neutralinojs + React + TS + Vite template

With HMR mode and `styled-components`

**If the native API calls don't work, look at the main.tsx file and try to uncomment some lines**. Maybe it would be useful in your case

## Instructions

### Install

1. `git clone https://github.com/JustPilz/neu-react-ts-vite-template.git`
2. `npm i -g @neutralinojs/neu` (skip if `neu` is already installed)
3. `neu update` (to create bin folder and download binaries)
4. `cd react-src && npm install && cd ../`
5. `npm run dev`

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

## Update

1. Update the config file:

- option `cli.binaryVersion` with X.X.X
- option `cli.clientVersion` with X.X.X

Enter `neu update` to fetch this version.

2. Update client library into `react-src`:
   `npm install @neutralinojs/lib@latest`
