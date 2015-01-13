(function($){
  $(function(){
      
    $('.front').fadeTo(0, 0).fadeTo(2000, 1);
      
    $(".link-button").mouseenter( function() {
        if ($(window).width() > 600) {
            $(this).find(".button-content-hvr").animate({
                top: -1*$(".button-content").height()
            }, 250, 'swing');
        }
    });

    $(".link-button").mouseleave( function() {
        if ($(window).width() > 600) {
            $(this).find(".button-content-hvr").animate({
                top: "0px"
            }, 250, 'swing');
        }
    });
      
    var height = $(window).height(),
        width = $(window).width(),
        limit = height,
        $flipper = $('.flipper'),
        $logo = $('#logo'),
        $back = $('.back'),
        degree,
        hidden = $('.invisible').fadeTo(0, 0);

    $(window).on('scroll', function() {
       var st = $(this).scrollTop();
        
       if (st <= limit) {
           degree = st/limit * 180;
           $flipper.css('transform', 'rotateY(' + degree + 'deg)');
           $logo.css({ 'opacity' : (1 - st/limit) });
           $back.css({ 'opacity' : (st/limit) });
       }
        
        hidden.each(function(i) {
           bottomOfElement = $(this).offset().top + $(this).height();
           bottomOfPage = $(window).scrollTop() + $(window).height();
           if (bottomOfElement < bottomOfPage) $(this).fadeTo(1000,1);
        });
    });
      
    $(window).resize(function() {
        height = $(window).height();
        width = $(window).width();
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space