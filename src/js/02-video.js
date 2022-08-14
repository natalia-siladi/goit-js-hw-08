import Throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', Throttle(onTimeupdate, 1000));

let currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
    player.setCurrentTime(currentTime);
}


function onTimeupdate(seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
}


