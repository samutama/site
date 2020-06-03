<template>
  <div class="bg-khaki rounded-lg pt-4 px-4 pb-6">
    <h2 class="font-libreBaskerville text-lg font-black text-yellow flex mb-4">
      <span class="font-raleway text-2xl leading-none">
        #{{ num }}
      </span>
      <span class="w-full">
        {{ psn_id }}
      </span>
    </h2>
    <div>
      <div
        v-if="file !== null"
      >
        <div
          v-if="file.type === 'img'"
          class="overflow-hidden mb-4"
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
        class="mb-2 last:mb-0"
      >
        <dt class="font-black">{{ key }}</dt>
        <dd class="text-xl">{{ value }}</dd>
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
  }
}
</script>