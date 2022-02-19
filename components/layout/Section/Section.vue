<template>
  <section :class="`section ${type === 'full' ? 'full' : ''}`">
    <div class="section-inner">
      <slot></slot>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'BaseSection',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (val) => ['default', 'full'].includes(val),
    },
  },
});
</script>
<style lang="scss">
@import './Section.scss';
</style>
