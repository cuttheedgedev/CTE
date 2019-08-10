<template>
  <div class="layout">
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

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 1920px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
