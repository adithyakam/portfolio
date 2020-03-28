// $(window).load(function() {
//   $("#preloader").fadeOut("slow", function() {
//     $(this).remove();
//   });
// });

// window.load(() => {
//   document.getElementById(preloader).classList.remove(fadeOut);
// });

document.getElementById(preloader).classList.add("fadeOut");

window.addEventListener("load", showPage);

function showPage() {
  document.getElementById(preloader).classList.remove("fadeOut");
}
