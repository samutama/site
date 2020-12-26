<template>
  <div>
    <div class="overflow-hidden">
      <img
        :src="src"
        class="img-zoom"
      >
    </div>
    <contents-title
      :type="type"
      :textJp="textJp"
      :textEn="textEn"
      class="mt-5 mx-5 md:mx-0"
    />
  </div>
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