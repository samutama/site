<template>
  <div
    v-if="type === 'left' || type === 'right'"
    class="flex flex-col bg-khaki relative overflow-hidden z-10"
    :class="['text-' + type, 'hinomaru-' + type, type === 'left' ? 'mr-auto' : 'ml-auto']"
  >
    <div
      class="pt-3 pb-1"
      :class="[type === 'left' ? 'pr-8 pl-4' : 'pr-4 pl-8']"
    >
      <h2 class="text-2xl font-black">
        {{ textJp }}
      </h2>
      <span class="text-base font-raleway">
        {{ textEn }}
      </span>
    </div>
    <hr class="pb-2 border-yellow">
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      default: null,
    },
    textJp: {
      type: String,
      required: true,
      default: null,
    },
    textEn: {
      type: String,
      required: true,
      default: null,
    },
  }
}
</script>

<style>
.hinomaru-left::after {
  position: absolute;
  content: '';
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #E92E3D;
  border: solid 2px #fff;
  top: 50%;
  right: -5%;
  opacity: .5;
}

.hinomaru-right::after {
  position: absolute;
  content: '';
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #E92E3D;
  border: solid 2px #fff;
  top: 50%;
  left: -5%;
  opacity: .5;
}
</style>