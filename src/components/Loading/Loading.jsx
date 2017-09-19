/**
 * React Firebase Bolierplate
 *
 * @package    react-firebase-bolierplate
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 */

import React from 'react';
import PropTypes from 'prop-types';
import './Loading.scss';

function Loading(props) {
  return (
    <div className="loading">
      <img
        alt={props.message}
        src="./images/ajax-loader.gif"
      />
      <p>{props.message}</p>
    </div>
  );
}

Loading.propTypes = {
  message: PropTypes.string.isRequired
};

export default Loading;