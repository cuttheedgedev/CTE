<template>
  <div class="subscribe">
    <h1 class="center blue shadow high-z">Get Subscribed</h1>
    <p
      class="center blue shadow high-z bigger"
    >Once a week, all the cool code, design and tech-talk you can imagine.</p>
    <form action="https://getform.io/f/ebc0a84f-4625-433c-9c81-5fd3d045e556" method="POST">
      <div class="input-holder high-z">
        <div class="sub-btn-border high-z">
          <input type="email" name="email" />
          <button type="submit">Sign Up</button>
        </div>
      </div>
      <div class="g-recaptcha" data-sitekey="YOUR reCAPTCHA SITE KEY"></div>
    </form>
  </div>
</template>

<script>
export default {
  name: "subscribe"
};
</script>

<style lang="scss">
$mainC: #3f61bb;
.subscribe {
  z-index: 20;
}
.high-z {
  position: relative;
  z-index: 20;
}
.input-holder {
  position: absolute;
  // top: ;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 30px;
}

.sub-btn-border {
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 100px;
  padding: 10px;
  height: 100%;
  width: 100%;
  -webkit-box-shadow: 0px 0 60px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0 60px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0 60px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  top: -6px;
  & input {
    height: 40px;
    padding: 15px 35px;
    width: 70%;
    background: rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 100px 0 0 100px;
    color: whitesmoke;
    font-family: filson-soft, sans-serif;
    font-weight: 700;
    font-style: normal;
    text-align: center;
  }
  & button {
    height: 40px;
    width: 30%;
    border-radius: 0 100px 100px 0;
    border: none;
    color: white;
    background: $mainC;
    font-family: filson-soft, sans-serif;
    font-weight: 700;
    font-style: normal;
  }
}
</style>