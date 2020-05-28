<template>
  <div class="container">
    <top-mv />
    <top-about />
    <div class="mt-32">
      <top-section
        type="left"
        textJp="部員"
        textEn="Members"
        src="/members.jpg"
      />
      <top-section
        type="right"
        textJp="セッティング"
        textEn="Setting"
        src="/setting.jpg"
      />
      <top-section
        type="left"
        textJp="展示"
        textEn="Gallery"
        src="/gallery.jpg"
      />
      <top-section
        type="right"
        textJp="問い合わせ"
        textEn="Contact"
        src="/contact.jpg"
      />
    </div>
  </div>
</template>

<script>
import TopMv from "~/components/molecules/TopMv.vue";
import TopAbout from "~/components/molecules/TopAbout.vue";
import TopSection from "~/components/molecules/TopSection.vue";

export default {
  components: {
    TopMv,
    TopAbout,
    TopSection,
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
  color: #fff;
}
</style>
