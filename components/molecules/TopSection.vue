<template>
  <section class="flex flex-col mb-20 last:mb-0">
    <contents-title
      :type="type"
      :textJp="textJp"
      :textEn="textEn"
    />
    <nuxt-link :to="link">
      <div class="-mt-5 overflow-hidden">
        <img
          class="img-zoom"
          :src="src"
        >
      </div>
      <Icon
        name="more"
        class="mt-3 mx-2"
        :class="type === 'left' ? 'ml-auto' : 'mr-auto'"
      />
    </nuxt-link>
  </section>
</template>

<script>
import ContentsTitle from "~/components/atoms/ContentsTitle.vue";
import Icon from "~/components/atoms/Icon.vue";

export default {
  components: {
    ContentsTitle,
    Icon,
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
    link: {
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