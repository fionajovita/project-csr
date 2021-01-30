var slideIndex = 1;

var learn_audio = document.querySelector("#learning-audio");

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {

  showSlides(slideIndex = n);
}
function playAudio(n) {
  switch (n) {
    // case 1:
    //   learn_audio.src="../audio/Gangnam Style -.mp3";
    //   break;
    case 1:
      learn_audio.src = "../../../audio/dog.mp3";
      break;
    case 2:
      learn_audio.src = "../../../audio/cow.mp3";
      break;
    case 3:
      learn_audio.src = "../../../audio/rabbit.mp3";
      break;
    case 4:
      learn_audio.src = "../../../audio/camel.mp3";
      break;
    case 5:
      learn_audio.src = "../../../audio/monkey.mp3";
      break;
    case 6:
      learn_audio.src = "../../../audio/buffalo.mp3";
      break;
    case 7:
      learn_audio.src = "../../../audio/elephant.mp3";
      break;
    case 8:
      learn_audio.src = "../../../audio/chimpanzee.mp3";
      break;
  }

  learn_audio.play();
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  playAudio(slideIndex);
}

showSlides(slideIndex);
