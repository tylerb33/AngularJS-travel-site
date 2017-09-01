"use strict";
console.log ("bookFactory");


// $q is Angular way of doing a promise. $http is way to make AJAX calls
// must use 'function' way of writing the function... not fat arrow
app.factory("bookFactory", function($q, $http){
	let getBooks = () => {
		let books = [];
		return $q ((resolve, reject) => {
			$http.get("./data/guides.json")
			.then((itemObject) => {
				let itemCollection = itemObject.data;
				console.log ("itemCollection1", itemObject.data);
				itemCollection = JSON.stringify(itemCollection);
				itemCollection = JSON.parse(itemCollection);
				resolve(itemCollection.guides);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
//like Browswerify, the return below is exporting the needed functions
	return {getBooks};
});