document.body.onload = addElement;
var my_div = (newDiv = null);
var a = document.getElementById("note__input");

function addElement() {
  var newDiv = document.createElement("div");
  newDiv.classList.add("container");
  newDiv.innerHTML =
    "Your first note: " + document.getElementById("note__input");
  my_div = document.getElementById("org_div1");
  document.body.insertBefore(newDiv, my_div);
}
document.write("jellO!");
