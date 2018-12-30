let preferButton = document.querySelectorAll('.prefer_button');
let modal = document.querySelector('.modal_video');
let modalButtonClose = document.querySelector('.modal-button-close');
let social = document.querySelector('.social');




let workshop2 = document.querySelector('.workshop2');

preferButton.forEach(btn => {
  btn.addEventListener('click', function(evt) {
    evt.preventDefault();
    player.loadVideoById('CKATLwbcl0M');
    playVideo();
    modal.classList.add('modal-show');
  });
});








modalButtonClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  stopVideo();
  modal.classList.remove('modal-show');
});

// видео с ютуба

let tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '540',
    width: '960',
    events: {}
  });
}

function playVideo() {
  player.playVideo();
}
function stopVideo() {
  player.stopVideo();
}

social.addEventListener('click', function(evt) {
  evt.preventDefault();
  window.scrollTo(0, document.body.scrollHeight);
});
