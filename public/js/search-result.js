$(document).on("click", ".gif-result", function() {
  var imageurl = $(this).attr("src");
  console.log(imageurl);
  $("#img-val").val(imageurl);
});

$("#gfycat-search-btn").on("click", function() {

  event.preventDefault();
  var searchQuery = $("#gfycat-search").val();

  window.location.href = "/memes/" + searchQuery;

});

$("#create-meme").on("click", function() {
  event.preventDefault();
})
