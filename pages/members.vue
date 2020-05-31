<template>
  <div class="container">
    <contents-layout
      type="full"
      textJp="部員"
      textEn="Members"
      src="/members.jpg"
    >
      <div class="flex justify-between flex-wrap">
        <member-link
          v-for="(members, index) in members"
          v-bind:key="index"
          :num="members.num"
          :name="members.name"
        />
      </div>
    </contents-layout>
  </div>
</template>

<script>
import ContentsLayout from "~/components/template/ContentsLayout.vue";
import MemberLink from "~/components/atoms/MemberLink.vue";
import members from "@/assets/json/members.json";

export default {
  components: {
    ContentsLayout,
    MemberLink,
  },
  data() {
    return {
      members: members
    }
  }
}
</script>