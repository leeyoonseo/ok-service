<template>
  <div
    :class="`image-card ${type === 'button' ? 'button' : ''}`"
    @click="type === 'button' && $emit('click')"
  >
    <div class="card-image">
      <img class="image" :src="src" />
    </div>
    <div class="card-info">
      <strong class="title">{{ title }}</strong>
      <span v-if="text" class="text">{{ text }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ImageCard',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (val) => ['default', 'button'].includes(val),
    },
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
  },
});
</script>
<style scoped lang="scss">
@import './ImageCard.scss';
</style>
