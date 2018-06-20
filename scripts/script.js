$(document).ready(function () {
  $('#enerpeelBrandPage, #gatineauPage, #himichenPage, #homeBox1Page, #massagesPage, #medik8Page, #eyelashesPage, #mikrodermaobrazioPage, #pochistvanePage, #therapiesPQPage').append('<img id="toTop" src="./assets/images/Icons/upArrow.png"</img>');
  if ($('#toTop').length > 0) {
    $(window).scroll(function () {
      var toTop = $('#toTop');
      // console.log(footerStart.top, toTopBottom)
      if ($(this).scrollTop() != 0) {
        toTop.fadeIn();
      } else {
        toTop.fadeOut();
      }
    });
    $(toTop).click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
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
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  // animation for the two headers
  var lastScrollTop = 0;
  var header = $('#header');
  $(window).scroll(function (event) {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop) {
      if (Modernizr.mq('(min-width: 992px)')) {
        header.fadeOut();
      }
    } else {
      if (Modernizr.mq('(min-width: 992px)')) {
        header.fadeIn();
      }
    }
    lastScrollTop = scrollTop;
  });

  //-------------------- Dropdown menu --------------------

  // Define the needed variables
  var cross = $('#mobileHeader #mobHead .cross');
  var hamburgerBtn = $('#mobileHeader .hamburgerBtn');
  var hamburgerMenu = $('#mobileHeader .hamburgerMenu');
  var html = $('html');
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (iOS) {
    $('.hamburgerBtn').click(function () {
      $('.hamburgerMenu').css({
        display: 'block'
      });
      $('.cross').css({
        display: 'block'
      });
      $('.hamburgerBtn').css({
        display: 'none'
      });
    })
    $('.cross').click(function () {
      $('.hamburgerMenu').css({
        display: 'none'
      });
      $('.cross').css({
        display: 'none'
      });
      $('.hamburgerBtn').css({
        display: 'block'
      });
    })
  } else {
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
  }
  // making the navigation link which you are now disabled
  var links = $('#header .nav .nav-item a');
  links.each(function () {
    var linkName = $(this).attr('href');
    if (linkName == '') {
      $(this).parent().addClass('disabled')
    }
  });

  var mobileLinks = $('#mobileHeader #mobHead .hamburgerMenu #hamburgerDropdown > .nav-link');
  // console.log(mobileLinks)
  mobileLinks.each(function () {
    var linkName = $(this).attr('href');
    if (linkName == '') {
      $(this).addClass('disabled');
    }
  });
  // landscape navigation
  window.onresize = function () {
    if (window.innerHeight < window.innerWidth) {
      $('#mobileHeader #mobHead').css('height', '10vw');
      $('#mobileHeader #mobHead .headerIcons').css('height', '10vw');
      $('#mobileHeader #mobHead .hamburgerMenu').css('height', '90vw');
    } else {
      $('#mobileHeader #mobHead').css('height', '10vh');
      $('#mobileHeader #mobHead .headerIcons').css('height', '10vh');
      $('#mobileHeader #mobHead .hamburgerMenu').css('height', '90vh');
    }
  }
});