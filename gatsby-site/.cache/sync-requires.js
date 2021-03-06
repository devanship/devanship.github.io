const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/devanshipatel/Desktop/CodeProjs/webpage/gatsby-site/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/devanshipatel/Desktop/CodeProjs/webpage/gatsby-site/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/devanshipatel/Desktop/CodeProjs/webpage/gatsby-site/src/pages/page-2.js")))
}

