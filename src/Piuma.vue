<template>
  <img :src="url" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Piuma extends Vue {
  @Prop({ required: true }) readonly src!: string;
  @Prop({ required: false, default: 100 }) readonly quality!: number;
  @Prop({ required: false, default: 100 }) readonly height!: number;
  @Prop({ required: false, default: 100 }) readonly width!: number;
  public static serverUrl: string = "https://piumaio";

  get url(): string {
    return (
      Piuma.serverUrl +
      "" +
      this.width +
      "_" +
      this.height +
      "_" +
      this.quality +
      "/" +
      this.src
    );
  }
}
</script>
