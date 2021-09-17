// TODO: load the dataset 

var attractions = new Array();

fetch("./attractions.json")
.then(response => response.json())
.then(data => {
	attractions = data;
    console.log(attractions);
	filterData();
});

function filterData(category){
	let filtered = attractions;
	 /* filtering by category */
	if (category && category != "all"){
		filtered = filtered.filter(function(i,d){
			return i.Category == category;
		});
	}

    var sorted = filtered.sort(function(a,b){
        return b.Visitors - a.Visitors;
    });

    var top = sorted.filter(function(i,d){
            return d < 5;
        });
    
    renderBarChart(top);
}


// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category

document.querySelector('#attraction-category')
  .addEventListener('change',(event) => {
	filterData(event.target.value);
});