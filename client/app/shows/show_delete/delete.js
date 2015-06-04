"use strict";

angular.module("eoseriesApp").config(function($stateProvider) {
  $stateProvider.state("show_delete", {
    url: "/shows/delete",
    templateUrl: "app/shows/show_delete/delete.html",
    controller: "ShowDeleteCtrl"
  });
});
