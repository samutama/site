<template>
  <div>
    <page-title
      :type="type"
      :textJp="textJp"
      :textEn="textEn"
      :src="src"
    />
    <div class="py-4 px-5 md:px-0">
      <slot />
    </div>
  </div>
</template>

<script>
import PageTitle from "~/components/molecules/PageTitle.vue";

export default {
  components: {
    PageTitle,
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