var app = angular.module("app", ['jtt_vimeo']);
app.controller('controller', ['$scope', 'vimeoFactory', function($scope, vimeoFactory) {

    var _acces_token = "<YOUR_VIMEO_ACCESS_TOKEN>";

    vimeoFactory.getVideosFromChannel({
        channel:"nicetype",
        per_page:2,
        access_token:_acces_token
    }).success(function(_data){
        console.log("videos from channel");
        console.log(_data);
    });

    vimeoFactory.getVideosFromCategory({
        category:"cameratechniques",
        per_page:2,
        access_token:_acces_token
    }).success(function(_data){
        console.log("videos from category");
        console.log(_data);
    });

    vimeoFactory.getVideosFromTag({
        tag:"fcbayern",
        per_page:2,
        access_token:_acces_token
    }).success(function(_data){
        console.log("videos from tag");
        console.log(_data);
    });

    vimeoFactory.getVideosFromUser({
        user:"alexanderengel",
        per_page:2,
        access_token:_acces_token
    }).success(function(_data){
        console.log("videos from user");
        console.log(_data);
    });

}]);
