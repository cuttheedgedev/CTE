<template>
  <div class="main-btn-border">
    <div class="main-btn" :class="btnBG ? 'red upcase': red ">
      <span class="main-btn-link" :class="btnBG ? 'upcase': red ">{{btnText}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBTN",
  props: {
    btnText: {
      type: String,
      required: true
    },
    btnBG: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.main-btn-border {
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 100px;
  padding: 10px;
  height: 100%;
  width: 100%;
  -webkit-box-shadow: 0px 0 60px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0 60px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0 60px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  top: -6px;
}

.main-btn {
  width: 100%;
  height: 100%;
  background-color: rgba(31, 56, 146, 0.95);
  text-align: center;
  border-radius: 50px;
  padding: 8px;

  &.red {
    background-color: #c34223;
  }
  &-link {
    width: 100%;
    height: 100%;
    font-family: filson-soft, sans-serif;
    font-weight: 600;
    font-style: normal;
    text-decoration: none;
    font-size: 1rem;
    color: white;
  }
}
</style>
