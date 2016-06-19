**angular-vimeo-api-factory** is an angularjs module with a vimeo api factory.

[![npm version](https://badge.fury.io/js/angular-vimeo-api-factory.svg)](https://badge.fury.io/js/angular-vimeo-api-factory)
[![Bower version](https://badge.fury.io/bo/angular-vimeo-api-factory.svg)](https://badge.fury.io/bo/angular-vimeo-api-factory)

Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))

## Usage

1. Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:
    1. `bower install --save angular-vimeo-api-factory`
    2. `npm install --save angular-vimeo-api-factory`
    3. download [angular-vimeo-api-factory.zip](https://github.com/JohnnyTheTank/angular-vimeo-api-factory/zipball/master)
2. Add `jtt_vimeo` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:
    ```html
    <script src="bower_components/angular-vimeo-api-factory/dist/angular-vimeo-api-factory.min.js"></script>
    ```
    2. When using npm:
    ```html
    <script src="node_modules/angular-vimeo-api-factory/dist/angular-vimeo-api-factory.min.js"></script>
    ```
    3. when using downloaded files
    ```html
    <script src="angular-vimeo-api-factory.min.js"></script>
    ```
4. Use the factory `vimeoFactory`


### factory methods

#### getVideos

##### getVideosFromChannel
```js
// parameters: https://developer.vimeo.com/api/endpoints/channels#/{channel_id}/videos
vimeoFactory.getVideosFromChannel({
    channel:"<CHANNEL_NAME>",
    per_page:"<ITEMS_PER_PAGE>", // (optional) valid values: 1-50 | default: 25
    page:"<PAGE_NUMBER>", // (optional)
    query:"<QUERY>", // (optional)
    filter:"<FILTER>", // (optional)
    filter_embeddable:"<FILTER_EMBEDDABLE>", // (optional)
    sort:"<SORT>", // (optional)
    direction:"<DIRECTION>", // (optional)
    access_token:"<ACCESS_TOKEN>"
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

##### getVideosFromUser
```js
// parameters: https://developer.vimeo.com/api/endpoints/users#/{user_id}/videos
vimeoFactory.getVideosFromUser({
    user:"<USER_NAME>",
    per_page:"<ITEMS_PER_PAGE>", // (optional) valid values: 1-50 | default: 25
    page:"<PAGE_NUMBER>", // (optional)
    query:"<QUERY>", // (optional)
    filter:"<FILTER>", // (optional)
    filter_embeddable:"<FILTER_EMBEDDABLE>", // (optional)
    sort:"<SORT>", // (optional)
    direction:"<DIRECTION>", // (optional)
    access_token:"<ACCESS_TOKEN>"
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

##### getVideosFromCategory
```js
// parameters: https://developer.vimeo.com/api/endpoints/categories#/{category}/videos
vimeoFactory.getVideosFromCategory({
    category:"<CATEGORY_NAME>",
    per_page:"<ITEMS_PER_PAGE>", // (optional) valid values: 1-50 | default: 25
    page:"<PAGE_NUMBER>", // (optional)
    query:"<QUERY>", // (optional)
    filter:"<FILTER>", // (optional)
    filter_embeddable:"<FILTER_EMBEDDABLE>", // (optional)
    sort:"<SORT>", // (optional)
    direction:"<DIRECTION>", // (optional)
    access_token:"<ACCESS_TOKEN>"
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

##### getVideosFromTag
```js
// parameters: https://developer.vimeo.com/api/endpoints/tags#/{word}/videos
vimeoFactory.getVideosFromTag({
    tag:"<TAG_NAME>",
    per_page:"<ITEMS_PER_PAGE>", // (optional) valid values: 1-50 | default: 25
    page:"<PAGE_NUMBER>", // (optional)
    query:"<QUERY>", // (optional)
    sort:"<SORT>", // (optional)
    direction:"<DIRECTION>", // (optional)
    access_token:"<ACCESS_TOKEN>"
}).then(function(_data){
    //on success
}).catch(function (_data) {
    //on error
});
```

## Vimeo JSON API

* docs: https://developer.vimeo.com/api/endpoints/
* api playground: https://developer.vimeo.com/api/playground/

## More angular-api-factories
[bandsintown](https://github.com/JohnnyTheTank/angular-bandsintown-api-factory) - [dailymotion](https://github.com/JohnnyTheTank/angular-dailymotion-api-factory) - [facebook](https://github.com/JohnnyTheTank/angular-facebook-api-factory) - [flickr](https://github.com/JohnnyTheTank/angular-flickr-api-factory) - [github](https://github.com/JohnnyTheTank/angular-github-api-factory) - [openweathermap](https://github.com/JohnnyTheTank/angular-openweathermap-api-factory) - [tumblr](https://github.com/JohnnyTheTank/angular-tumblr-api-factory) - **vimeo** - [wikipedia](https://github.com/JohnnyTheTank/angular-wikipedia-api-factory) - [youtube](https://github.com/JohnnyTheTank/angular-youtube-api-factory)

## License

MIT