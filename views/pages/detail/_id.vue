<template>
  <div>detailId</div>
</template>
<script lang="ts">
import Vue from 'vue';

interface IData {
  id: string | null;
}

export default Vue.extend({
  name: 'DetailId',
  layout: 'base',
  asyncData({ params }) {
    const data: IData = {
      id: null,
    };

    data.id = params.id;

    // TODO: Fetch
    return data;
  },
});
</script>
