<template>
  <Layout>
    <section class="hero">
      <div class="hero-content">
        <h1 class="blue">
          We Experiment
          <br />with Code
        </h1>
        <p class="blue txt">
          Building a free library of
          <br />advance web design experiments & tutorials.
        </p>
        <div class="btn-holder">
          <g-link to>
            <MainBTN btnText="Start Learning" />
          </g-link>
        </div>
      </div>
      <div class="hero-dataPopulation">
        <div class="hero-dataPopulation-set">
          <div class="hero-dataPopulation-number">20</div>
          <div class="hero-dataPopulation-title">Guides</div>
        </div>
        <div class="hero-dataPopulation-set">
          <div class="hero-dataPopulation-number">20</div>
          <div class="hero-dataPopulation-title">Articles</div>
        </div>
        <div class="hero-dataPopulation-set">
          <div class="hero-dataPopulation-number">20</div>
          <div class="hero-dataPopulation-title">Videos</div>
        </div>
      </div>
      <div class="hero-img">
        <g-image alt="image" src="@/assets/images/hero_bg.png" />
      </div>
    </section>
    <section class="section-2">
      <div class="section-2-title">
        <h1 class="blue right">
          We Love Playing
          <br />with with all things Code
        </h1>
      </div>
      <PostLists class="red" />
      <div class="section-2-shout">
        <h1 class="blue">Code all day, every day!</h1>
      </div>
    </section>
    <section class="section-3">
      <div class="section-3-title">
        <h1 class="blue">Recent Posts</h1>
        <p class="blue txt">Some of our more recent contet.</p>
      </div>
      <div class="section-3-postRow">
        <CardSmall />
      </div>
      <div class="section-3-slider">
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
import MainBTN from "@/components/MainBTN.vue";

export default {
  components: {
    PostLists,
    CardSmall,
    MainBTN
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style lang="scss">
$mainC: #3f61bb;
$contrastC: #c34223;
.home-links a {
  margin-right: 1rem;
}

.hero-img {
  position: absolute;
  top: 57px;
  right: 27px;
  z-index: 5;
  width: 60%;
  max-width: 900px;
}

.hero {
  height: calc(100vh - 120px);
  padding: 15% 0 0 0;
}
.hero-dataPopulation {
  margin-top: 27px;
  margin-left: 60px;
  width: 60%;
  display: grid;
  grid: auto / repeat(4, 1fr);
  grid-gap: 20px;

  &-number {
    font-size: 3.6rem;
    font-family: futura-pt-bold, sans-serif;
    font-weight: 900;
    color: $mainC;
  }
  &-title {
    font-size: 2rem;
    font-family: futura-pt-bold, sans-serif;
    font-weight: 500;
    color: $mainC;
  }
}

.section-2-shout {
  margin-top: 20px;
}

.section-3 {
  margin-top: 60px;
}

.section-3-postRow {
  margin-top: 30px;
}
</style>
