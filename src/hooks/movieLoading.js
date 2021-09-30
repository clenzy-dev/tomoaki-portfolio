import $ from "jquery";

const MovieLoading = () => {
  $(function() {
    var loader = $(".loader-wrap");
    $("video").on("suspend", function() {
      loader.fadeOut();
    });
    setTimeout(function() {
      loader.fadeOut();
    }, 3000);
  });
  console.log("suspend");
};

export default MovieLoading;