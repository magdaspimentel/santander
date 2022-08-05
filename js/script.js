$(document).ready(function(){

    // NAVBAR MOBILE
    $('.toggle').click(function(){        
        $('.itens').toggleClass('mobile');
        $(this).toggleClass('active');
    });


    // NAVBAR MOBILE CLICK 
    $('header ul li a').on('click', function() {
       $('.itens').toggleClass('mobile');
       $('.toggle').toggleClass('active'); 
    }); 


    // NAVBAR SEPARATORS
    $('.scroll').on('click', function () {
        data = $(this).attr('data');

        $('html, body').animate({
            scrollTop: $('#'+data).offset().top - ($('header').outerHeight()) 
        }, 'slow');      
    });  


    // BENEFICIOS
    $('.category').on('click', function() {
        var dataType = $(this).data('type');
        
        $('.brands').hide();
        $('.'+dataType).show();  

        $(this).closest('nav').find('.category').find('p').removeClass('active');
        $(this).find('p').addClass('active');

        $(this).closest('nav').find('.category').find('.underline').removeClass('visible');
        $(this).find('.underline').addClass('visible');     
    }); 


    // QUIZ
    $('.quiz-image').on('click', function() {

        $(this).closest('.pictures').find('.square').find('.quiz-image').removeClass('border');
        $(this).addClass('border');

    }); 


    $('.question-one .next').on('click', function() {

        $('.question-one').hide();
        $('.question-two').show();

    }); 


    $('.question-two .next').on('click', function() {

        $('.question-two').hide();
        $('.question-three').show();

    }); 


    $('.question-three .next').on('click', function() {

        $('.question-three').hide();
        $('.question-four').show();

    }); 


    // ANIMATE ITENS ON SCROLL  
    $.fn.scrollHide = function(direction, speed){
        if ($(window).width() > 1024) {
            return $(this).each(function(){
               var $windowPosition =  $(window).scrollTop();
               var $windowHeight =  $(window).height();
               var $windowScrollHeightPos = $windowPosition + $windowHeight;
               var objectOffset = $(this).offset();
               var objectOffsetTop = objectOffset.top;
              
               if(!$(this).hasClass("hide")){
                 if (direction == "right") {
                            $(this).css({
                                "opacity"   : 0,
                                "right"     : "100%",
                                "position"  : "relative"
                            });
                 }else {
                            $(this).css({
                                "opacity"   : 0,
                                "right"     : "-100%",
                                "position"  : "relative"
                            });
                        }
                 
                 $(this).addClass("hide");
               }
                   
                 if(!$(this).hasClass("animation-complete")){
                    if($windowScrollHeightPos > objectOffsetTop){
                      $(this).stop().animate({
                        "opacity": 1,
                        "right" : 0
                      },speed).addClass("animation-complete");
                    }
                  }
              
            });
        }    
      };
      
      function callAllMath(){
        $(".boxanimation:even").scrollHide("right", 1000);
         $(".boxanimation:odd").scrollHide("left", 1000);
      }
        
      callAllMath();

      $(window).on("scroll", function(){
          callAllMath();
      });

    
});    