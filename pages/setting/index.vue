<template>
  <no-ssr>
    <div class="container">
      <contents-layout
        type="full"
        textJp="セッティング"
        textEn="Setting"
        src="/setting.jpg"
      >
        <div class="flex justify-between flex-wrap">
          
        </div>
      </contents-layout>
    </div>
  </no-ssr>
</template>

<script>
import ContentsLayout from "~/components/template/ContentsLayout.vue";
import members from "@/assets/json/members.json";

export default {
  components: {
    ContentsLayout,

  },
  data() {
    return {

    }
  }
}
</script>