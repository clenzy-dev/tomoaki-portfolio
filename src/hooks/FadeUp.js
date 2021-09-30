import $ from "jquery";

const FadeUp = () => {
  $(function() {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $(".fade").each(function() {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight) {
        $(this).addClass("fadeUp");
      }
    });
  });
};
export default FadeUp;
