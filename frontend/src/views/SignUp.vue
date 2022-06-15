<template>
  <v-sheet height="100%">
    <v-container class="fill-height">
      <v-row>
        <v-col cols="12">
          <v-card flat>
            <v-card-title class="justify-center">Sign up</v-card-title>

            <v-card-text>
              <v-form>
                <v-text-field
                  outlined
                  dense
                  label="Username"
                  type="text"
                  prepend-icon="mdi-account"
                ></v-text-field>
                <v-text-field
                  outlined
                  dense
                  label="Email address"
                  type="email"
                  prepend-icon="mdi-email"
                ></v-text-field>
                <v-text-field
                  outlined
                  dense
                  label="Password"
                  type="password"
                  prepend-icon="mdi-lock"
                  append-icon="mdi-eye-off"
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
export default {
  name: "SignUp",
  title: "Sign up",
  methods: {
    signUp() {
      console.log("Sign up!");
    },
  },
};
</script>