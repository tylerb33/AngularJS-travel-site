"use strict";

//var is important here... if use 'let' the "app" can't be instantiated more than once
var app = angular.module("BookstoreApp", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		// '/' says "when you are at homepage"
		templateUrl: 'partials/book-list.html',
		controller: "bookCtrl"
	}).
	otherwise('/');
});
// routeProvider looks at URL, and displays content based on that