function gridFunction(){  
    $(".box").remove();
    var pixelDensity = $('input[id="pixels"]').val();
    var gridSize = 640;
    var nboxes = pixelDensity**2;
    var boxSize = 640/pixelDensity;
    for (var i = 1; i<=nboxes;i++){
    $(".container").append($('<div class="box" style="width:' +boxSize+ 'px; height:' +boxSize+ 'px; "></div>'));
    }
                        };

$(document).ready(function(){
    var color = "#000"
    
    $('.color').click(function() {
    color = $(this).css('backgroundColor');
    })

    gridFunction();
    $(".box").on("mouseenter",function(){
    $(this).css("background-color", color); 
    });
    
    $("#reset").on('click',function(){
        if($('input[id="pixels"]').val()<=100 && $('input[id="pixels"]').val()>0){
            gridFunction();
            $(".box").on("mouseenter",function(){
            $(this).css("background-color", color); 
        })}else{
               alert("Please choose a pixel density between 1 and 100");
            };
    });
    
    
    
});





