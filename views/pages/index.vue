<template>
  <div>
    <div>
      <h1 class="box">버튼</h1>
      <the-button />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MainPage',
  layout: 'base',
});
</script>
<style lang="scss" scoped>
@import './styles/index.scss';
</style>
