<template>
  <button>
    버튼
    <span class="icon"></span>
  </button>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TheButton',
  methods: {
    handleClick() {
      this.test(123);
    },
    test(val: number) {
      console.log('test', val);
    },
  },
});
</script>
<style lang="scss" scoped>
@import './Button';
</style>
