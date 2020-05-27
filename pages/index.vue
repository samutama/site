<template>
  <div class="container">
    <top-mv />
    <top-about />
  </div>
</template>

<script>
import TopMv from "~/components/molecules/TopMv.vue";
import TopAbout from "~/components/molecules/TopAbout.vue";

export default {
  components: {
    TopMv,
    TopAbout,
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
  font-family : YuMincho, 'Yu Mincho', serif;
  background-color: #000;
}
</style>
