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
            v-for="(edge, index) in  $page.allPost.edges"
            :key="index"
            :cardData="edge.node"
          />
        </div>
      </section>
    </div>
    <Pager :info="$page.allPost.pageInfo" linkClass="pager" />
  </layout>
</template>
<script>
import PostLists from "@/components/microComponents/PostLists.vue";
import CardFull from "@/components/microComponents/CardFull.vue";

import { Pager } from "gridsome";

export default {
  components: {
    PostLists,
    CardFull,
    Pager
  }
};
</script>



<page-query>
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
</page-query>


<style lang="scss" scoped>
.search {
  margin-top: 30px;
}

.pager {
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  padding: 40px 20px;
}
</style>
