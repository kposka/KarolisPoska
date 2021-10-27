var li = document.getElementsByTagName("li");
var button = document.getElementsByTagName("button");

function displayTab(name){
  var tab = document.getElementById(name);
  var tabs = document.getElementsByClassName("tab")
  for (var i = 0; i < tabs.length; i++){
    tabs[i].style.display = "none";
    tab.style.display = "block";
  }};
