$(function() {
	console.log('DOM Loaded');
	var movies = [];
	var movies1 = [];
	var myList = document.getElementById("movie_list");
	// returns a promise
	function firstPromise() {
		let promise = new Promise((resolve, reject) => {
			resolve($.ajax({
				url:'https://api.themoviedb.org/4/list/2?page=1&api_key=10959c2fccc6991f02c2c58dafa3ab1c',
				type: 'GET',
				data: {
					api_key:'10959c2fccc6991f02c2c58dafa3ab1c',
					page : 1 //replace with actual data as requested by the API
				},
			}).then((data) => {
				//You can do something with the data here
				
				for(i=0;i<data["results"].length;i++)
				movies.push(JSON.stringify(data["results"][i]["original_title"]));
				for(i=0;i<movies.length;i++){
				  console.log(movies[i]);
				  var a = movies[i];
				  var li = document.createElement("li");
				  li.appendChild(document.createTextNode(a));
				  myList.appendChild(li);
				  li.style.cursor = "pointer";
				  li.addEventListener("click",function(){
				  	//li.body.style.textColor = "red";
				  	this.style.color = "red";
				  	
				  	secondPromise($( this ).index(),this);
				  })
				}
				
			}));
		});
		return promise;
	}
	firstPromise();

	// create another promise returning function here for the other api call

	function secondPromise(i,a) {

		let promise = new Promise((resolve, reject) => {
			resolve($.ajax({
				url:'https://api.themoviedb.org/4/list/2?page=1&api_key=10959c2fccc6991f02c2c58dafa3ab1c',
				type: 'GET',
				data: {
					api_key:'10959c2fccc6991f02c2c58dafa3ab1c',
					page : 1 //replace with actual data as requested by the API
				},
			}).then((data) => {
				//You can do something with the data here
				
				for(j=0;j<data["results"].length;j++)
				movies1.push(JSON.stringify(data["results"][j]["overview"]));
				/*for(i=0;i<movies1.length;i++){
				
				  
				}*/
				str=movies1[i];
				alert(str);
				a.style.color = "black";
			}));
		});
		return promise;
	}
	//secondPromise();
	

	// Chain the promises for first load

	// When the load is complete, fill the data in the DOM
	// READ : Javascript DOM Apis

	// On every click on the movie in the sidebar, load data in the main div (reusing second promise maybe?)
	// READ : Event handling, onclick property of DOM Elements
});