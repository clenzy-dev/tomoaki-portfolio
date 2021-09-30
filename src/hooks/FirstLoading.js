import $ from "jquery";

const FirstLoading = () => {
  setTimeout(function() {
    $(".start p").fadeIn(2000);
  }, 500);
  setTimeout(function() {
    $(".start").fadeOut(800);
  }, 2500);
  $(function() {
    var loader = $(".loader-wrap");
    $(window).on("load", function() {
      loader.fadeOut();
    });
    setTimeout(function() {
      loader.fadeOut();
    }, 3000);
  });
};

export default FirstLoading;
