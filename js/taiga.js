function getDateTime () {
  var d = Date();
  var el = document.getElementsByClassName("time");
  el[0].innerHTML = d;
}

window.onload = getDateTime;
