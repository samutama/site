<template>
  <div class="flex justify-center flex-wrap bg-khaki rounded-lg pt-4 pb-4 text-white">
    <h2 class="pb-4 px-4 w-full text-left font-helvetica font-black">トランスミッション</h2>
    <div class="w-full mb-4">
      <h3 class="w-full text-left pl-6 font-helvetica">最高速</h3>
      <div class="flex justify-center">
        <p class="text-4xl font-helvetica mx-6">
          {{ mostHighSpeed }}
        </p>
      </div>
    </div>
    <div class="w-full mb-4">
      <h3 class="w-full text-left pl-6 font-helvetica">1速</h3>
      <div class="flex justify-center">
        <p class="text-4xl font-helvetica mx-6">
          {{ first }}
        </p>
      </div>
    </div>
    <div class="w-full mb-4">
      <h3 class="w-full text-left pl-6 font-helvetica">2速</h3>
      <div class="flex justify-center">
        <p class="text-4xl font-helvetica mx-6">
          {{ second }}
        </p>
      </div>
    </div>
    <div class="w-full mb-4">
      <h3 class="w-full text-left pl-6 font-helvetica">3速</h3>
      <div class="flex justify-center">
        <p class="text-4xl font-helvetica mx-6">
          {{ third }}
        </p>
      </div>
    </div>
    <div class="w-full mb-4">
      <h3 class="w-full text-left pl-6 font-helvetica">4速</h3>
      <div class="flex justify-center">
        <p class="text-4xl font-helvetica mx-6">
          {{ fourth }}
        </p>
      </div>
    </div>
    <div class="w-full mb-4">
      <h3 class="w-full text-left pl-6 font-helvetica">5速</h3>
      <div class="flex justify-center">
        <p class="text-4xl font-helvetica mx-6">
          {{ fifth }}
        </p>
      </div>
    </div>
    <div class="w-full mb-4">
      <h3 class="w-full text-left pl-6 font-helvetica">6速</h3>
      <div class="flex justify-center">
        <p class="text-4xl font-helvetica mx-6">
          {{ sixth }}
        </p>
      </div>
    </div>
    <div class="w-full mb-4">
      <h3 class="w-full text-left pl-6 font-helvetica">7速</h3>
      <div class="flex justify-center">
        <p class="text-4xl font-helvetica mx-6">
          {{ seventh }}
        </p>
      </div>
    </div>
    <div class="w-full">
      <h3 class="w-full text-left pl-6 font-helvetica">ファイナルギア</h3>
      <div class="flex justify-center">
        <p class="text-4xl font-helvetica mx-6">
          {{ finalGear }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mostHighSpeed: {
      type: String,
      default: null,
      required: true
    },
    first: {
      type: String,
      default: null,
      required: true
    },
    second: {
      type: String,
      default: null,
      required: true
    },
    third: {
      type: String,
      default: null,
      required: true
    },
    fourth: {
      type: String,
      default: null,
      required: true
    },
    fifth: {
      type: String,
      default: null,
      required: true
    },
    sixth: {
      type: String,
      default: null,
      required: false
    },
    seventh: {
      type: String,
      default: null,
      required: false
    },
    finalGear: {
      type: String,
      default: null,
      required: true
    },
  },
}
</script>