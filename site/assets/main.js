function uncheckAll() {
  $('input[type="checkbox"]:checked').prop("checked", false);
}

function like() {
  document.getElementById("test").style.color = "red";
}
