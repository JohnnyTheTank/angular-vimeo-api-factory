var app = angular.module("app", ['jtt_vimeo']);
app.controller('controller', ['$scope', 'vimeoFactory', function($scope, vimeoFactory) {

    var _access_token = '<YOUR_VIMEO_ACCESS_TOKEN>';

    vimeoFactory.getVideosFromChannel({
        channel:"nicetype",
        access_token:_access_token
    }).success(function(_data){
        console.info("videos from channel", _data);
    });

    vimeoFactory.getVideosFromCategory({
        category:"cameratechniques",
        //per_page:2,
        access_token:_access_token
    }).success(function(_data){
        console.info("videos from category", _data);
    });

    vimeoFactory.getVideosFromTag({
        tag:"fcbayern",
        per_page:2,
        access_token:_access_token
    }).success(function(_data){
        console.info("videos from tag", _data);
    });

    vimeoFactory.getVideosFromUser({
        user:"alexanderengel",
        per_page:2,
        access_token:_access_token
    }).success(function(_data){
        console.info("videos from user", _data);
    });

}]);
