/**
 * React Firebase Bolierplate
 *
 * @package    react-firebase-bolierplate
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 */

import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

function Footer(props) {
  return (
    <footer>
      <a href="/manager/"
         target="_blank"
         rel="noopener noreferrer">
        Manager App</a>
      &nbsp;|&nbsp;
      <a href={props.repoURL}
         target="_blank"
         rel="noopener noreferrer">
        {props.repoType}</a>
      <br />
      <a href="http://www.aligent.com.au"
         target="_blank"
         rel="noopener noreferrer">
        &copy; Aligent Consulting 2017</a>
    </footer>
  );
}

Footer.propTypes = {
  repoType: PropTypes.string.isRequired,
  repoURL: PropTypes.string.isRequired
};

export default Footer;
