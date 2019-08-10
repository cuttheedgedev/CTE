<template>
  <div class="footer">
    <Subscribe />
    <footer>
      <div>CTE Logo</div>
      <div>Cut The Edege</div>
      <div class="footer-row-1">
        <div class="footer-row-1-col-1">
          <h4 class="white">About</h4>
          <ul>
            <li>>FAQ's</li>
            <li>>Resources</li>
            <li>>Activity</li>
            <li>>RoadMap</li>
          </ul>
        </div>
        <div class="footer-row-1-col-2">
          <h4 class="white">Contact</h4>
          <ul>
            <li>>Discord</li>
            <li>>Twitter</li>
            <li>>Instagram</li>
            <li>>Email</li>
          </ul>
        </div>
        <div class="footer-row-1-col-3">
          <h4 class="white">Legal</h4>
          <ul>
            <li>>Terms of Use</li>
            <li>>Terms Of Subscription</li>
            <li>>Privacy Policy</li>
            <li>>Report An Infraction</li>
          </ul>
        </div>
      </div>

      <div class="footer-row-2">Copyright © 2019 by CutTheEdge.Dev | All Rights Reserved</div>
    </footer>
  </div>
</template>

<script>
import Subscribe from "@/components/common/Subscribe.vue";
export default {
  name: "Footer",
  components: {
    Subscribe
  }
};
</script>