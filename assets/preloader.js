let loader = document.querySelector('.preloader');

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

window.addEventListener("load", function(){
    loader.style.display = "none";
});