/**
 * React Firebase Bolierplate
 *
 * @package    react-firebase-bolierplate
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 */

import React, { Component } from 'react';
import { updateClient, googleAuth, logoutUser } from '../../firebase/auth';
import { firebaseAuth } from '../../firebase/config';
import Loading from '../../components/Loading/Loading';
import Footer from '../../components/Footer/Footer';
import './Client.scss';

class Client extends Component {

  state = {
    loading: true,
    authed: false
  }

  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user,
          loading: false,
          authed: true
        });
        updateClient(user);
      } else {
        this.setState({
          loading: false,
          authed: false
        });
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }

  authenticate = (e) => {
    e.preventDefault();
    googleAuth();
  }

  logout = (e) => {
    e.preventDefault();
    logoutUser();
  }

  render() {
    return (
      <div className="client">
        <div className="content-box">
          <img
            className="logo"
            alt="React Firebase Bolierplate Logo"
            src="./icons/icon-72x72.png" />
          <h1>React Firebase Bolierplate</h1>
          {this.state.loading === true
            ? <Loading message="" />
            : this.state.authed === true
              ? <div>
                <p>
                  <img
                  alt={`${this.state.user.displayName} user icon`}
                  className="user-icon"
                  src={this.state.user.photoURL} /><br />
                  {this.state.user.displayName}<br />
                  {this.state.user.email}

                </p>

                <a
                    href="/?logout"
                    onClick={this.logout}>Logout</a>
                </div>
                :<div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum imperdiet turpis, at finibus erat. Vivamus ultricies ex purus, et lacinia quam venenatis vitae.</p>
                  <a
                    href="/?authenticate"
                    onClick={this.authenticate}>Login with Google</a>
                </div>
          }

        </div>
        <Footer
          repoType="Bitbucket"
          repoURL="https://bitbucket.org/aligent/react-firebase-bolierplate"
        />
      </div>
    );
  }
}

export default Client;
