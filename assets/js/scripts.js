$(document).ready(function () {


//Mobile menu 
$('.nav-icon').click(function(){
  $('.menu ul').slideToggle();
  return false;
});


  //baner owlCarousel
  $(".banners").owlCarousel({
    items: 1,
    dots: true,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
  });
  //works owlCarousel
  $(".works").owlCarousel({
    items: 3,
    margin: 30,
    dots: false,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive:{
          0:{
            items: 1,
          },
          768:{
            items: 2,
          },
          991:{
            items: 3,
          }
    }
  });
  //magnific Popup
  $(".work-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  //Testimonals owlCarousel
  $(".testimonials-item").owlCarousel({
    items: 1,
    margin: 30,
    dots: true,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
  });
  //company experience Pie-progress
  $(".pie_progress").asPieProgress({
    namespace: "pie_progress",
    speed: 100,
  });
  $(".pie_progress").asPieProgress("start");
  $(".pie_progress").on("click", function () {
    $(".pie_progress").asPieProgress("go", "0%");
  });

  //Company experience CounterUp
  $(".counts").counterUp({
    time: 4000,
  });
  //Back to top
  $(".back-to-top").click(function () {
    $("body,html").animate({
        scrollTop: 0,
      },
      3000
    );
    return false;
  });


  //blog single post Temp show work area Carousel
  $(".single-image-view").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    autoplay: false,
    autoplayTimeout: 2000,
  });



  //portfolio gallery MixItUp
  var container = '.gallery-view';
  var mixer = mixitup(container, {
    animation: {
      effects: 'rotateY(-25deg)',
      perspectiveDistance: '2000px'
    }
  });


  //portfolio single image view Carousel
  $(".single-image-view").owlCarousel({
    items: 1,
    margin: 30,
    dots: false,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
  });

});
//window function
$(window).scroll(function () {
  var scrollvalue = $(this).scrollTop();

  if (scrollvalue > 600) {
    $(".header-area").addClass("fiexdHeader");
  } else {
    $(".header-area").removeClass("fiexdHeader");
  }
});