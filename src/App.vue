<template>
  <v-app>
    <Header></Header>
    <v-content>

      <Cover></Cover>
      <About></About>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Cover from "./view/Cover"
import About from "./view/About"

export default {
  name: "App",

  components: { Header,Cover,About },

  data: () => ({})
};
</script>
<style >
.fluid-xy {
  margin: 0px auto;
  padding: 150px 30px;
  padding-top: 150px;
  max-width: 1000px;
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
}
</style>