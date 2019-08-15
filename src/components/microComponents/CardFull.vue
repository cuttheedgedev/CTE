<template>
  <g-link :to="cardData.path">
    <div class="card-full-frame">
      <g-image :src="cardData.cover_img" class="card-full-img" />
      <div class="card-full-content">
        <h3 class="card-full-heading" v-html="cardData.title"></h3>
        <div class="card-full-excerpt" v-html="cardData.excerpt" />
        <div class="card-full-taxonomies">
          <g-link
            class="card-full-taxonomis-type"
            :to="type.path"
            v-for="(type, index) in cardData.types"
            :key="index"
          >
            <MainBTN :btnText="'#'+type.id +'s'" btnBG="red" />
          </g-link>
          <g-link
            class="card-full-taxonomies-tag"
            :to="tag.path"
            v-for="(tag, index) in cardData.tags"
            :key="index"
          >
            <MainBTN :btnText="'#'+tag.id" />
          </g-link>
        </div>

        <div class="card-full-authCard">
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
            <!-- <div v-if="cardData.updateDate != null ">edited</div> -->

            <div class="spacer-1">
              <p class="white italic">
                <span class="accentOff">by</span>
                {{cardData.author}} | {{cardData.postDate}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </g-link>
</template>

<script>
import MainBTN from "@/components/MainBTN.vue";
export default {
  name: "cardFull",
  props: ["cardData"],
  components: {
    MainBTN
  }
};
</script>

<style lang="scss" scoped >
.card-full {
  text-decoration: none;

  &-frame {
    margin-bottom: 120px;
    width: 100%;
    display: grid;
    width: 900px;
    grid: auto / 30% 70%;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50px 0 50px 50px;
    -webkit-box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.3);
  }
  &-img {
    height: 250px;
    width: 325px;
    object-fit: cover;
    width: 100%;
    border-radius: 50px 0 0 50px;
  }
  &-content {
    width: 100%;
    background: url("~@/assets/images/primary_bg.png") repeat top left,
      linear-gradient(
        (180deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.45) 100%)
      );
    background-size: 250px;
    padding: 30px;
    border-radius: 0 0 50px 0;
  }
  &-heading {
    font-size: 1.75rem;
    color: #3f61bb;
  }

  &-excerpt {
    margin-top: 15px;
    font-size: 1.2rem;
    font-family: future-pt-book, sans-serif;
    font-weight: 300;
    color: #3f61bb;
  }
  &-taxonomies {
    margin-top: 25px;
    display: grid;
    grid: 52px / repeat(6, auto);
    grid-gap: 10px;
  }
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
    font-size: 0.9rem;
  }
}
</style>
