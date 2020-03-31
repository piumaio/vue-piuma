# Vue-piuma
[![codecov](https://codecov.io/gh/piumaio/vue-piuma/branch/master/graph/badge.svg)](https://codecov.io/gh/piumaio/vue-piuma) [![Build Status](https://travis-ci.org/piumaio/vue-piuma.svg?branch=feature%2Ftravis-codecov)](https://travis-ci.org/piumaio/vue-piuma)

Vue component for Piuma Image Optimizer ✌🏻🌉

## Install

```bash
yarn add https://github.com/piumaio/vue-piuma.git
```

## Usage

```js
import Piuma from 'vue-piuma'

Piuma.serverUrl = 'https://arysol.it/piuma/'

export default {
  components: {
    PrismEditor,
    Piuma
  },
  // ....
}
```

```html
<template>
  <piuma src="YOUR URL" height="YOUR_HEIGHT" width="YOUR_WIDTH" quality="YOUR_QUALITY" />
</template>
```

## Test

```bash
yarn test:unit
```

## More on Piuma

[Piuma Image Optimizer](https://github.com/piumaio/)

## License

MIT &copy; [piumaio](https://github.com/lotrekagency)

[![forthebadge](http://forthebadge.com/images/badges/made-with-vue.svg)](http://forthebadge.com)
