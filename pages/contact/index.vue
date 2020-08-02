<template>
  <no-ssr>
    <div class="container">
      <contents-layout
        type="full"
        textJp="問い合わせ"
        textEn="Contact"
        src="/contact.jpg"
      >
        <div class="flex justify-between flex-wrap">
          <v-app>
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="name"
                      :rules="nameRules"
                      :counter="10"
                      label="お名前"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="メールアドレス"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-textarea
                      name="message"
                      label="問い合わせ内容"
                      value=""
                      required
                    ></v-textarea>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-btn @click="submit">送信</v-btn>
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
  data() {
    return {};
  }
};
</script>

<style>
.v-application--wrap {
  min-height: 0;
}
</style>