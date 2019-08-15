<template>
  <div class="footer">
    <div class="footer-holder">
      <div class="footer-holder-back-bg" />
      <div class="footer-holder-front-bg" />
    </div>
    <Subscribe class="high-z" />

    <g-link class="footer-logo" to="/">CutTheEdge</g-link>
    <div class="high-z footer-frame">
      <div>
        <h4 class="white">About</h4>
        <ul class="footer-center-txt">
          <li>FAQ's</li>
          <li>Resources</li>
          <li>Activity</li>
          <li>RoadMap</li>
        </ul>
      </div>
      <div>
        <h4 class="white">Legal</h4>
        <ul class="footer-center-txt">
          <li>Terms of Use</li>
          <li>Terms Of Subscription</li>
          <li>Privacy Policy</li>
          <li>Report An Infraction</li>
        </ul>
      </div>
      <div>
        <h4 class="white">Contact</h4>
        <ul class="footer-center-txt">
          <li>Email</li>
          <li>Instagram</li>
          <li>Discord</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>

    <div
      class="footer-lastline"
    >Copyright © 2019 by CutTheEdge.Dev | All Rights Reserved | < coded/> with <3 by CutTheEdge.Dev</div>
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

<style lang="scss" >
.footer-logo {
  font-family: filson-soft, sans-serif;
  font-weight: 800;
  font-style: normal;
  text-decoration: none;
  opacity: 0.8;
  font-size: 1.5rem;
  padding: 8px 0 8px 10px;
  color: white;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 150px);
  z-index: 20;
}
.footer {
  margin-top: 100px;
}

.footer-holder {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -10%);
  height: 500px;
  width: 100%;
  overflow: hidden;
  z-index: 10;
  &-back-bg {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 1200px;
    height: 1200px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 600px;
    z-index: 11;

    // position: fixed;
    // bottom: 0px;
    // z-index: 20;
  }
  &-front-bg {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 250px);
    width: 950px;
    height: 950px;
    background-color: #526890;
    border-radius: 600px;
    opacity: 0.95;
    z-index: 12;
  }
}

.footer-frame {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 210px);
  width: 600px;
  display: grid;
  grid: auto / repeat(3, 1fr);
  text-align: center;
}

.footer-center-txt {
  text-decoration: none;
  color: white;
  margin-top: 5px;
  & li {
    text-align: center;
    margin-top: 4px;
  }
}

.footer-lastline {
  width: 900px;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 340px);
  z-index: 20;
  color: white;
}
</style>