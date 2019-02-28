# @dot-event/starter

[dot-event](https://github.com/dot-event/dot-event#readme) project starter

![starter](starter.gif)

## Install

```bash
npm install dot-event @dot-event/glob @dot-event/starter @dot-event/store
```

## Setup

```js
const dot = require("dot-event")()
require("@dot-event/glob")(dot)
require("@dot-event/starter")(dot)
require("@dot-event/store")(dot)
```
