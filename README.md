**angular-vimeo-api-factory** is an angularjs module with a vimeo api factory.

Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))

## Usage

1. Install via [bower](http://bower.io/) :
    1. `bower install --save angular-vimeo-api-factory`
2. Add `jtt_vimeo` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:

    ```html
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-vimeo-api-factory/src/angular-vimeo-api-factory.js"></script>
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
}).success(function(_data){
    //on success
}).error(function (_data) {
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
}).success(function(_data){
    //on success
}).error(function (_data) {
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
}).success(function(_data){
    //on success
}).error(function (_data) {
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
}).success(function(_data){
    //on success
}).error(function (_data) {
    //on error
});
```

## Vimeo JSON API

* docs: https://developer.vimeo.com/api/endpoints/
* api playground: https://developer.vimeo.com/api/playground/


## License

MIT