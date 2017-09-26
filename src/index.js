import React from 'react';
import ReactDOM from 'react-dom';

import './scss/index.scss';
import App from './js/components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((<App />), document.getElementById('root'));
registerServiceWorker();
