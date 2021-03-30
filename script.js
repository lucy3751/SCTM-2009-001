$(document).ready(function(){


    // BROCA'S APHASIA - TOGGLE VISIBILITY OF THE ANIMATION

    $("#brocaButton").click(function(){//hide/show animation

        $("#brocaAnimation").toggleClass("hidden");
        $("#brocaButton").toggleClass("hidden");
        
        // $("#brocaAnimation").css("visibility","hidden");

            
    if ($("#brocaAnimation").hasClass("hidden")) {//toggle the buttons to display Hide/Show
        $("#brocaButton").html("Show");
    }else{

        $("#brocaButton").html("Hide");

    }

    });




    // WERNICKE'S APHASIA - TOGGLE VISIBILITY OF THE ANIMATION
    
    $("#wernickeButton").click(function(){//hide/show animation

        $("#wernickeAnimation").toggleClass("hidden");
        $("#wernickeButton").toggleClass("hidden");
        
        // $("#brocaAnimation").css("visibility","hidden");

            
    if ($("#wernickeAnimation").hasClass("hidden")) {//toggle the buttons to display Hide/Show
        $("#wernickeButton").html("Show");
    }else{

        $("#wernickeButton").html("Hide");

    }

    });









console.log("ready")






});