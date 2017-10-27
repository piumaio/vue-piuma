<template>
  <div id="app">
    <h3>IMPORTANT, THE TEST SERVER DOES NOT OPTIMIZE THE IMAGES, IT ONLY DISPLAYS THEM</h3>
    <vue-piuma src="http://www.itp.net/images/content/601238/xlarge/26987-topyoutu_xlarge.jpg"></vue-piuma>

    <p>Other examples</p>
    <vue-piuma height="10" width="90" src="http://www.itp.net/images/content/601238/xlarge/26987-topyoutu_xlarge.jpg"></vue-piuma>
    <vue-piuma height="10" width="90" quality="10" src="http://www.itp.net/images/content/601238/xlarge/26987-topyoutu_xlarge.jpg"></vue-piuma>
    <vue-piuma quality="30" src="http://www.itp.net/images/content/601238/xlarge/26987-topyoutu_xlarge.jpg"></vue-piuma>
  </div>
</template>

<script>
import VuePiuma from '../src'

export default {
  components: {
    VuePiuma
  }
}
</script>

<style>
  body{
    text-align: center;
  }
</style>
