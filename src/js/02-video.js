import Throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', Throttle(onTimeupdate, 1000));

function onTimeupdate(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}
const currentTime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(currentTime);

