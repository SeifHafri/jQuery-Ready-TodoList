$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

$("span").on("click", function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  e.stopPropagation();
});

$("input[type=text]").keypress(function (e) {
  if (e.which == 13) {
    var todo = $("input").val();
    $("input").val("");
    $("ul").append("<li><span>X </span>" + todo + "</li>");
  }
});
$(".fa-plus").on("click", function () {
  $("input[type=text]").fadeToggle();
});
