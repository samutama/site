<template>
  <div class="container">
    <top-mv />
    <top-about />
    <div class="mt-32 pb-12">
      <top-section
        type="left"
        textJp="部員"
        textEn="Members"
        src="/members.jpg"
        link="members"
      />
      <top-section
        type="right"
        textJp="セッティング"
        textEn="Setting"
        src="/setting.jpg"
        link="setting"
      />
      <top-section
        type="left"
        textJp="展示"
        textEn="Gallery"
        src="/gallery.jpg"
        link="gallery"
      />
      <top-section
        type="right"
        textJp="お問い合わせ"
        textEn="Contact"
        src="/contact.jpg"
        link="contact"
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
  /* min-height: 100vh; */
  text-align: center;
  font-family : YuMincho, 'Yu Mincho', serif;
  background-color: #000;
  color: #fff;
  padding: 0;
}
</style>
