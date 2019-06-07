---
id: instructure-ui
---

## instructure-ui

[![build-status][build-status]][build-status-url]
[![MIT License][license-badge]][LICENSE]
[![Code of Conduct][coc-badge]][coc]

Instructure-UI has a number of beautiful and accessible React components with baked-in styles and theming and helpful utility functions.

## Quick Start

The following steps will create a starter app configured with Instructure-UI
presets that is immediately ready for development.

### Creating a Starter App
You can create the starter app using `npx` or by globally installing the `instui-cli`.

#### Using npx
```bash
$ npx @instructure/instui-cli create app --name MyInstuiApp
```

#### Globally installing `instui-cli` with `yarn` or `npm`
```bash
$ yarn global add @instructure/instui-cli
```
or
```bash
$ npm install -g @instructure/instui-cli
```
You can now create the app using the `instui` command
```bash
instui create app --name MyInstuiApp
```

### Start the Development Server

```bash
$ cd MyInstuiApp
```
then
```bash
$ yarn
$ yarn start
```
or
```bash
$ npm install
$ npm start
```
Your app is running on [http://0.0.0.0:3000](http://0.0.0.0:3000). You can now
edit `src` files and observe the changes. The app `README` contains more specific
information on available commands and theming.

## Integrating With an Existing Project
Before using Instructure-UI components, you must first import a theme. All
components are themeable, and themes control their look and feel. The component
examples seen throughout the documentation use the [canvas theme](#canvas) by
default which can be used by adding `@instructure/canvas-theme` to your project
dependencies:

#### yarn
```bash
$ yarn add @instructure/canvas-theme
```

#### npm
```bash
$ npm install @instructure/canvas-theme
```

Then, before mounting your application element import the canvas theme:

```javascript
import React, { Component } from 'react'

import '@instructure/canvas-theme'

import { Heading } from '@instructure/ui-elements'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading>Now using Instructure-UI components with default Canvas theme!</Heading>
      </div>
    )
  }
}

export default App
```

If you want to use the [canvas theme](#canvas) theme as your default with some
customization, you can use [ApplyTheme](#ApplyTheme) to override theme variables
for individual components.

For more advanced customization you can also create your own theme from scratch.
See [ui-themeable](#ui-themeable) for more complete documentation on this approach.

## Contributing

Before contributing please read our [code of conduct](#CODE_OF_CONDUCT) and read the [docs/contributing](#contributing) documentation.

## React Support

Instructure-UI currently supports React 15 and higher.

## Browser Support

- Internet Explorer 11 and Edge
- Chrome, Safari, Firefox (last two versions)

## License

[MIT](LICENSE)

[build-status]: https://travis-ci.org/instructure/instructure-ui.svg?branch=master
[build-status-url]: https://travis-ci.org/instructure/instructure-ui "Travis CI"

[license-badge]: https://img.shields.io/npm/l/instructure-ui.svg?style=flat-square
[license]: https://github.com/instructure/instructure-ui/blob/master/LICENSE

[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/instructure/instructure-ui/blob/master/CODE_OF_CONDUCT.md
