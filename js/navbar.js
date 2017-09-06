$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

$(document).ready(function() {
  $(".burger-container").on('click',function () {
      $(this).toggleClass("open");
  });

  $(".burger-container").on('click',function () {
      $("body").toggleClass("menu-open");
  });
});
