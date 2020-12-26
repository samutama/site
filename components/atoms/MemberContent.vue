<template>
  <div
    class="bg-khaki rounded-lg pt-4 px-4 pb-6 md:px-8 md:py-6"
    v-touch:swipe.left="swipeLeft"
    v-touch:swipe.right="swipeRight"
  >
    <h2 class="font-libreBaskerville text-lg font-black text-yellow flex mb-4 md:mb-6">
      <!-- <span class="font-raleway text-2xl leading-none">
        #{{ num }}
      </span> -->
      <span class="w-full md:text-4xl">
        <span class="font-raleway text-2xl md:text-6xl leading-none -ml-2 mr-2 md:ml-0 md:mr-0">
          #{{ num }}
        </span>
        {{ psn_id }}
      </span>
    </h2>
    <div class="text-white">
      <div
        v-if="file !== null"
      >
        <div
          v-if="file.type === 'img'"
          class="overflow-hidden mb-4 md:mb-6"
        >
          <img
            :src="file.src"
            class="img-zoom"
          >
        </div>
      </div>
      <dl
        v-for="(value, key) in contents"
        v-bind:key="key"
        class="mb-2 md:mb-4 last:mb-0"
      >
        <dt class="font-black md:text-3xl">{{ key }}</dt>
        <dd class="text-xl md:text-2xl md:ml-12">{{ value }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: String,
      required: true,
      default: null,
    },
    psn_id: {
      type: String,
      required: true,
      default: null,
    },
    file: {
      type: Object,
      required: false,
      default: null,
    },
    contents: {
      type: Object,
      required: false,
      default: null,
    },
    length: {
      type: Number,
      required: true,
      default: null,
    },
  },
  methods: {
    swipeLeft() {
      if (Number(this.$route.params.id) !== 1) {
        this.$router.push({params: { id: --this.$route.params.id }})
      } else {
        this.goLast()
      }
    },
    swipeRight() {
      if (this.$route.params.id !== this.length) {
        this.$router.push({params: { id: ++this.$route.params.id }})
      } else {
        this.goFirst()
      }
    },
    goFirst() {
      this.$router.push({params: { id: 1 }})
    },
    goLast() {
      this.$router.push({params: { id: this.length }})
    }
  }
}
</script>