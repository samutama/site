<template>
  <nuxt-link
    v-if="type === 'left' || type === 'right'"
    class="flex flex-col bg-khaki relative overflow-hidden z-10"
    :class="['text-' + type, 'hinomaru-' + type, type === 'left' ? 'mr-auto' : 'ml-auto']"
    :to="link"
  >
    <div
      class="pt-3 pb-1"
      :class="type === 'left' ? 'pr-8 pl-4 md:pr-16 md:pl-8' : 'pr-4 pl-8 md:pr-8 md:pl-16'"
    >
      <h2 class="text-2xl md:text-4xl font-black text-white">
        {{ textJp }}
      </h2>
      <span
        class="text-base md:text-lg font-raleway text-white block"
        :class="type === 'left' ? 'text-left' : 'text-right'"
      >
        {{ textEn }}
      </span>
    </div>
    <hr class="pb-2 border-yellow">
  </nuxt-link>
  <div
    v-else-if="type === 'full'"
    class="flex flex-col bg-khaki relative overflow-hidden z-10 text-left"
    :class="'hinomaru-' + type"
  >
    <div
      class="pt-3 pb-2 pr-8 pl-4"
    >
      <h1 class="text-2xl md:text-4xl font-black text-white">
        {{ textJp }}
      </h1>
      <span class="text-base md:text-lg font-raleway text-white ">
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
    link: {
      type: String,
      required: false,
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

.hinomaru-full::after {
  position: absolute;
  content: '';
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #E92E3D;
  border: solid 2px #fff;
  top: 0;
  bottom: 0;
  right: -5%;
  opacity: .5;
  margin: auto;
}

@media screen and (min-width: 768px) {
  .hinomaru-left::after {
    position: absolute;
    content: '';
    width: 35px;
    height: 35px;
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
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #E92E3D;
    border: solid 2px #fff;
    top: 50%;
    left: -5%;
    opacity: .5;
  }
}
</style>