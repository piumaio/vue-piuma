<template>
  <img :src="url" :title="title" :alt="alt" :class="customclass" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Piuma extends Vue {
  @Prop({ required: true }) readonly src!: string;
  @Prop({ required: false, default: '' }) readonly customclass!: string;
  @Prop({ required: false, default: '' }) readonly title!: string;
  @Prop({ required: false, default: '' }) readonly alt!: string;
  @Prop({ required: false, default: 100 }) readonly quality!: number;
  @Prop({ required: false, default: 0 }) readonly height!: number;
  @Prop({ required: false, default: 0 }) readonly width!: number;
  public static serverUrl: string = "https://piumaio";

  public static composeUrl(src: string, width: number = 0, height: number = 0, quality: number = 100): string {
    return (
      Piuma.serverUrl +
      width +
      "_" +
      height +
      "_" +
      quality +
      "/" +
      src
    );
  }

  get url(): string {
    return Piuma.composeUrl(this.src, this.width, this.height, this.quality);
  }
}
</script>
