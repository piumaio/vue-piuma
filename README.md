# Vue-piuma
[![codecov](https://codecov.io/gh/lotrekagency/vue-piuma/branch/master/graph/badge.svg)](https://codecov.io/gh/lotrekagency/vue-piuma) [![Build Status](https://travis-ci.org/lotrekagency/vue-piuma.svg?branch=feature%2Ftravis-codecov)](https://travis-ci.org/lotrekagency/vue-piuma)


Vue component for Piuma Image optimizer

## Install

```bash
yarn add vue-piuma
```

CDN: [UNPKG](https://unpkg.com/vue-piuma/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-piuma/) (available as `window.VuePiuma`)

## Usage

```vue
<template>
  <vue-piuma src="YOUR URL" height="YOUR HEIGHT" width="YOUR WIDTH" quality="YOUR QUALITY" ></vue-piuma>
</template>

<script>
import VuePiuma from 'vue-piuma'

export default {
  components: {
    VuePiuma
  }
}
</script>
```

## Test

```bash
yarn test
```

## More on Piuma

[Piuma Image Optimizer](https://github.com/lotrekagency/piuma)

## License

MIT &copy; [lotrekagency](https://github.com/lotrekagency)

[![forthebadge](http://forthebadge.com/images/badges/made-with-vue.svg)](http://forthebadge.com)
