import '../css/common.css';

import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  const stringData = JSON.stringify(data);
  localStorage.setItem(TIME_KEY, stringData);
};

player.on('timeupdate', throttle(onPlay, 1000));

function reload() {
  if (JSON.parse(localStorage.getItem(TIME_KEY)) === null) {
    return;
  }
  const paused = JSON.parse(localStorage.getItem(TIME_KEY));
  player.setCurrentTime(paused.seconds);

  if (paused) {
    player
      .setCurrentTime(paused.second)
      .then(function (seconds) {})
      .catch(function (error) {
        switch (error.name) {
          case 'Error':
            break;
          default:
            break;
        }
      });
  }
}
reload();
