<template>
  <div class="flex justify-center flex-wrap bg-khaki rounded-lg pt-4 pb-4">
    <h2 class="pb-4 px-4 w-full text-left font-helvetica font-black">LSD</h2>
    <div class="w-full">
      <h3 class="w-full text-left pl-6 font-helvetica">イニシャルトルク</h3>
      <div class="flex justify-center">
        <p class="text-4xl font-helvetica mx-6 min-width-1">
          {{ initialTorque.front }}
        </p>
        <p class="text-4xl font-helvetica mx-6 min-width-1">
          {{ initialTorque.rear }}
        </p>
      </div>
    </div>
    <div class="w-full">
      <h3 class="w-full text-left pl-6 font-helvetica">加速時</h3>
      <div class="flex justify-center">
        <p class="text-4xl font-helvetica mx-6 min-width-1">
          {{ whenAcceleration.front }}
        </p>
        <p class="text-4xl font-helvetica mx-6 min-width-1">
          {{ whenAcceleration.rear }}
        </p>
      </div>
    </div>
    <div class="w-full">
      <h3 class="w-full text-left pl-6 font-helvetica">減速時</h3>
      <div class="flex justify-center">
        <p class="text-4xl font-helvetica mx-6 min-width-1">
          {{ whenDeceleration.front }}
        </p>
        <p class="text-4xl font-helvetica mx-6 min-width-1">
          {{ whenDeceleration.rear }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialTorque: {
      type: String,
      default: null,
      required: true
    },
    whenAcceleration: {
      type: String,
      default: null,
      required: true
    },
    whenDeceleration: {
      type: String,
      default: null,
      required: true
    },
  },
}
</script>

<style>
.min-width-1 {
  min-width: 1em;
}
</style>