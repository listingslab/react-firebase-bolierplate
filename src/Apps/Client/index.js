/**
 * React Firebase Bolierplate
 *
 * @package    react-firebase-bolierplate
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Client from './Client';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Client />, document.getElementById('app'));
registerServiceWorker();