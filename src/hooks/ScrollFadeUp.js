import $ from "jquery";

const ScrollFadeUp = () => {
  $(function() {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $(".fadeLoad").each(function() {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight) {
        $(this).addClass("fadeUp");
      }
    });
  });
  $(window).on("scroll", function() {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $(".fade").each(function() {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 300) {
        $(this).addClass("fadeUp");
      }
    });
  });
};

export default ScrollFadeUp;
