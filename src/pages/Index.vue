<template>
  <Layout>
    <section class="hero">
      <div class="hero-img">
        <g-image alt="Example image" src="~/favicon.png" width="135" />
      </div>
      <div class="hero-content">
        <h1 class="blue">We Experiment with Code</h1>
        <p class="blue">
          Building a free library of
          <br />advance web design experiments & tutorials.
        </p>
        <button>Start Learning</button>
      </div>
      <div class="hero-dataPopulation">
        <div class="hero-dataPopulation-nuber"></div>
        <div class="hero-dataPopulation-title"></div>
      </div>
    </section>
    <section class="section-2">
      <div class="section-2-title">
        <h1 class="blue">We Love Playing with with all things Code</h1>
      </div>
      <PostLists />
      <div class="section-2-shout">
        <h1 class="blue">Code all day, every day!</h1>
      </div>
    </section>
    <section class="section-3">
      <div class="section-3-title">
        <h1 class="blue">Recent Posts</h1>
        <p class="blue">Some of our more recent contet.</p>
      </div>
      <div class="section-3-postRow">
        <CardSmall />
      </div>
      <div class="section-3-paggination">
        <div class="dot-1"></div>
        <div class="dot"></div>
        <div class="dot-last"></div>
      </div>
    </section>
  </Layout>
</template>


<script>
import PostLists from "@/components/microComponents/PostLists.vue";
import CardSmall from "@/components/microComponents/CardSmall.vue";

export default {
  components: {
    PostLists,
    CardSmall
  },

  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
