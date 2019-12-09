<template>
 

  <v-app-bar app
    flat
    hide-on-scroll
  >
   
    <v-container
      mx-auto
      py-0
    >
      <v-layout>
        <v-img
        alt="Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
        
        <v-spacer />
        <v-btn color="accent" icon @click="setTheme">
          <v-icon v-if="!this.goDark">mdi-white-balance-sunny </v-icon>
          <v-icon  v-else >mdi-moon-waxing-crescent</v-icon>
        </v-btn>
        <!-- <v-switch class="theme-select mt-5" @change="setTheme" v-model="goDark"></v-switch> -->
      </v-layout>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    goDark: false
  }),
  methods: {
    setTheme() {
      this.goDark = !this.goDark
      if (this.goDark == true) {
        return (this.$vuetify.theme.dark = true);
      } else {
        return (this.$vuetify.theme.dark = false);
      }
    }
  }
};
</script>

<style>
</style>