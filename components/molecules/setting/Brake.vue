<template>
  <div class="flex justify-center flex-wrap bg-khaki rounded-lg pt-4 pb-4 md:py-6 text-white">
    <h2 class="pb-4 px-4 md:px-6 w-full text-left font-helvetica font-black md:text-2xl">ブレーキバランス</h2>
    <div>
      <p class="text-4xl font-helvetica">
        {{ balance }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    balance: {
      type: String,
      default: null,
      required: true
    },
  },
}
</script>