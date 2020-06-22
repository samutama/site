<template>
  <no-ssr>
    <div class="container">
      <contents-layout
        type="full"
        textJp="セッティング詳細"
        textEn="SettingDetail"
        src="/setting.jpg"
      >
        <setting-list />
      </contents-layout>
    </div>
  </no-ssr>
</template>

<script>
import ContentsLayout from "~/components/template/ContentsLayout.vue";
import SettingList from "~/components/organisms/SettingList.vue";

export default {
  components: {
    ContentsLayout,
    SettingList,
  },
}
</script>