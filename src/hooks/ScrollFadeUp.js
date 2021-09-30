import $ from "jquery";

const ScrollFadeUp = () => {
  $(window).on("scroll", function() {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $(".fade").each(function() {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 300) {
        $(".fade").addClass("fadeUp");
      }
    });
  });
  console.log("fuck");
};

export default ScrollFadeUp;
