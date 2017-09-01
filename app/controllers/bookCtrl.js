"use strict";

console.log ("bookCtrl");

app.controller("bookCtrl", function($scope, bookFactory) {

	bookFactory.getBooks()
	.then(function(itemCollection) {
		$scope.books = itemCollection;
		console.log ("books", $scope.books);
	});

});