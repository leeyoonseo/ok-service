<template>
  <div>
    <h1>Components</h1>
    <div class="box">
      <h2>Button</h2>
      {{ `가나다라` }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DevPage',
  layout: 'base',
  methods: {
    test() {
      console.log('Test');
    },
  },
});
</script>
<style lang="scss" scoped>
@import './styles/dev.scss';
</style>
