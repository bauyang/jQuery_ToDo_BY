$('h2').css('color', "blue");

var input = $('#input');
var btn = $('#btn');
var myUL = $('#myUL');

btn.click(function(){
    var newInput = '<li>' + input.val() + '</li>';
    myUL.append(newInput); // add to end of list
    input.val("");  //clear input
});

myUL.click(function(text){
    var target = $(text.target);
    if (target.is("li")){
        target.css('text-decoration', 'line-through');
        
        setTimeout(function(){
            target.remove(); 
        }, 1000)
    }
});

//Enter button
input.keyup(function(key){
    
    if (key.keyCode == 13){
        btn.click();
    }
});