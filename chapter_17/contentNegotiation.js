var req = new XMLHttpRequest();
req.open("GET", "http://eloquentjavascript.net/author", true);
req.addEventListener("load", function() {
  console.log(req.status);
  console.log(req.statusText);
  console.log(req.responseText);
});
req.setRequestHeader("Accept", "text/html");
req.send(null);