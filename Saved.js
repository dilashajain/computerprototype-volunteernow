
//called when Saved is clicked

$("document").ready(function(){
	var listOfIDs = [];

//getting  stored cookies
	var retrivedContent = '';
	if (Cookies.get('saved')!=null && Cookies.get('saved')!="") listOfIDs = Cookies.get('saved').split("_");

	$.each(listOfIDs, function(index, value){
		$.each(JSON.parse(localStorage.getItem("response")).events, function(i,v) {
			if ((v.id + "") == value) {
				// Retrieve 'v'
				// Building HTML here using the 'v'

				retrivedContent += '<li><div class="box"><div class="part1">' + v.section + '</div><div class="part2"><p style="font-size: 18px;">';

				retrivedContent += v.name + '</p>';

				retrivedContent += v.subsection + '<br>';

				retrivedContent += v.skills + '</div>'

                retrivedContent += '<div class="part3"><div class="inside1">';

				retrivedContent += v.date + '</br>';

				retrivedContent += v.year +'</div>';

				retrivedContent += '<div class="inside2">';

				retrivedContent += '<div class="dest" style="float: left; padding: 1px;">';

				retrivedContent += '<img src="' + v.dest + '"width="22px" height="25px">';

		        retrivedContent += '</div>' + v.add +'</div></div>';

				retrivedContent += '<div class="container"><div class="front">REMOVE</div></div></div></li>';


			}
		});

	});

//adding the string to the div tag (Saved.html)
	document.getElementById('col2').innerHTML = retrivedContent;
});


$("#mybtn2").click(function(){
	window.location.href="interest.html";
});
