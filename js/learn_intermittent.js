var slideIndex = 1;

var learn_audio = document.querySelector("#learning-audio");
var nextModuleBtn = document.getElementById("nextModuleBtn");

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  
  showSlides(slideIndex = n);
}
function playAudio(n){
  if((navigator.userAgent.indexOf("Chrome") != -1))
  {
    switch(n){
      case 1:
        learn_audio.src ="../../../audio/quack-edited.ogg";
        break;
      case 2:
        learn_audio.src ="../../../audio/baa-edited.ogg";
        break;
      case 3:
        learn_audio.src ="../../../audio/wal-edited.ogg";
        break; 
    }
  }
  else{
    switch(n){
      case 1:
        learn_audio.src ="../../../audio/quack-edited.mp3";
        break;
      case 2:
        learn_audio.src ="../../../audio/baa-edited.mp3";
        break;
      case 3:
        learn_audio.src ="../../../audio/wal-edited.mp3";
        break;        
    }
  }

  if(n==3){
    nextModuleBtn.style.display = "block";
  }else{
    nextModuleBtn.style.display = "none";
  }
  learn_audio.play();
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  playAudio(slideIndex);
}

showSlides(slideIndex);

