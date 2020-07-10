// Wrap every letter in a span
var textWrapper = document.querySelector('.letters-middle');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.letters-middle .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.letters-middle',
    opacity: 0,
    duration: Infinity,
    easing: "easeOutExpo",
    delay: 1000
  });