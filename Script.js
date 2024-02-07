
function openTab(evt, tabName) {
  var i, tabcontent, tabs;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tabs = document.querySelectorAll('.nav a');
  tabs.forEach(tab => {
    tab.classList.remove("active");
  });
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

window.onload = function() {
  document.getElementById("defaultOpen").click();
};
