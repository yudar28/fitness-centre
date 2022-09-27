const playVideo = () => {
  const buttonPlayer = document.querySelector('.gym__start-player');
  const video = document.querySelector('.gym__wrapper video');

  buttonPlayer.addEventListener('click', () => {
    video.play();
    buttonPlayer.classList.add('gym__start-player--none');
  });

  video.addEventListener('click', () => {
    if (video.paused === false) {
      video.pause();
      buttonPlayer.classList.remove('gym__start-player--none');
    }
  });

  const getPosterVideo = () => {
    if (window.innerWidth < 1200 && window.innerWidth >= 768) {
      video.setAttribute('poster', 'img/picture-for-video-tablet.jpg');
    } else if (window.innerWidth < 768) {
      video.setAttribute('poster', 'img/picture-for-video-mobile.jpg');
    } else {
      video.setAttribute('poster', 'img/picture-for-video-desktop.jpg');
    }
  };

  getPosterVideo();

  window.addEventListener('resize', () => {
    getPosterVideo();
  });
};

export {playVideo};
