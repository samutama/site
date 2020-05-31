<template>
  <nuxt-link
    :to="'members/' + name"
    class="block w-19/40 mb-5"
  >
    <div
      class="bg-khaki rounded-lg flex justify-center items-center"
      ref="memberLinkSquare"
    >
      <p class="font-raleway text-3xl font-black text-yellow">{{ num }}</p>
    </div>
    <p class="mt-1 text-yellow">{{ name }}</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    num: {
      type: String,
      required: true,
      default: null,
    },
    name: {
      type: String,
      required: true,
      default: null,
    },
  },
  methods: {
    handleResize() {
      this.setHeight();
    },
    setHeight() {      
      this.$refs.memberLinkSquare.style.height = this.$refs.memberLinkSquare.clientWidth + 'px'
    },
  },
  mounted() {
    this.setHeight();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
}
</script>