<template>
  <div class="base-layout">
    <div class="base-layout-inner">
      <div class="base-header">
        <base-header />
      </div>
      <div class="base-container">
        <Nuxt />
      </div>
      <div class="base-footer">
        <base-footer />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'BaseLayout',
});
</script>
<style lang="scss" scoped>
@import './styles/base.scss';
</style>
