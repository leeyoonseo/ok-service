<template>
  <div>
    <div>
      <base-header :is-logined="isLogined" />
    </div>
    <div>
      <Nuxt />
    </div>

    <div>
      <!-- TODO: Footer -->
      <base-footer />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'BaseLayout',
  data() {
    return {
      isLogined: false,
    };
  },
});
</script>
<style lang="scss" scoped>
body {
  color: blue;
}
</style>
