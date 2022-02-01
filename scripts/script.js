// $ = jQuery's way of naming its stuff.
// $( ... ) = what's inside () is the "object" we are messin with
// .ready() = method of $jQ
// .ready( ... ) = argument/parameter passed to that method
// function(){} in the method is an IIFE = Immediately Invoked F/n Expresson
$(document).ready(function () {
  // alert("page is ready");
  console.log("doc is ready");
  

  $("#dogeHouse").draggable
 
    let wowCount = 0;
    let wowMsg; 
  
   
  $("#dogeDiv").draggable(
    { 
      containment: "#dogeHouse", 
      scroll: false,
      start: function () {
        wowCount++;
        console.log("You're doing the thing! " + "here is wowCount:" + wowCount);

        if(wowCount <= 4) {
          wowMsg = "your wow is lame";
        }
        else if(4 < wowCount <= 8) {
          wowMsg = "your wow is mediocre";
        }
        else{
          wowMsg = "now that's some nice wow";
        }


        $("#wowOutput").text(wowMsg + "(" + wowCount + ")");
    }
  }
  );

  $("#dogeDiv").draggable();

  let userGreeting = "Hello there, "; 

  $("button").click(function () {
    userGreeting += $("#fname").val();

    $("#greetingOutput").text(userGreeting);
  });
});