<template>
  <div class="header">
    <!-- <g-image alt="Logo - Cut The Edge" class="Logo" src="@/assets/images/logo.svg" width="600" /> -->
    <g-link class="header-logo" to="/">CutTheEdge</g-link>
    <div class="nav-links">
      <g-link class="nav-links-items" to="/types/guide">Guides</g-link>
      <g-link class="nav-links-items" to="/types/article">Articles</g-link>
      <g-link class="nav-links-items" to="/types/video">Videos</g-link>
      <g-link class="nav-links-items" to="/types/snippet">Snippets</g-link>
    </div>
    <div class="nav-search-bar">
      <g-link to="/Search">
        <MainBTN btnText="Seach" />
      </g-link>
    </div>
  </div>
</template>


<script>
import MainBTN from "@/components/MainBTN.vue";
export default {
  name: "Header",
  components: {
    MainBTN
  }
};
</script>

<style lang="scss" scoped>
.header {
  z-index: 15;
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 70%;
  min-width: 900px;
  height: 70px;
  background: white;
  padding: 15px;
  border-radius: 100px;
  -webkit-box-shadow: 0px 0 50px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0 50px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0 50px 0px rgba(0, 0, 0, 0.35);
  display: grid;
  grid: auto / 1fr 3fr 1fr;
  &-logo {
    text-align: left;
    font-family: filson-soft, sans-serif;
    font-weight: 800;
    font-style: normal;
    text-decoration: none;
    opacity: 0.8;
    font-size: 1.5rem;
    // justify-content: center;
    // vertical-align: middle;
    padding: 8px 0 8px 10px;
  }
}

.nav-links {
  text-align: center;
  padding: 13px;

  &-items {
    font-family: filson-soft, sans-serif;
    font-weight: 600;
    font-style: normal;
    text-decoration: none;
    color: #c34223;
    opacity: 0.8;
    font-size: 1rem;
    margin: 0 10px;
  }
}
</style>
