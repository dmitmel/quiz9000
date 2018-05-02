// polyfills for Firebase
import 'core-js/fn/array/find';
import 'core-js/fn/array/find-index';
import 'core-js/fn/string/starts-with';

import 'es6-promise/auto';

// `fetch()` polyfill for making API calls.
import 'whatwg-fetch';

// `Object.assign()` is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
import assign from 'object-assign';

// React renderer uses `requestAnimationFrame` for splitting rendering between
// multiple frames. See this video for more information:
// https://youtu.be/ZCuYPiUIONs
import 'raf/polyfill';

Object.assign = assign;
