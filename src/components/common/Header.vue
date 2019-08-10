<template>
  <div>
    <strong>
      <g-link to="/">{{ $static.metaData.siteName }}</g-link>
    </strong>
    <div class="nav-logo">CTE Logo</div>
    <div class="nav-links">
      <g-link class="nav__link" to="/guides">Guides</g-link>
      <g-link class="nav__link" to="/articles">Articles</g-link>
      <g-link class="nav__link" to="/snippets">Snippets</g-link>
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/about">About</g-link>
    </div>
    <div class="nav-sub">
      <g-link class="nav__link" to="/Search">Search</g-link>
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.nav_link {
  margin-left: 20px;
}
</style>
