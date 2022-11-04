import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Sum, App, Banner  } from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
