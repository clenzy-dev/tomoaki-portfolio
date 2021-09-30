import $ from "jquery";

const FirstLoading = () => {
  setTimeout(function() {
    $(".start p").fadeIn(2000);
  }, 500);
  setTimeout(function() {
    $(".start").fadeOut(800);
  }, 2500);
  console.log("fuck");
};

export default FirstLoading;
