<template>
  <no-ssr>
    <div class="container">
      <contents-layout
        type="full"
        textJp="お問い合わせ"
        textEn="Contact"
        src="/contact.jpg"
      >
        <div class="flex justify-between flex-wrap">
          <v-app class="w-full">
            <v-form
              v-model="valid"
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScwiDlv_gL0wXmLA0kvbdpXbHqPcEU_JsHKPeXCFzuCVxOFVw/formResponse"
              target="dummy"
            >
              <v-container>
                <iframe name="dummy" style="display:none;"></iframe>

                <v-row class="md:p-4">
                  <v-col cols="12">
                    <v-text-field
                      v-model="name"
                      :rules="nameRules"
                      label="お名前"
                      name="entry.244623135"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="メールアドレス"
                      name="entry.1351230640"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-textarea
                      v-model="contactDetail"
                      :rules="contactDetailRules"
                      label="お問い合わせ内容"
                      name="entry.161467339"
                      value
                      required
                    ></v-textarea>
                  </v-col>

                  <v-col cols="12" class="text-center">
                    <v-btn 
                      type="submit"
                      :class="valid ? '' :'pointer-events-none'"
                      @click="$router.push('contact/thanks')"
                    >
                      送信
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-app>
        </div>
      </contents-layout>
    </div>
  </no-ssr>
</template>

<script>
import ContentsLayout from "~/components/template/ContentsLayout.vue";

export default {
  components: {
    ContentsLayout
  },
  data: () => ({
    valid: false,
    name: "",
    email: "",
    contactDetail: "",
    nameRules: [v => !!v || "お名前は必須です"],
    emailRules: [
      v => !!v || "メールアドレスは必須です",
      v => /.+@.+/.test(v) || "メールアドレスの形式で入力してください"
    ],
    contactDetailRules: [v => !!v || "お問い合わせ内容は必須です"],
  })
};
</script>

<style>
.v-application--wrap {
  min-height: 0;
}
</style>
