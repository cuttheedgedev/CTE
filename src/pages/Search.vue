<template>
  <layout>
    <div class="Search">
      <section class="section-1">
        <PostLists />
      </section>
      <section class="search">
        <!-- <div class="seach-bar"></div> -->
        <div class="seach-cards">
          <CardFull
            class="card-full"
            v-for="(edge, index) in  $static.allPost.edges"
            :key="index"
            :cardData="edge.node"
          />
        </div>
      </section>
    </div>
    <!-- <Pager :info="$page.allPost.pageInfo" linkClass="pager" /> -->
  </layout>
</template>
<script>
import PostLists from "@/components/microComponents/PostLists.vue";
import CardFull from "@/components/microComponents/CardFull.vue";

import { Pager } from "gridsome";

export default {
  name: "Search",
  components: {
    PostLists,
    CardFull,
    Pager
  }
};
</script>



<static-query>
query ($page: Int) {
  allPost (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        excerpt
        postDate (format: "MMMM Do, YYYY")	
        tags {
          id
          path
        }
        types {
          id
          path
        }
        timeToRead
        path
        cover_img ( blur: 60)
        author
      }
    }
  }
}
</static-query>


<style lang="scss" scoped>
.search {
  margin-top: 30px;
}
</style>
