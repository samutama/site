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
                      v-model="firstname"
                      :rules="nameRules"
                      :counter="10"
                      label="First name"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="lastname"
                      :rules="nameRules"
                      :counter="10"
                      label="Last name"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
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
