<template>
  <header>
    <div>
      <nuxt-link to="/">
        <h1>OKAYOON</h1>
      </nuxt-link>

      <ul>
        <li>네비1</li>
        <li>네비2</li>
        <li>네비3</li>
        <li>네비4</li>
      </ul>

      <div>
        <!-- TODO: 로그인 -->
        <div>
          <!-- <button>로그인</button> -->
        </div>
        <div>
          <div>사용자</div>
          <ul>
            <li>내정보</li>
            <li>로그아웃</li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseHeader',
  props: {
    isLogined: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
@import './Header';
</style>
