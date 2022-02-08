<template>
  <div>
    <div>
      <h1>버튼</h1>
      <base-button @click.native="handleClick" />
    </div>
  </div>
</template>

<script lang="ts">
// import Vue, { PropOptions } from 'vue'
import Vue from 'vue';
import BaseButton from '~/components/common/Button/Button.vue';

export default Vue.extend({
  name: 'MainPage',
  components: {
    BaseButton,
  },
  methods: {
    handleClick() {
      this.test(123);
      const a = [1, 4, 5];
      console.log(a);
    },
    test(val: number) {
      console.log('test', val);
    },
  },
});
</script>
