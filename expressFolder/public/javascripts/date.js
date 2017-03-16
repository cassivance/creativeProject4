$( document ).ready(function() {
    console.log( "ready!" );

$("#searchButton").click(function (e) {
   e.preventDefault();
	let year = 0000; 
  console.log("Click worked");
	if($('#month').val() > 3)
	{
        	year = 2017;
	}
	else if($('#month').val() == 3)
	{
           if($('#day').val() >= 16)
		{
		  year = 2017;
		  console.log(year);
		}	
	   else{
		year = 2018;
		}	
	}
	else{
	 year = 2018;
	}
	console.log(year + $('#month').val() + $('#day').val());
	//let searchThis = ($('#searchWord').val().replace(" ", "_"));
    var wordURL = "/yourEvent?q=" + year  + $('#month').val() + $('#day').val();
     $.ajax({
	url: wordURL,
	dataType: "text",
	success: function(data){
	  $('#countdown').text(data);
	}
});

});

});
