$(
   function(){
      $('#txtbox').append("The page has loaded!");


      // start dots button
      $('#start-dots-btn').click(
         function(event){
            window.elvar= setInterval(
              function(){
               $('#txtbox').append(".");
              }, 20);
	 }
       );


      // stop dots button
      $('#stop-dots-btn').click(
         function(event){
	    clearInterval(window.elvar);
	    return false;
         }
       );


      // mousing around
      $('#mousebox').append("The page has loaded!");
      $('#mousebox').on("mousemove", onMouseOver);



      // ajax button
      $('#ajax-btn').click(
        function(event){
	   $.ajax("http://unixxgroup.com/cgi/formtest.cgi",
	          {success: setContent, type: "GET", dataType: "text"});
        }
       );


   }
);


     var onMouseOver= function(evt){
        var color="f" + evt.pageY + "ff";
        $('#mousebox').css("background-color", color);
        $('#mousebox').text(   evt.type + ": " + evt.pageX + ", " + evt.pageY
	                    + "\n" + "Button: " + evt.which
			    + " Key: " + evt.metaKey
			    + " bgcolor: " + color); 
     }

     function setContent(data,status,jqxhr){
        $('#ajaxbox').text(data);
     }
