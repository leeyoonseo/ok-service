<template>
  <div>
    <h1>Components</h1>
    <div class="box">
      <h2>Button</h2>
      <the-button>버튼</the-button>
    </div>

    <div class="box">
      <h2>Image Card</h2>
      <Image-card src="images/img-cat.jpg" title="Image Card Title" text="Image Card Text" />
      <Image-card
        type="button"
        src="images/img-cat.jpg"
        title="Image Card Title"
        @click="() => handleLog('button card')"
      />
    </div>

    <div class="box">
      <h2>Select</h2>
      <the-select :options="selectOptions" placeholder="placeholder" :value.sync="selectValue" />
      <the-select status="disabled" :options="selectOptions" :value.sync="selectValue" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface ISelectOptions {
  value: string;
  text: string | number;
}

export default Vue.extend({
  name: 'DevPage',
  layout: 'base',
  data() {
    return {
      selectValue: '',
      selectOptions: [
        {
          value: 'ALL',
          text: '전체',
        },
        {
          value: 'A',
          text: '에이',
        },
        {
          value: 'B',
          text: '비',
        },
        {
          value: 'C',
          text: '씨',
        },
        {
          value: 'D',
          text: '디',
        },
      ] as ISelectOptions[],
    };
  },
  methods: {
    handleLog(log: string) {
      console.log(`log: ${log}`);
    },
  },
});
</script>
<style lang="scss" scoped>
@import './styles/dev.scss';
</style>
