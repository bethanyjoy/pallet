



// body.onload = function(){
//   var x = document.getElementById("sidebar");
//     x.style.backdropFilter = "blur(20px)";
// };


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
    x.style.backdropFilter = "none";
    x.style['-webkit-backdrop-filter'] = "none";
    x.style.backgroundColor = "rgb(248, 249, 251)";
  var x = document.getElementById("main");
    x.style.display = "none"
};


function hideSidebar() {
  var x = document.getElementById("nav-sections");
    x.style.display = "none";
  var x = document.getElementById("showButton");
    x.style.display = "block";
  var x = document.getElementById("hideButton");
    x.style.display = "none";
  var x = document.getElementById("sidebar");
    x.style.height = "auto";
    x.style.backdropFilter = "blur(20px)";
    x.style['-webkit-backdrop-filter'] = "blur(20px)";
    x.style.backgroundColor = "rgba(231, 235, 242, 0.3)";
  var x = document.getElementById("main");
    x.style.display = "block"
 };