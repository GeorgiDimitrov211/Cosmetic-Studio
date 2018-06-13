$(document).ready(function(){
  $('#enerpeelBrandPage, #gatineauPage, #himichenPage, #homeBox1Page, #massagesPage, #medik8Page, #eyelashesPage, #mikrodermaobrazioPage, #pochistvanePage, #therapiesPQPage').append('<img id="toTop" src="./assets/images/Icons/upArrow.png"</img>');
  if($('#toTop').length > 0) {
    $(window).scroll(function () {
      let toTop = $('#toTop');
      let toTopBottom = toTop.offset().top + toTop.height();
      let footerStart = $('footer').offset();
      // console.log(footerStart.top, toTopBottom)
      if ($(this).scrollTop() != 0 ) {
        toTop.fadeIn();
      } else {
        toTop.fadeOut();
      }
    }); 
    $(toTop).click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  }
  
  $('.testimonials-slick').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000
});

$('.products-slick').slick({
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
  
  // animation for the two headers
  let lastScrollTop = 0;
  let header = $('#header');
  $(window).scroll(function(event){
    let scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop){
      if(Modernizr.mq('(min-width: 992px)')){
        header.fadeOut();
      } 
    } else {
      if(Modernizr.mq('(min-width: 992px)')){
        header.fadeIn();
      }
    }
    lastScrollTop = scrollTop;
  });
  
  //-------------------- Dropdown menu --------------------

  // Define the needed variables
  let cross = $('#mobileHeader #mobHead .cross');
  let hamburgerBtn = $('#mobileHeader .hamburgerBtn');
  let hamburgerMenu = $('#mobileHeader .hamburgerMenu');
  let html =  $('html');

  // when click on hamburger menu, show links and cross, hide hamburger image
  hamburgerBtn.on('click', showLinks);

  // when click on cross, hide links and cross, show hamburger image
  cross.on('click', hideLinks);
  $('#mobileHeader #mobHead .hamburgerMenu #hamburgerDropdown a').on('click', hideLinks);
  $('#mobileHeader #mobHead .headerIcons .logo').on('click', hideLinks)
  // showLink function
  function showLinks() {
    hamburgerMenu.slideDown(500);
    hamburgerBtn.hide(500);
    cross.delay(350).show(500);
    html.addClass('stop-scrolling');
    $('body, html').bind('touchmove touchstart', function (e) {
      e.preventDefault()
    });
  }
  // hideLinks function
  function hideLinks() {
    hamburgerMenu.slideUp(500);
    hamburgerBtn.delay(350).show(500);
    cross.hide(500);
    html.removeClass('stop-scrolling');
    $('body, html').unbind('touchmove touchstart');
  }

  // making the navigation link which you are now disabled
  let links = $('#header .nav .nav-item a');
  links.each(function(){
    let linkName = $(this).attr('href');
    if(linkName == ''){
      $(this).parent().addClass('disabled')
    }
  });

  let mobileLinks = $('#mobileHeader #mobHead .hamburgerMenu #hamburgerDropdown > .nav-link');
  // console.log(mobileLinks)
  mobileLinks.each(function(){
    let linkName = $(this).attr('href');
    if(linkName == ''){
      $(this).addClass('disabled');
    }
  });
});