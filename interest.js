

//creating request
var xhr = new XMLHttpRequest();
var responseObject;

//when response is loaded
xhr.onload = function() {

	
		localStorage.setItem("response", xhr.responseText);
		responseObject = JSON.parse(xhr.responseText);
		//build up a string with our content(Can also use DOM Manupilation)

		var newContent = '';
		for(var i = 0; i < responseObject.events.length; i++)
		{
			//creating opening div

			newContent += '<li><a class="card">';

			newContent += '<div class="part1">';

			newContent += responseObject.events[i].section + '</div>';

			newContent += '<div class="part2"> <div style="font-size: 18px;">';

			newContent += responseObject.events[i].name + '</div>';

			newContent += '<p>' + responseObject.events[i].subsection + '</p>';

			newContent += '<p>' + responseObject.events[i].skills + '</p>';

			newContent += '</div>';

			newContent += '<div class="part3"><div class="inside1">';

			newContent += responseObject.events[i].date + '</br>';
 
			newContent += responseObject.events[i].year +'</div>';

			newContent += '<div class="inside2">';

			newContent += '<div class="dest" style="float: left; padding: 1px;">';

			newContent += '<img src="' + responseObject.events[i].dest + '"width="22px" height="25px">';

            newContent += '</div>' + responseObject.events[i].add +'</div>';

			newContent += '</div>';

			newContent += "<div class='container'><button data-text-swap='REMOVE' type='button' onclick='saveOrRemoveCookie(\"" + responseObject.events[i].id + "\")' id='front' class='front'>SAVE</button></div></a></li>";
        }

		document.getElementById('col1').innerHTML = newContent;
};

   //save or remove data from cookies

	function saveOrRemoveCookie (id) {

		var idButton = id - 1;
        
        var button = document.querySelectorAll(".front")[idButton];

		var listOfIDs = [];

		if (Cookies.get('saved')!=null && Cookies.get('saved')!="") listOfIDs = Cookies.get('saved').split("_"); // Getting the current list of cookies

		var index = $.inArray(id, listOfIDs);
		if(index==-1) {
			listOfIDs.push(id);
			Cookies.set('saved', listOfIDs.join("_"));
			button.setAttribute("data-text-original", button.innerHTML);
		    button.innerHTML = button.getAttribute("data-text-swap");


		} else {
			listOfIDs.splice(index, 1);
			Cookies.set('saved', listOfIDs.join("_"));
		    button.innerHTML = button.getAttribute("data-text-original");

		}
	}
	
   // }
	//}

//Prepare the request
xhr.open('GET', 'data.json', true);

//send the request
xhr.send(null);

$("#mybtn").click(function(){
	window.location.href="Saved.html";
});