import riot from "node_modules/riot/riot";

let HelloMessage = riot.tag('my-greet', 'Hello { name }', function(opts) {
  this.name = "World";
});

riot.mount("my-greet"); //or riot.mount(HelloMessage);
