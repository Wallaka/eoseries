"use strict";

angular.module("eoseriesApp").config(function($stateProvider) {
  $stateProvider.state("show_edit", {
    url: "/shows/edit/:show_id",
    templateUrl: "app/shows/show_edit/edit.html",
    controller: "ShowEditCtrl"
  });
});
