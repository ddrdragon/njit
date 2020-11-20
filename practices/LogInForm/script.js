var ele = document.getElementById("myLogin");
function login() {
  ele.style.display = "block";
}
function cl() {
  ele.style.display = "none";
}

window.onclick = function(event) {
  if(event.target == ele) {
    ele.style.display = "none";
  }
}