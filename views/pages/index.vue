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
  methods: {
    test2() {
      // const a = [100, 1000000000000, 100, 200, 300, 400, 500, 600, 700, 800];
      const a = [
        { name: 'kim', age: 27 },
        { name: 'kim', age: 27 },
      ];
      console.log(a);
    },
    test() {
      console.log('test');
    },
  },
});
</script>
<style lang="scss" scoped>
@import './styles/index.scss';
</style>
