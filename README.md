# Typescript Template for syncing files to Bitburner (with vitest support)

Since I wasn't satisfied with the [official bitburner typescript template](https://github.com/bitburner-official/typescript-template), I customized my own setup with support for vitest. 

## About

This template provides an easy setup to code bitburner scripts in Typescript and have them automatically synced to the game.

Additionally, it has vitest set up such that you can easily write your own tests for scripts.

## Prerequisites

* [Node.js](https://nodejs.org/en/download/) & a node package manager

## Quick start

Clone the template and use the package manager of your choice to install:
```
git clone https://github.com/tomdardev/bitburner-typescript-vitest-template
cd bitburner-typescript-vitest-template
npm i
```

Afterward, you might want to run the following command to update the typescript definition of the bitburner API to the latest.
```
npm run defs
```

### Coding in this template

Write all your typescript source code in the `/src` directory.

For syncing changes to bitburner, this repo uses [bitburner-ts](https://github.com/ftzi/bitburner-ts).

To use, run `npx bitburner-ts`, this will monitor the `/src` directory for any code changes and automatically compile code to javascript and sync it to the game. .

## Advanced
### Imports

To ensure both the game and typescript have no issues with import paths, your import statements should follow a few formatting rules:

- Paths must be absolute from the root, this will be converted into the equivalent to the root directory of your home drive in the game. i.e. `src/example.ts` will end up directly in the root directory. Imports will be automatically converted to match. 
- Paths must contain no leading slash
- Paths must end with no file extension

Generally speaking this is already defined in the shipped `tsconfig.json` and most IDEs should adopt these imports automatically based on that.

#### Examples:

To import `helperFunction` from the file `helpers.ts` located in the directory `src/lib/`:

```js
import { helperFunction } from "src/lib/helpers";
```

To import all functions from the file `helpers.ts` located in the `src/lib/` directory as the namespace `helpers`:

```js
import * as helpers from "src/lib/helpers";
```

To import `someFunction` from the file `main.ts` located in the `src/` directory:

```js
import { someFunction } from "main";
```

### Testing
This repo is preconfigured such that you can write & run vitest tests denominated with the file ending `.test.ts`.
An example of this can be found in [example.test.ts](/src/example.test.ts).

You may run tests via `npm run test` which will monitor the directory and test your code on change.  

For more information on how to write vitests, refer to https://vitest.dev/guide/.