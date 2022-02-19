<template>
  <header :class="classes">
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

interface INavs {
  name: string;
  path: string;
}

export default Vue.extend({
  name: 'BaseHeader',
  data() {
    return {
      isLogined: false as boolean,
      isSticky: false as boolean,
      // TODO: mobile
      // isMenuOpened: false,
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
      ] as INavs[],
    };
  },
  computed: {
    classes(): string[] {
      return [
        'header',
        `header-${this.$route.name}`,
        `${this.isSticky ? 'sticky' : ''}`,
      ];
    },
  },
  // TODO: throttle!! (lodash -> typescript?)
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleLogin() {
      console.log('handleLogin');
      this.isLogined = !this.isLogined;
    },
    handleScroll() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      this.isSticky = scrollY > 0;
    },
  },
});
</script>
<style lang="scss" scoped>
@import './Header';
</style>
