<template>
  <v-sheet height="100%">
    <v-container class="fill-height">
      <v-row>
        <v-col cols="12">
          <v-card flat>
            <v-card-title class="justify-center">Login</v-card-title>

            <v-card-text>
              <v-form ref="loginForm">
                <v-text-field
                  outlined
                  dense
                  label="Email address"
                  type="email"
                  prepend-icon="mdi-email"
                  :rules="[(i) => !!i || 'This field is required!']"
                ></v-text-field>
                <v-text-field
                  outlined
                  dense
                  label="Password"
                  :type="passwordVisible ? 'text' : 'password'"
                  prepend-icon="mdi-lock"
                  :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="passwordVisible = !passwordVisible"
                  :rules="[(i) => !!i || 'This field is required!']"
                ></v-text-field>
                <v-btn block class="text-none" @click="login">Submit</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "Login",
  title: "Login",
  data() {
    return {
      passwordVisible: false,
    };
  },
  methods: {
    login() {
      if (this.$refs.loginForm.validate()) {
        console.log("Login!");
      }
    },
  },
};
</script>