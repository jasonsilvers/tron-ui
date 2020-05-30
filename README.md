# tron-ui

> UI Component library

[![NPM](https://img.shields.io/npm/v/tron-ui.svg)](https://www.npmjs.com/package/tron-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i @jason.silvers/tron-ui
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'tron-ui'
import 'tron-ui/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

MIT © [jasonsilvers](https://github.com/jasonsilvers)

## Development

If invalid hook warning 

https://reactjs.org/warnings/invalid-hook-call-warning.html

cd to root - tron-ui
npm link example/node_modules/react

This will make the library use the application's react copy
