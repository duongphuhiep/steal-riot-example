# steal-riot-example

Sample project using [stealjs](http://stealjs.com) and [riotjs](https://muut.com/riotjs/) together.

 Clone this repo and run 

    bower install
    npm install live-server
    npm start

* [`live-server`](https://www.npmjs.com/package/live-server) creates a http server with 0-configuration
* `npm start` starts the [`live-server`](https://www.npmjs.com/package/live-server) and run the  browser `index.html`.

##Notes

* [`gen/my-greet.js`](/gen/my-greet.js) is generated from [`my-greet.tag`](/my-greet.tag):
```
    riot my-greet.tag gen
```
* [stealjs](http://stealjs.com) can discover dependencies hieararchy from both `package.json` (npm) and `bower.json`. The dependencies hierarchy of npm is often much bigger than bower, so I recommend to use bower over npm on a frontend project.