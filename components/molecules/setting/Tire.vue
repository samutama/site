<template>
  <div class="flex justify-center flex-wrap bg-khaki rounded-lg pt-4 pb-4 md:py-6 text-white">
    <h2 class="pb-4 px-4 md:px-6 w-full text-left font-helvetica font-black md:text-2xl">タイヤ</h2>
    <div class="w-full mb-4 md:mb-8">
      <h3 class="w-full text-left pl-6 md:pl-12 font-helvetica mb-2 md:text-xl">フロントタイヤ</h3>
      <p class="text-xl md:text-2xl font-bold font-helvetica text-center">
        {{ front }}
      </p>
    </div>
    <div class="w-full">
      <h3 class="w-full text-left pl-6 md:pl-12 font-helvetica mb-2 md:text-xl">リヤタイヤ</h3>
      <p class="text-xl md:text-2xl font-bold font-helvetica text-center">
        {{ rear }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    front: {
      type: String,
      default: null,
      required: true
    },
    rear: {
      type: String,
      default: null,
      required: true
    }
  },
}
</script>