$(function () {

  var counter = $("span.counter"),
  count = localStorage.getItem("count") != null ? localStorage.getItem("count") : 0;
  counter.html(count);

  $("a.add").click(function(event){
    event.preventDefault();
    count++;
    counter.html(count);
    localStorage.setItem("count", count);
  });

  var offline = function () {
    $("span.status").html("Offline");
  };
  window.addEventListener("offline", offline, false);
  if(!navigator.onLine) offline();

  window.addEventListener("online", function () {
    $("span.status").html("Online");
  }, false);
})