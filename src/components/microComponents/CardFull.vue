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
            v-for="(type, index) in cardData.types"
            :key="index"
            :to="type.path"
          >
            <MainBTN :btnText="'#'+type.id +'s'" btnBG="red" />
          </g-link>
          <g-link
            class="card-full-taxonomies-tag"
            v-for="(tag, index) in cardData.tags"
            :key="index"
            :to="tag.path"
          >
            <MainBTN :btnText="'#'+tag.id" />
          </g-link>
        </div>
        <CardMicro :cardData="cardData" />
      </div>
    </div>
  </g-link>
</template>

<script>
import MainBTN from "@/components/MainBTN.vue";
import CardMicro from "@/components/microComponents/CardMicro.vue";

export default {
  name: "cardFull",
  props: ["cardData"],
  components: {
    MainBTN,
    CardMicro
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
    width: 93%;
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
}
</style>
