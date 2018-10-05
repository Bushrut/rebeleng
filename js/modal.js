let preferButton = document.querySelectorAll('.prefer_button');
let modal = document.querySelector('.modal_video');
let modalButtonClose = document.querySelector('.modal-button-close');
let social = document.querySelector('.social');
let way = document.querySelector('.way');
let wish = document.querySelector('.wish');
let idioms = document.querySelector('.idioms');
let verb_do = document.querySelector('.do');
let workshop1 = document.querySelector('.workshop1');
let workshop2 = document.querySelector('.workshop2');

preferButton.forEach(btn => {
  btn.addEventListener('click', function(evt) {
    evt.preventDefault();
    player.loadVideoById('CKATLwbcl0M');
    playVideo();
    modal.classList.add('modal-show');
  });
});

way.addEventListener('click', function(evt) {
  evt.preventDefault();
  player.loadVideoById('3gj5mbADfKo');
  playVideo();
  modal.classList.add('modal-show');
});

wish.addEventListener('click', function(evt) {
  evt.preventDefault();
  player.loadVideoById('UMto_MfNk_c');
  playVideo();
  modal.classList.add('modal-show');
});

idioms.addEventListener('click', function(evt) {
  evt.preventDefault();
  player.loadVideoById('dMeiDL0c72c');
  playVideo();
  modal.classList.add('modal-show');
});

verb_do.addEventListener('click', function(evt) {
  evt.preventDefault();
  player.loadVideoById('2yxyXsx4nbY');
  playVideo();
  modal.classList.add('modal-show');
});

workshop1.addEventListener('click', function(evt) {
  evt.preventDefault();
  player.loadVideoById('4AoDXV2vrYc');
  playVideo();
  modal.classList.add('modal-show');
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
