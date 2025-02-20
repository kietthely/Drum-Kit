// select all the buttons with the class drum and play the corresponding sound
document.querySelectorAll(".drum").forEach((button) => {
  button.addEventListener("click", function () {
    handlePlaySound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
});

// handle keyboard events for the drum kit
document.addEventListener("keypress", function (event) {
  handlePlaySound(event.key);
  buttonAnimation(event.key);
});

function handlePlaySound(event) {
  switch (event) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      break;
  }
}
function buttonAnimation(key) {
  var currentKey = document.querySelector("." + key);
  if (currentKey === null) return;
  currentKey.classList.add("pressed");
  setTimeout(() => {
    currentKey.classList.remove("pressed");
  }, 100);
}
