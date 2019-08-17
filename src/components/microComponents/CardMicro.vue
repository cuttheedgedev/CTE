<template>
  <div class="card-full-authCard">
    <g-link class="clear-linker">
      <div class="card-full-authCard-authframe">
        <div v-if="cardData.author='NightApple'">
          <g-image
            src="@/assets/images/auther_profile_nightapple.jpg"
            class="card-full-authCard-img"
            width="120"
            hight="120"
          />
        </div>
      </div>
      <div class="card-full-authCard-info">
        <p class="white italic" v-if="cardData.timeToRead > 1">{{cardData.timeToRead}} mins read</p>
        <p class="white italic" v-else>{{cardData.timeToRead}} min read</p>

        <div class="spacer-1">
          <p class="white italic">
            <span class="accentOff">by</span>
            {{cardData.author}} | {{cardData.postDate}}
          </p>
        </div>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  name: "CardMicro",
  props: ["cardData"]
};
</script>

<style lang="scss" scoped>
.card-full {
  &-authCard {
    margin-top: 15px;
    width: 345px;
    height: 100px;
    background: rgba(255, 255, 255, 0.7);
    padding: 15px;
    border-radius: 20px;
    position: absolute;
    -webkit-box-shadow: 0px 0 60px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0 60px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0 60px 0px rgba(0, 0, 0, 0.2);

    &-authframe {
      height: 100px;
      width: 100px;
      background: rgba(255, 255, 255, 0.85);
      padding: 15px;
      border-radius: 20px;
      position: absolute;
      transform: translate(-15px, -15px);
      -webkit-box-shadow: 0px 0 30px 0px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: 0px 0 30px 0px rgba(0, 0, 0, 0.4);
      box-shadow: 0px 0 30px 0px rgba(0, 0, 0, 0.4);
    }
    &-img {
      border-radius: 12px;
    }
    &-info {
      background-color: rgba(31, 56, 146, 0.75);
      padding: 15px 10px 10px 100px;
      border-radius: 12px;
    }
    & p {
      font-size: 1.2rem;
    }
  }
}

.spacer-1 {
  margin-top: 7px;
  & p {
    font-size: 0.85rem;
  }
}
</style>

      <!-- <div v-if="cardData.updateDate != null ">edited</div> -->