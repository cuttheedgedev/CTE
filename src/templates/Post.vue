<template>
  <Layout>
    <div class="page-post">
      <g-image :src="$page.post.cover_img" class="coverIMG" />
      <CardMicro :cardData="$page.post" class="repose-microCard" />
      <h1 class="page-title" v-html="$page.post.title" />

      <div class="card-full-taxonomies">
        <g-link
          class="card-full-taxonomies-type"
          v-for="(type, index) in $page.post.types"
          :key="index"
          :to="type.path"
        >
          <MainBTN :btnText="'#'+type.id +'s'" btnBG="red" />
        </g-link>
        <g-link
          class="card-full-taxonomies-type"
          v-for="(tag, index) in $page.post.tags"
          :key="index"
          :to="tag.path"
        >
          <MainBTN :btnText="'#'+tag.id" />
        </g-link>
      </div>
      <div v-if="$page.post.updateDate != null ">{{$page.post.updateDate}}</div>

      <div class="page-content" v-html="$page.post.content" />
      <!-- <g-link :to="$page.post.path">Read Post</g-link> -->
    </div>

    <div class="chat">
      <vue-disqus shortname="CutTheEdgeDev" :identifier="$page.post.id"></vue-disqus>
    </div>
  </Layout>
</template>

<page-query>
query ($path: String!) {
  post(path: $path) {
      cover_img(blur: 50)
    id
    title
    tags{
        id
        path
        }
    types{
        id
        path
    }
    postDate (format: "Do MMM YYYY")
    updateDate (format: "Do MMM YYYY")
    author
    excerpt
    content
    timeToRead
    path
  }
}
</page-query>

<script>
import CardMicro from "@/components/microComponents/CardMicro.vue";
import MainBTN from "@/components/MainBTN.vue";

import "prismjs/themes/prism.css";

export default {
  components: {
    CardMicro,
    MainBTN
  }
};
</script>


<style lang="scss" >
.coverIMG {
  max-width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 50px;
  -webkit-box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.3);
}

.repose-microCard {
  transform: translateY(-65px);
}

.card-full {
  &-taxonomies {
    margin-top: 25px;
    display: grid;
    grid: 52px / repeat(6, auto);
    grid-gap: 10px;
  }
}

.page {
  &-title {
    margin-top: 69px;
    color: #3f61bb;
  }
  &-content {
    color: #3f61bb;
  }
}

.chat {
  margin-top: 60px;
}

.page-content {
  & p {
    margin: 1.2em;
    font-size: 21px;
    line-height: 23px;
  }
  & pre {
    margin: 1.2em 2.4em;
    background-color: #ffffff82;
    padding: 50px;
    border-radius: 50px;
  }
  & b {
    background-color: #ffffff82;
    padding: 0 5px;
  }
}

@media only screen and (min-width: 1024px) {
  .coverIMG {
    height: 350px;
  }
}

@media only screen and (min-width: 1440px) {
  .coverIMG {
    height: 450px;
  }
}

@media only screen and (min-width: 1920px) {
  .coverIMG {
    height: 550px;
  }
}

@media only screen and (min-width: 2560px) {
  .coverIMG {
    height: 650px;
  }
}
</style>
