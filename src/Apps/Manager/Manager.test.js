/**
 * React Firebase Bolierplate
 *
 * @package    react-firebase-bolierplate
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Manager from './Manager';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Manager />, div);
});
