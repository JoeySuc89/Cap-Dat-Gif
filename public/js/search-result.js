var searchQuery = "";
$(document).on("click", ".gif-result", function() {
  var imageurl = $(this).attr("src");
  console.log(imageurl);
  $("#img-val").val(imageurl);
});

$("#gfycat-search-btn").on("click", function() {
  event.preventDefault();
  searchQuery = $("#gfycat-search").val();

  window.location.href = "/memes/" + searchQuery;
});

$("#create-meme").on("click", function() {
  event.preventDefault();
  searchQuery = $("#img-val").val();
  var createMemeText = $("#create").val();
  console.log(createMemeText);
  $.ajax({
    type: "POST",
    url: "/api/meme",
    data: {
      imageurl: searchQuery,
      caption: createMemeText
    },
    success: function(data) {
      console.log(data);

        console.log("success");
        console.log(data.memeId);
        location.replace("/meme/" + data.memeId)
    

      // location.reload();
      // return data;
    }
  });
});
