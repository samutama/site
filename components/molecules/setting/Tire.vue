<template>
  <div class="flex justify-center flex-wrap bg-khaki rounded-lg pt-4 pb-4">
    <h2 class="pb-4 px-4 w-full text-left font-helvetica font-black">タイヤ</h2>
    <div class="w-full mb-4">
      <h3 class="w-full text-left pl-6 font-helvetica mb-2">フロントタイヤ</h3>
      <p class="text-xl font-helvetica">
        {{ front }}
      </p>
    </div>
    <div class="w-full">
      <h3 class="w-full text-left pl-6 font-helvetica mb-2">リヤタイヤ</h3>
      <p class="text-xl font-helvetica">
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