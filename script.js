
// Hide/show sidebar on mobile

function showSidebar() {
 var x = document.getElementById("nav-sections");
   x.style.display = "flex";
 var x = document.getElementById("showButton");
   x.style.display = "none";
 var x = document.getElementById("hideButton");
   x.style.display = "block";
 var x = document.getElementById("sidebar");
   x.style.height = "100vh";
 var x = document.getElementById("main");
   x.style.display = "none"
}


function hideSidebar() {
 var x = document.getElementById("nav-sections");
   x.style.display = "none";
 var x = document.getElementById("showButton");
   x.style.display = "block";
 var x = document.getElementById("hideButton");
   x.style.display = "none";
   var x = document.getElementById("sidebar");
     x.style.height = "auto";
 var x = document.getElementById("main");
     x.style.display = "block"
 }
