
wow = new WOW // Set effect some div
     ({
         boxClass: 'wow',
         animateClass:'animated',
         offset: 10         
     });
        
wow1 = new WOW // Set effect about circle
     ({
         boxClass: 'wow1',
         animateClass:'animated',
         offset: 100
     });
     wow2 = new WOW // Set effect courusel
     ({
         boxClass: 'wow2',
         animateClass:'animated',
         offset: 0         
     });
     
wow2.init(); 
wow.init();
wow1.init();




$(function()
{       
    /*var s = skrollr.init();*/ // ПАРАЛАКС ЭФФЕКТ
    
    
    $('.preloader__img').fadeOut(2000);//  Preloader
    setTimeout(function() {
        $('.preloader').addClass('active').delay(1000).fadeOut(500);          
    }, 800);
     
     
    window.scrollTo(0, 0); 
    window.scrollTo(0, 1); 
          
    setTimeout(function() // Home Transition
    {
       $(".animatedHome1").removeClass("visible-xs hidden-xs").addClass("animated fadeInLeftBig");
       $(".animatedHome2").removeClass("visible-xs hidden-xs").addClass("animated fadeInRightBig");
       $(".animatedHome3").removeClass("visible-xs hidden-xs").addClass("animated bounceInUp");
       $(".animatedHome4").removeClass("visible-xs hidden-xs").addClass("animated fadeInUp");     
    }, 1700);
          
    $(".circleStyle").hover(
      function () 
      {
          $(".cl-effect-16 a").mouseenter();
      },
      function () 
      {
          $(".cl-effect-16 a").mouseleave();
      }
     );
   
    
  $('.navbar-nav li>a').click(function() // Slow top menu link
  {
  var link = $(this).attr('href');
  var posi = $(link).offset().top;
  $('body,html').animate({scrollTop:posi},700);
  });
  
  
  
  /*$('.circleTextStyle').on('scrollSpy:enter', function() 
  {
		$(this).closest(".imgAbout").addClass("wow fadeInDown");
    });*/
    
    
    



$("h3").scrollSpy();
$("h2").scrollSpy();
$("div").scrollSpy();
$('body').scrollspy();

   
$(".portfolioHover").hover(function ()
    {
        $(".portfolioSpan",this).removeClass("portfolioSpanHoverEnd").addClass("portfolioSpanHover");
        $(".portfolioSpan2",this).removeClass("portfolioSpanHoverEnd2").addClass("portfolioSpanHover2");
      },
      function () 
      {
        $(".portfolioSpan",this).removeClass("portfolioSpanHover").addClass("portfolioSpanHoverEnd");
        $(".portfolioSpan2",this).removeClass("portfolioSpanHover2").addClass("portfolioSpanHoverEnd2");
      }
    );
   
    $(".button.buttonPrice").hover(function ()
    {
        $(this).removeClass("buttonPrice").addClass("buttonPriceHover");
        $(this).closest(".priceTextStyle").find("h3").addClass("buttonPriceHover");
      },
      function () 
      {
        $(this).removeClass("buttonPriceHover").addClass("buttonPrice");
        $(this).closest(".priceTextStyle").find("h3").removeClass("buttonPriceHover");
      }
    );
    
    
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus();
});




$('#myCarousel').on('slide.bs.carousel', function ()
{
    
    $("div.carousel-inner div img").css("visibility", "visible");
    $("div.carousel-inner div h3").css("visibility", "visible");
    $("div.carousel-inner div span").css("visibility", "visible");
    
    
 /* wow2 = new WOW // Set effect courusel   // АЛЬТЕРНАТИВА ДИНАМИКИ ТЕКСТА и ФОТОК В КАРУСЕЛИ
     ({
         boxClass: 'wow2',
         animateClass:'animated',
         offset: 0         
     });
     
     wow2.init();  */
    
     });
     
     $("li .button--shikoba").on("click",function()             
    {
        $('.navbar-toggle').trigger('click');
        
    });



});




