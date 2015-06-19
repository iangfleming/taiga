var d, h, m, ampm, time;

function displayTime() {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  ampm = h >= 12 ? 'pm' : 'am';
  h = h % 12;
  h = h ? h : 12;
  m = m < 10 ? '0' + m : m;

  time = h + ":" + m + ' ' + ampm;

  document.getElementsByClassName("time")[0].innerHTML = time;

  setTimeout(displayTime, 6000);
}

displayTime();

var note = document.getElementById("note-area");
var myCodeMirror = CodeMirror.fromTextArea(note);

function toggle() {
  var toggle = document.getElementsByClassName("toggle")[0];
  var toggleOuter = document.getElementsByClassName("toggle__outer")[0];
  toggleOuter.addEventListener("click", function(){
    toggle.classList.toggle("toggle--on");
    toggleOuter.classList.toggle("toggle__outer--on");
    myCodeMirror.setOption("keyMap", "vim");
  })
}

toggle();
