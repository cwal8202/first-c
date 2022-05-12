$(function () {
  //////////////////////////////////////////////
  $(".top").on("click", function () {
    $(".top").toggleClass("on");
  });

  $(".main_slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
  });

  /////////////////////////////////////////////
});
