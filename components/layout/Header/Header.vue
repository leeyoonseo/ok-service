<template>
  <header :class="`header header-${$route.name}`">
    <div class="header-inner">
      <nuxt-link class="header-logo" to="/">
        <h1 class="logo">OKAYOON</h1>
      </nuxt-link>

      <ul class="header-nav">
        <li v-for="{ name, path } in navs" :key="name" class="nav-items">
          <nuxt-link :to="path">
            {{ name }}
          </nuxt-link>
        </li>
      </ul>

      <div class="header-my">
        <template v-if="!isLogined">
          <button class="login-button" @click="handleLogin">Sign in</button>
        </template>
        <template v-else>
          <div class="my-setting">
            <span class="my-setting-icon">
              <span class="hidden">Settings</span>
            </span>
            <div class="setting">
              <ul class="setting-navs">
                <li><nuxt-link to="/">My info</nuxt-link></li>
                <li><nuxt-link to="/">Sign out</nuxt-link></li>
              </ul>
            </div>
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
      isMenuOpened: false,
      navs: [
        {
          name: '홈',
          path: '/',
        },
        {
          name: '네비1',
          path: '/',
        },
        {
          name: '네비2',
          path: '/',
        },
        {
          name: '네비3',
          path: '/',
        },
        {
          name: '네비4',
          path: '/',
        },
      ],
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
