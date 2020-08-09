<template>
  <header class="header">
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
}

.header__logo {
  width: auto;
  height: 60px;
  padding: 4vw;
}
</style>
