<template>
  <section class="flex flex-col mb-20 last:mb-0">
    <contents-title
      :type="type"
      :textJp="textJp"
      :textEn="textEn"
    />
    <div class="-mt-5 overflow-hidden">
      <img
        class="img-zoom"
        :src="src"
      >
    </div>
  </section>
</template>

<script>
import ContentsTitle from "~/components/atoms/ContentsTitle.vue";

export default {
  components: {
    ContentsTitle,
  },
  props: {
    type: {
      type: String,
      required: true,
      default: null,
    },
    textJp: {
      type: String,
      required: true,
      default: null,
    },
    textEn: {
      type: String,
      required: true,
      default: null,
    },
    src: {
      type: String,
      required: true,
      default: null,
    },
  }
}
</script>

<style>
/* copyright入ってるから暫定でzoom */
.img-zoom {
  transform: scale(1.2);
}
</style>