<template>
  <div class="post-lists">
    <div class="postLists">
      <div class="postLists-list">
        <div class="postLists-list-heading red">Game Engines</div>
        <div class="postLists-list-items">
          <g-link to="/tags/unity">Unity</g-link>
          <g-link to="/tags/unreal">Unreal</g-link>
        </div>
      </div>
      <div class="postLists-list">
        <div class="postLists-list-heading red">JS Libraries</div>
        <div class="postLists-list-items">
          <g-link to="/tags/vue">Vue</g-link>
          <g-link to="/tags/react">React</g-link>
        </div>
      </div>
      <div class="postLists-list">
        <div class="postLists-list-heading red">Languages</div>
        <div class="postLists-list-items">
          <g-link to="/tags/c#">C#</g-link>
          <g-link to="/tags/javascript">Java Script</g-link>
          <g-link to="/tags/dart">Dart</g-link>
          <g-link to="/tags/swift">Swift</g-link>
        </div>
      </div>
      <div class="postLists-list">
        <div class="postLists-list-heading red">Tools</div>
        <div class="postLists-list-items">
          <g-link to="/tags/vscode">VS Code</g-link>
          <g-link to="/tags/adobexd">Adobe XD</g-link>
          <g-link to="/tags/Netlify">Netlify</g-link>
        </div>
      </div>
      <div class="postLists-list">
        <div class="postLists-list-heading red">App Types</div>
        <div class="postLists-list-items">
          <g-link to="/tags/arvr">AR/VR</g-link>
          <g-link to="/tags/pwa">PWA</g-link>
          <g-link to="/tags/staticsite">Static Site</g-link>
          <g-link to="/tags/iosapp">IOS App</g-link>
        </div>
      </div>
    </div>
  </div>
</template>





<script>
export default {
  name: "PostLists"
};
</script>



<style lang="scss" >
$mainC: #3f61bb;
$contrastC: #c34223;

.postLists {
  margin-top: 30px;
  display: grid;
  grid: auto / repeat(5, 1fr);
  grid-gap: 30px;

  &-list {
    &-heading {
      font-size: 1.4rem;
      font-family: futura-pt, sans-serif;
      font-style: normal;
      font-weight: 700;
    }
    .postLists-list-items {
      & a {
        color: $contrastC;
        text-decoration: none;
        margin-left: 5px;
        display: block;
        margin-top: 10px;
      }
    }
  }
}
</style>
