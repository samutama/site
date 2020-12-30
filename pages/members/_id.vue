<template>
  <div class="container">
    <contents-layout
      type="full"
      textJp="部員詳細"
      textEn="MembersDetail"
      src="/members.jpg"
    >
      <member-content
        :num="members[id].num"
        :psn_id="members[id].psn_id"
        :file="members[id].file"
        :contents="members[id].contents"
        :length="members.length"
      />
    </contents-layout>
  </div>
</template>

<script>
import ContentsLayout from "~/components/template/ContentsLayout.vue";
import MemberContent from "~/components/atoms/MemberContent.vue";
import members from "@/assets/json/members.json";

export default {
  components: {
    ContentsLayout,
    MemberContent,
  },
  data() {
    return {
      id: this.$route.params.id - 1,
      members: members,
    }
  },
  head() {
    return {
      title: this.members[this.id].psn_id,
    }
  },
}
</script>

<style scoped>
.container {
  padding: 0;
}
</style>