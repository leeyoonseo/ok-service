<template>
  <div>
    <h1>Components</h1>
    <div class="box">
      <h2>Button</h2>
      {{ `가나다라` }}
    </div>

    <div class="box">
      <h2>Image Card</h2>
      <Image-card
        src="images/img-cat.jpg"
        title="Image Card Title"
        text="Image Card Text"
      />
      <Image-card
        type="button"
        src="images/img-cat.jpg"
        title="Image Card Title"
        @click="() => handleLog('button card')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DevPage',
  layout: 'base',
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
