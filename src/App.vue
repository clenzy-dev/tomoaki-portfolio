<template>
  <div><router-view /></div>
</template>

<script>
import $ from "jquery";
export default {
  mounted: function() {
    $(function() {
      var style = '<link rel="stylesheet" href="./assets/animation.css">';
      $("head link:last").after(style);
    });
  },
};
</script>

<style>
body {
  font-family: Roboto;
  color: #1e1e1e;
}
</style>
