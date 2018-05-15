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
  autoplaySpeed: 2000
});
  
  // animation for the header
  let lastScrollTop = 0;
  let header = $('#header');
  $(window).scroll(function(event){
    let scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop){
      header.fadeOut();
    } else {
      header.fadeIn();
    }
    lastScrollTop = scrollTop;
  });
  
  // making the navigation link which you are now disabled
  let path = window.location.pathname;
  let page = path.split("/").pop();
  let links = $('#header .nav .nav-item a');
  links.each(function(){
    let linkName = $(this).attr('href');
    if(linkName == ''){
      $(this).parent().addClass('disabled')
    }
  });
});