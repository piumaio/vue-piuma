<template>
  <div>
    <img :src="piumize">
  </div>
</template>

<script>
export default {
  name: 'vuepiuma',
  data () {
    return {
      piumaServer: 'https://vue-piuma.herokuapp.com/'
    }
  },
  props: {
    quality: {
      default: 100,
      type: Number
    },
    src: {
      required: true
    },
    height: {
      default: 0,
      type: Number
    },
    width: {
      default: 0,
      type: Number
    }
  },
  computed: {
    piumize: function () {
      return this.piumaServer + '' + this.width + '_' + this.height + '_' + this.quality + '/' + this.src
    }
  }
}
</script>

