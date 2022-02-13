<template>
  <header class="header">
    <div class="header-inner">
      <nuxt-link class="header-logo" to="/">
        <h1 class="logo">OKAYOON</h1>
      </nuxt-link>

      <ul class="header-nav">
        <li v-for="(nav, index) in 4" :key="index" class="nav-items">
          <nuxt-link to="/">{{ `네비${index}` }}</nuxt-link>
        </li>
      </ul>

      <div class="header-my">
        <template v-if="!isLogined">
          <button class="login-button" @click="handleLogin">Sign in</button>
        </template>
        <template v-else>
          <!-- TODO: 아이콘? -->
          <div class="my-setting">
            <span class="hidden">Settings</span>
            <ul class="setting">
              <li>My info</li>
              <li>Sign out</li>
            </ul>
          </div>
        </template>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseHeader',
  data() {
    return {
      isLogined: false,
    };
  },
  methods: {
    handleLogin() {
      console.log('handleLogin');
      this.isLogined = !this.isLogined;
    },
  },
});
</script>
<style lang="scss" scoped>
@import './Header';
</style>
