<template>
  <Layout>
    <h1>{{ $page.tost.title }}</h1>
    <ul>
      <li v-for="edge in $page.test.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>

</page-query>