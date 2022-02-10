<template>
  <div>
    <div>
      <h1>버튼</h1>
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
/* TODO:
* postcss와 stylelin, CssSyntaxError 해결이 안돼서
* 무조건 지금은 .scss파일만 검사! import 나중에 해결할 것!!
*/
@import './styles/index.scss';
</style>
