var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 4500);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
document.getElementById('welcome-sup').style.marginTop = "50px";






