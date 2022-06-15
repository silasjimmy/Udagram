<template>
  <v-app>
    <v-app-bar app elevate-on-scroll>
      <v-toolbar-title>Udagram</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn link rounded text to="/login" class="text-none">Login</v-btn>
      <v-btn link rounded text to="/sign-up" class="text-none">Sign up</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html {
  overflow-y: auto !important;
}

.b {
  border: 1px solid black;
}
</style>