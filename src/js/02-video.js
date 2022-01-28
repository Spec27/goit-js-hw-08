import '../css/common.css';
import { throttle } from 'lodash';

const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  const stringData = JSON.stringify(data);
  localStorage.setItem(TIME_KEY, stringData);
};

player.on('timeupdate', throttle(onPlay, 1000));

function reload() {
  const paused = JSON.parse(localStorage.getItem(TIME_KEY))['seconds'];
  if (JSON.parse(localStorage.getItem(TIME_KEY)) === 0) {
    return;
  }

  if (paused) {
    player
      .setCurrentTime(paused)
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
