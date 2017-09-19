/**
 * React Firebase Bolierplate
 *
 * @package    react-firebase-bolierplate
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 */

import React, { Component } from 'react';
import { db } from '../../firebase/config';
import '../../scss/manager.scss'

class Manager extends Component {

  state = {
    clients: null
  }

  constructor(props) {
    super(props);
    this.state = {
      clients: null
    };
  }

  componentWillMount () {
    const query = db.ref("clients");
    query.on("value", (snapshot) => {
      console.log ('DATA UPDATE');
      this.setState({
        clients: snapshot.val()
      });
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }

  render() {
    let clientRows = [];
    if (this.state.clients !== null){
      Object.keys(this.state.clients).forEach(key => {
        clientRows.push (
          <tr key={key}>
            <td>
              <img
                className="client-icon"
                alt={this.state.clients[key].displayName}
                src={this.state.clients[key].photoURL}
              />
            </td>
            <td>
              {this.state.clients[key].displayName} <br />
              {this.state.clients[key].email}
            </td>
          </tr>
        );
      });
    }
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

          <a className="navbar-brand" href="/manager/">React Firebase Boilerplate</a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/manager/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/manager/?settings">Settings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/manager/?profile">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/manager/?help">Help</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="/manager/?link">Overview <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/manager/?reports">Reports</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/manager/?analytics">Analytics</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/manager/?export">Export</a>
                </li>
              </ul>
            </nav>

            <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
              <h2>Clients</h2>
              <div className="table-responsive">
                <table className="table table-striped">
                  <tbody>
                  {clientRows}
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Manager;
