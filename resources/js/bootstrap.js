import axios from 'axios';
import { Typewriter } from 'typewriter-effect/dist/core';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
