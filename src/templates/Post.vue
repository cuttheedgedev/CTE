<template>
  <Layout>
    <div class="page-post">
      <g-image
        :src="$page.post.cover_img"
        style="    
      max-width: 100%;
      height: 400px;
      object-fit: cover;"
      />
      <h3 v-html="$page.post.title"></h3>
      <g-link :to="tag.path" v-for="(tag, index) in $page.post.tags" :key="index">#{{tag.id}}</g-link>
      <br />
      <g-link :to="type.path" v-for="(type, index) in $page.post.types" :key="index">#{{type.id}}</g-link>

      <div>{{$page.post.postDate}}</div>
      <div v-if="$page.post.updateDate != null ">{{$page.post.updateDate}}</div>
      <div v-if="$page.post.timeToRead > 1">{{$page.post.timeToRead}} mins</div>
      <div v-else>{{$page.post.timeToRead}} min</div>
      <!-- <div>{{$page.post.author}}</div> -->
      <div v-html="$page.post.content"></div>
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