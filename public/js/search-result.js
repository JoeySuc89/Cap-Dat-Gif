$(document).on("click", ".gif-result", function() {
  var url = $(this).attr("src");
  console.log(url);
  $("#img-val").val(url);
});
