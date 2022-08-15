import Throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function onTimeupdate(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}

let currentTime = localStorage.getItem('videoplayer-current-time');
player.on('timeupdate', Throttle(onTimeupdate, 1000));

// const startVideoPosition = localStorage.getItem('videoplayer-current-time') || '0'
if (currentTime) {
    player.setCurrentTime(currentTime);
}





