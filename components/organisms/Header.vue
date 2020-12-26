<template>
  <header v-if="this.$route.name === 'index'" class="header" :class="{'is-active': scrollY > 600}">
    <nuxt-link to="/" class="inline-block">
      <Icon name="logo" class="header__logo" />
    </nuxt-link>
  </header>
  <header v-else class="header is-active">
    <nuxt-link to="/" class="inline-block">
      <Icon name="logo" class="header__logo" />
    </nuxt-link>
  </header>
</template>

<script>
import Icon from "~/components/atoms/Icon.vue";

export default {
  components: {
    Icon
  },
  data() {
    return {
      scrollY: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    }
  }
};
</script>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  background: linear-gradient(to bottom, #000000 0%, transparent 100%);
  transition: all 1s;
  opacity: 0;
}
.header__logo {
  width: auto;
  height: 60px;
  padding: 0.8rem;
}
.header.is-active {
  opacity: 1;
}
@media screen and (min-width: 768px) {
  .header__logo {
    height: 120px;
    padding: 2rem;
  }
}
</style>
