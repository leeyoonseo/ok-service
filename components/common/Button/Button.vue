<template>
  <button>버튼</button>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseButton',
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
