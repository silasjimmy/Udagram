<template>
  <v-sheet height="100%">
    <v-container class="fill-height">
      <v-row>
        <v-col cols="12">
          <v-card flat>
            <v-card-title class="justify-center">Sign up</v-card-title>

            <v-card-text>
              <v-form ref="signUpForm">
                <v-text-field
                  outlined
                  dense
                  v-model="username"
                  label="Username"
                  type="text"
                  prepend-icon="mdi-account"
                  :rules="[rules.required, rules.validUsername]"
                ></v-text-field>
                <v-text-field
                  outlined
                  dense
                  v-model="email"
                  label="Email address"
                  type="email"
                  prepend-icon="mdi-email"
                  :rules="[rules.required, rules.validEmail]"
                ></v-text-field>
                <v-text-field
                  outlined
                  dense
                  v-model="password"
                  label="Password"
                  type="password"
                  prepend-icon="mdi-lock"
                  append-icon="mdi-eye-off"
                  :rules="[rules.required, rules.passwordLength]"
                ></v-text-field>
                <v-btn block class="text-none" @click="signUp">Submit</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { useAuthStore } from "../store/authStore";

export default {
  name: "SignUp",
  title: "Sign up",
  setup() {
    const authStore = useAuthStore();

    return {
      authStore,
    };
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      rules: {
        required: (i) => !!i || "This field is required!",
        validEmail: (i) => /.+@.+\..+/.test(i) || "Invalid email address!",
        passwordLength: (i) =>
          (!!i && i.length >= 8) || "Min. of 8 characters required!",
        validUsername: (i) => !/\s/.test(i) || "No spaces in username!",
      },
    };
  },
  methods: {
    signUp() {
      if (this.$refs.signUpForm.validate()) {
        console.log("Sign up!");
      }
    },
  },
};
</script>