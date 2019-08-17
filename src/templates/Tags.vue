<template>
  <Layout>
    <h1 class="template-header blue">#{{$page.tags.title}}</h1>
    <CardFull
      class="card-full"
      v-for="(edge, index) in  $page.tags.belongsTo.edges"
      :key="index"
      :cardData="edge.node"
    />
  </Layout>
</template>

<page-query>
query ($id: String!) {
  tags (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Post {
            				id
        cover_img(blur: 50)
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
      
        path
          }
        }
      }
    }
  }
}

</page-query>

<script>
import CardFull from "@/components/microComponents/CardFull.vue";
export default {
  name: "Tag",
  components: {
    CardFull
  }
};
</script>

<style lang="scss" scoped>
</style>
