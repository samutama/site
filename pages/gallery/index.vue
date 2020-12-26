<template>
  <no-ssr>
    <div class="container">
      <contents-layout
        type="full"
        textJp="展示"
        textEn="Gallery"
        src="/gallery.jpg"
      >
        <div class="flex justify-between flex-wrap">
          <div class="w-1/3">
            <img src="/gallery/20190702201053.jpg" alt="">
          </div>
          <div class="w-1/3">
            <img src="/gallery/20190702201406.jpg" alt="">
          </div>
          <div class="w-1/3">
            <img src="/gallery/20190702201427.jpg" alt="">
          </div>
        </div>
      </contents-layout>
    </div>
  </no-ssr>
</template>

<script>
import ContentsLayout from "~/components/template/ContentsLayout.vue";

export default {
  components: {
    ContentsLayout,
  },
  data() {
    return {

    }
  }
}
</script>
