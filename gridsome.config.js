// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`



module.exports = {
  siteName: 'CutTheEdge.Dev',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        route: '/Search/:slug',
        refs: {
          // author: 'Author',
          tags: {
            typeName: 'Tags',
            route: '/tags/:id',
            create: true
          },
          types: {
            typeName: 'Types',
            route: '/types/:id',
            create: true
          },
        },
        remark: {
          plugins: [
            ['gridsome-plugin-remark-youtube'],
            '@gridsome/remark-prismjs'
            ['gridsome-plugin-remark-twitter']
          ]
        }
      }
    }
  ]

}
