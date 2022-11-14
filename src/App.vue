<template>
  <Main-Page id="main"/>
</template>

<script>
import MainPage from "./components/main";

export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
  text-transform: capitalize;
  font-family: "Nunito", sans-serif;
}
#App {
  width: 100vw;
  height: 100vh;
}
</style>
