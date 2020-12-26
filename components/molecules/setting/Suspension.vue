<template>
  <div class="flex justify-center flex-wrap bg-khaki rounded-lg pt-4 pb-4 md:py-6 text-white">
    <h2 class="pb-4 px-4 md:px-6 w-full text-left font-helvetica font-black md:text-2xl">サスペンション</h2>
    <div class="w-full mb-4">
      <h3 class="w-full text-left pl-6 md:pl-12 font-helvetica md:text-xl">車高調節</h3>
      <div class="flex justify-center">
        <p class="text-2xl md:text-3xl font-helvetica mx-2 md:mb-2">
          F: 80
        </p>
        <p class="text-2xl md:text-3xl font-helvetica mx-2 md:mb-2">
          R: 80
        </p>
      </div>
    </div>
    <div class="w-full mb-4">
      <h3 class="w-full text-left pl-6 md:pl-12 font-helvetica md:text-xl">固有振動数</h3>
      <div class="flex justify-center">
        <p class="text-2xl md:text-3xl font-helvetica mx-2 md:mb-2">
          F: 2.6
        </p>
        <p class="text-2xl md:text-3xl font-helvetica mx-2 md:mb-2">
          R: 2.95
        </p>
      </div>
    </div>
    <div class="w-full mb-4">
      <h3 class="w-full text-left pl-6 md:pl-12 font-helvetica md:text-xl">アンチロールバー</h3>
      <div class="flex justify-center">
        <p class="text-2xl md:text-3xl font-helvetica mx-2 md:mb-2">
          F: 3
        </p>
        <p class="text-2xl md:text-3xl font-helvetica mx-2 md:mb-2">
          R: 7
        </p>
      </div>
    </div>
    <div class="w-full mb-4">
      <h3 class="w-full text-left pl-6 md:pl-12 font-helvetica md:text-xl">減衰比(縮み側)</h3>
      <div class="flex justify-center">
        <p class="text-2xl md:text-3xl font-helvetica mx-2 md:mb-2">
          F: 51
        </p>
        <p class="text-2xl md:text-3xl font-helvetica mx-2 md:mb-2">
          R: 56
        </p>
      </div>
    </div>
    <div class="w-full mb-4">
      <h3 class="w-full text-left pl-6 md:pl-12 font-helvetica md:text-xl">減衰比(伸び側)</h3>
      <div class="flex justify-center">
        <p class="text-2xl md:text-3xl font-helvetica mx-2 md:mb-2">
          F: 88
        </p>
        <p class="text-2xl md:text-3xl font-helvetica mx-2 md:mb-2">
          R: 90
        </p>
      </div>
    </div>
    <div class="w-full mb-4">
      <h3 class="w-full text-left pl-6 md:pl-12 font-helvetica md:text-xl">ネガティブキャンバー角</h3>
      <div class="flex justify-center">
        <p class="text-2xl md:text-3xl font-helvetica mx-2 md:mb-2">
          F: 1
        </p>
        <p class="text-2xl md:text-3xl font-helvetica mx-2 md:mb-2">
          R: 0.5
        </p>
      </div>
    </div>
    <div class="w-full">
      <h3 class="w-full text-left pl-6 md:pl-12 font-helvetica md:text-xl">トー角</h3>
      <div class="flex flex-col">
        <p class="text-2xl md:text-3xl font-helvetica mx-2 md:mb-2 text-center">
          F: アウト0.80
        </p>
        <p class="text-2xl md:text-3xl font-helvetica mx-2 md:mb-2 text-center">
          R: イン0.40
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // suspension: {
    //   type: String,
    //   default: null,
    //   required: true
    // },
  },
}
</script>