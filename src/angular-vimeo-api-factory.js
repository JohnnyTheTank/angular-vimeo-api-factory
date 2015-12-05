"use strict";

/**
 @author Jonathan Hornung (https://github.com/JohnnyTheTank)
 @url https://github.com/JohnnyTheTank/angular-vimeo-api-factory
 @licence MIT
 */

angular.module("jtt_vimeo", [])
    .factory('vimeoFactory', ['$http', 'vimeoSearchDataService', function ($http, vimeoSearchDataService) {

        var vimeoFactory = {};

        vimeoFactory.getVideosFromChannel = function (_params) {

            if(!_params.channel) {
                return false;
            }

            var searchData = vimeoSearchDataService.getNew("videosFromChannel", _params);

            return $http({
                    method: 'GET',
                    url: searchData.url,
                    params: searchData.object,
                }
            );
        };

        vimeoFactory.getVideosFromCategory = function (_params) {

            if(!_params.category) {
                return false;
            }

            var searchData = vimeoSearchDataService.getNew("videosFromCategory", _params);

            return $http({
                    method: 'GET',
                    url: searchData.url,
                    params: searchData.object,
                }
            );
        };

        vimeoFactory.getVideosFromTag = function (_params) {

            if(!_params.tag) {
                return false;
            }

            var searchData = vimeoSearchDataService.getNew("videosFromTag", _params);

            return $http({
                    method: 'GET',
                    url: searchData.url,
                    params: searchData.object,
                }
            );
        };

        vimeoFactory.getVideosFromUser = function (_params) {

            if(!_params.user) {
                return false;
            }

            var searchData = vimeoSearchDataService.getNew("videosFromUser", _params);

            return $http({
                    method: 'GET',
                    url: searchData.url,
                    params: searchData.object,
                }
            );
        };

        return vimeoFactory;
    }])
    .service('vimeoSearchDataService', function () {
        this.getApiBaseUrl = function (_params) {
            return "https://api.vimeo.com/";
        };

        this.fillDataInObjectByList = function (_object, _params, _list) {

            angular.forEach(_list, function (value, key) {
                if (typeof _params[value] !== "undefined") {
                    _object.object[value] = _params[value];
                }
            });

            return _object;
        };

        this.getNew = function (_type, _params) {

            var defaultLimit = 20;

            var vimeoSearchData = {
                object: {},
                url: "",
            };

            switch (_type) {
                case "videosFromChannel":
                    vimeoSearchData.object = {
                        access_token: _params.access_token,
                        per_page: _params.per_page || defaultLimit
                    };

                    vimeoSearchData = this.fillDataInObjectByList(vimeoSearchData, _params, [
                        'page', 'query', 'filter', 'filter_embeddable', 'sort', 'direction'
                    ]);

                    vimeoSearchData.url = this.getApiBaseUrl() + "channels/" + _params.channel + "/videos";
                    break;

                case "videosFromCategory":
                    vimeoSearchData.object = {
                        access_token: _params.access_token,
                        per_page: _params.per_page || defaultLimit
                    };

                    vimeoSearchData = this.fillDataInObjectByList(vimeoSearchData, _params, [
                        'page', 'query', 'filter', 'filter_embeddable', 'sort', 'direction'
                    ]);

                    vimeoSearchData.url = this.getApiBaseUrl() + "categories/" + _params.category + "/videos";
                    break;

                case "videosFromTag":
                    vimeoSearchData.object = {
                        access_token: _params.access_token,
                        per_page: _params.per_page || defaultLimit
                    };

                    vimeoSearchData = this.fillDataInObjectByList(vimeoSearchData, _params, [
                        'page', 'query', 'sort', 'direction'
                    ]);

                    vimeoSearchData.url = this.getApiBaseUrl() + "tags/" + _params.tag + "/videos";
                    break;

                case "videosFromUser":
                    vimeoSearchData.object = {
                        access_token: _params.access_token,
                        per_page: _params.per_page || defaultLimit
                    };

                    vimeoSearchData = this.fillDataInObjectByList(vimeoSearchData, _params, [
                        'page', 'query', 'filter', 'filter_embeddable', 'sort', 'direction'
                    ]);

                    vimeoSearchData.url = this.getApiBaseUrl() + "users/" + _params.user + "/videos";
                    break;
            }

            return vimeoSearchData;
        };
    });