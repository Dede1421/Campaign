<template>
  <div class="layout">
    <Header />
    <Main>
      <slot></slot>
    </Main>
    <Footer />
  </div>
</template>

<script>
import "@/assets/styles/main.scss";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
export default {
  name: "Layout",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style lang="scss">
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>