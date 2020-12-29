<template>
  <client-only>
    <div class="container">
      <contents-layout
        type="full"
        textJp="お問い合わせ"
        textEn="Contact"
        src="/contact.jpg"
      >
        <div class="flex justify-between flex-wrap">
          <p class="">thanks</p>
        </div>
      </contents-layout>
    </div>
  </client-only>
</template>

<script>
import ContentsLayout from "~/components/template/ContentsLayout.vue";

export default {
  components: {
    ContentsLayout
  },
  data() {
    return {};
  }
};
</script>

<style>
.container {
  padding: 0;
}
.v-application--wrap {
  min-height: 0;
}
</style>