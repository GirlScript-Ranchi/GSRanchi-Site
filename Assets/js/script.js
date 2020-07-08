$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#changecolor');
    var offset = startchange.offset();
    if (startchange.length){
    $(document).scroll(function() { 
        scroll_start = $(document).scrollTop();
        if(scroll_start > offset.top) {
            $(".navbar").css('background-color', '#181818');
        } else {
                $('.navbar').css('background-color', 'transparent');
            }
        });
    }
});