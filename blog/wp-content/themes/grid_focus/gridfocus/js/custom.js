$(document).ready(function() {
// header jquery
  var header = $("header");
  // var owl = $('.testimonial-slider');
  // owl.owlCarousel({
    // margin: 10,
	// autoplay: true,
    // nav: false,
    // loop: true,
    // pagination:true,     
	// items: 1
  // });
//   
  // var owl = $('.bottom-banner');
  // owl.owlCarousel({
    // margin: 8,
	// autoplay: false,
    // nav: false,
    // loop: true,
    // nav: true,
    // pagination:false,
    // responsiveClass:true,
    // responsive:{
        // 0:{
            // items:1,
            // nav:true
        // },
        // 600:{
            // items:3,
            // nav:false
        // },
        // 1000:{
            // items:4,
            // nav:true
        // }
    // }
  // });
      
  $(function() {   
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();    
        if (scroll >= 80) {
			if (header.hasClass("open-menu"))
			{
				header.removeClass("white-header");
			}
			else
			{
				header.removeClass('blnk-header').addClass("white-header");
			}
        } else {
            header.removeClass("white-header").addClass('blnk-header');
        }
    });
});

//open contact-form

// $(".contact-number").click(function(){
    // $(".contact-form-popup").toggleClass("show"); 
    // $("header").toggleClass("show-menu"); 
    // $("body").toggleClass("fixed");
    // updateHeader(); 
// });
// 
// $(".open-form").click(function(){
    // $(".contact-form-popup").toggleClass("show"); 
    // $("header").toggleClass("show-menu"); 
    // $("body").toggleClass("fixed");
    // updateHeader(); 
// });
//         
// $(".nav-menu-close").click(function(){
    // $(".contact-form-popup").toggleClass("show"); 
    // $("body").toggleClass("fixed"); 
    // $("header").toggleClass("show-menu");
   	// updateHeader();
// });
// 
// function updateHeader(){
	// var scroll = $(window).scrollTop();
    // if (scroll >= 80) {
		// if (header.hasClass("show-menu"))
		// {
			// header.removeClass("white-header").addClass("blnk-header");
		// }
		// else
		// {
			// header.removeClass('blnk-header').addClass("white-header");
		// }
    // } 
// };
    
// /open contact-form



// sidemenu open
    $(".nav-menu").click(function(){
        $(".nav-menu").toggleClass("open");
        $("header").toggleClass("open-menu");
        $(".full-screen-menu").toggleClass("show");      
        var scroll = $(window).scrollTop();
        if (scroll >= 80) {
			if (header.hasClass("open-menu"))
			{
				header.removeClass("white-header").addClass("blnk-header");
			}
			else
			{
				header.removeClass('blnk-header').addClass("white-header");
			}
        } 
    });   
});

$(document).ready(function() { 
	var scroll = $(window).scrollTop();
	var header = $("header");
	if (scroll >= 80) {			
		header.removeClass("blnk-header").addClass("white-header");
	}
	else
	{
		header.removeClass('white-header').addClass("blnk-header");
	}	 
});


// $(function() {
  // $('#slides').slidesjs({
    // width: 864,
    // height: 459,
	 // play: {
      // auto: true,
	  // interval: 3000,
    // },
// 	
    // navigation: false
  // });
// });
