## Fundamentals of Node

### check versions

```bash
node -v
nvm current
npx -v
```

### use node in terminal

```
node
> Math.random() // runs JS which returns a random number
> Array. // double tapping the tab key shows all methods to this JS call
>   // double tapping with nothing entered gives all commands js/v8/web
```

```
node -h // usage, options, environment variables
```

### explore v8

```
node --v8-options | less
```

### node process object

the connection between the node environment and your OS

```
node
> process. // double tap tab key
> process.env // shows everything in your current running environment
```

change user

```
node -p "process.env.USER"
// username

USER="max" node -p "process.env.USER"
// max

node -p "process.env.USER = 'Test'"
// Test

echo $USER
// username b/c it doesn't change your original OS variable,
// only what it is for this environment
```

### Environment Variables

```
NODE_DEBUG=http node <node command> // debug http requests

```

### Module Wrapper

```
node -p "require('module').wrapper"
// [
//  '(function (exports, require, module, __filename, __dirname) { ',
//    '/n});'
// ]
```

### Exports

special object that is available globally  
alias of module.exports  
import and export are recent changes and are favored over require

### package.json

use npm to create a project and package.json

```
npm init -y // auto creates project
```

only the "name" and "version" fields are required

add a "start" script to start your app

```json
//...
"description": "### check versions",
"scripts": {
    "start": "node server.js"
}
//...
```

```bash
npm start
```

A script name like "prod-start" that isn't a known command use "run"

```bash
npm run prod-start
```

### import and export ES modules

add "type": "module" in the package.json to use ES modules

```json
//...
"version": "1.0.0",
"type": "module",
"description": "### check versions",
//...
```

importing from without directory location tells node to load from node_module or core node

```js
import http from "http"; // imports core http node package
```

install a 3rd-party package:  
go to [](npmjs.com) for package details

```bash
npm i lodash
```

```js
import lodash from "lodash";
```

install from github:

```bash
npm i expressjs/express
```

uninstall packages:

```bash
npm uninstall express/expressjs
```

### npm and npx

most packages will tell you to install globally:  
`npm i -g reactful && reactful new project`

instead we can use npx:
`npx reactful new project`

### dependency version flags

"" exact version
"^" minor patches
"~" or "0.1.x" will install latest patch
"\*" latest version

### dev dependency

if you only need a package for development use the -D flag:
`npm i -D nodemon`

nodemon will watch your files and restart the server when they change

### server

node will only continue to run if it has a reason to, otherwise it will return to terminal
