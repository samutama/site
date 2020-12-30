<template>
  <client-only>
    <div class="container">
      <contents-layout
        type="full"
        textJp="セッティング"
        textEn="Setting"
        src="/setting.jpg"
      >
        <div class="flex justify-between flex-wrap">
          <nuxt-link
            to="setting/1"
          >
            <div class="overflow-hidden rounded-lg relative">
              <img src="/setting_p1.jpg" class="img-zoom opacity-75" alt="">
              <div class="absolute flex justify-center items-center -top-2 right-0 bottom-0 left-0">
                <h2 class="font-raleway text-2xl md:text-4xl text-yellow leading-tight text-center">
                  McLaren
                  <br>
                  <span class="font-black text-4xl md:text-6xl">
                    P1 GTR
                  </span>
                </h2>
              </div>
            </div>
          </nuxt-link>
        </div>
      </contents-layout>
    </div>
  </client-only>
</template>

<script>
import ContentsLayout from "~/components/template/ContentsLayout.vue";

export default {
  components: {
    ContentsLayout,
  },
  head() {
    return {
      title: 'セッティング',
    }
  },
}
</script>

<style scoped>
.container {
  padding: 0;
}
</style>