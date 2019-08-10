<template>
  <div class="card-full">
    <g-image
      :src="cardData.cover_img"
      style="    
      max-width: 100%;
      height: 400px;
      object-fit: cover;"
    />
    <g-link :to="tag.path" v-for="(tag, index) in cardData.tags" :key="index">#{{tag.id}}</g-link>
    <br />
    <g-link :to="type.path" v-for="(type, index) in cardData.types" :key="index">#{{type.id}}</g-link>

    <div>{{cardData.postDate}}</div>
    <div v-if="cardData.updateDate != null ">{{cardData.updateDate}}</div>
    <div v-if="cardData.timeToRead > 1">{{cardData.timeToRead}} mins</div>
    <div v-else>{{cardData.timeToRead}} min</div>
    <div>{{cardData.author}}</div>
    <h3 v-html="cardData.title"></h3>
    <div v-html="cardData.excerpt"></div>
    <g-link :to="cardData.path">Read Post</g-link>
  </div>
</template>

<script>
export default {
  name: "cardFullData",
  props: ["cardData"]
};
</script>

<style lang="scss" scoped>
</style>
