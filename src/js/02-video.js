import Player from '@vimeo/player';
// import VimeoPlayer from '@vimeo/player';
// let;
import { throttle } from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_KEY = 'videoplayer-current-time';

player.on('timeupdate', function ({ seconds }) {
  localStorage.setItem(LOCAL_KEY, seconds);
});
player.setCurrentTime(localStorage.getItem(LOCAL_KEY) || 0);
