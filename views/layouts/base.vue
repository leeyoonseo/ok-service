<template>
  <div>
    <div>
      <base-header />
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
});
</script>
