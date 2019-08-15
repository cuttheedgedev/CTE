<template>
  <div class="frame">
    <div class="layout">
      <Header />
      <div class="page-container">
        <slot />
      </div>
      <Footer />
    </div>
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

<style>
.frame {
  width: 100vw;
  padding: 30px;
  padding-bottom: 0;
}
.layout {
  /* height: calc(100% + 400px); */
  width: 100%;
  max-width: 1900px;
  padding-left: 20px;
  padding-right: 20px;
  background: url("~@/assets/images/page_bg1.png") repeat top left;
  background-size: 400px;
  background-color: rgb(245, 232, 216);
  margin-top: 30px;
  padding: 60px 30px 360px 30px;
  /* padding: 60px 30px; */
  border-radius: 50px 50px 0 0;

  -webkit-box-shadow: 0px 0 50px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0 50px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0 50px 0px rgba(0, 0, 0, 0.35);
}
</style>

