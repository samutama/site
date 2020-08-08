<template>
  <div class="flex justify-center flex-wrap bg-khaki rounded-lg pt-4 pb-4">
    <h2 class="pb-4 px-4 w-full text-left font-helvetica font-black">ダウンフォース</h2>
    <div class="flex justify-center">
      <p class="text-4xl font-helvetica mx-4">
        {{ front }}
      </p>
      <p class="text-4xl font-helvetica mx-4">
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
    },
  },
}
</script>