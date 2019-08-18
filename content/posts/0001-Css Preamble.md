---
title: Css Preamble
tags: ["css"]
types: ["snippet"]
postDate: 2019-08-18
updateDate: null
author: Night Apple
excerpt: "A simple snippet to help set up your Dummy proof Css."
cover_img: "../images/1/cover.jpg"
---

A simple snippet to help set up your Dummy proof Css.

Midway a project you'd find your containers skipping of page, or exenting into white space on the right side.
This stops all that.

```
//Css Preamble

html,
body {
    box-sizing: border-box;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

img {
    max-width: 100%;
}

```

One could start with importing [Normalize](https://necolas.github.io/normalize.css/).

or you could use our modified stack repo <b> npm i [min.normalize.css](https://github.com/cuttheedgedev/min-normalize.css). </b>

If you have any issues/feedback comment below ❤.
