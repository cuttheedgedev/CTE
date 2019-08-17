<template>
  <div class="container page">
    <Header />
    <div class="page-container">
      <slot />
    </div>
    <Footer />
  </div>
</template>



<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" >
.container {
  &.page {
    margin-top: 45px;
    background: url("~@/assets/images/page_bg1.png") repeat top left;
    background-size: 400px;
    background-color: rgb(245, 232, 216);
    border-radius: 50px 50px 0 0;
    // Shadow
    -webkit-box-shadow: 0px 0 50px 0px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 0px 0 50px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 0 50px 0px rgba(0, 0, 0, 0.35);
    // Testing
    padding: 60px 30px 567px 30px;
  }
}
</style>

