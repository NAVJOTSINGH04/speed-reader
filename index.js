$(function(){
    //declare variables
    var myArray;
    var inputLength;
    
    //on page load  hide elements we don't need, leave only txt area and start button
    
    $("#new").hide();
    $("#resume").hide();
    $("#pause").hide();
    $("#controls").hide();
    $("#result").hide();
    $("#error").hide();
    //click on start reading
    $("start").click(function(){
        //get text and split into words inside an array
        //\s matches spaces, tabs, new lines,etc and + means one or more
      myArray = $("#userInput").val().split(/\s+/);
        
        //get the number of words
        inputLength = myArray.length;
        
        
        if(inputLength>1){//therre is enough input
            
        }else{//not enough input
            $("#error").show(); 
        }
        
        
        
    });
    
    
    
});