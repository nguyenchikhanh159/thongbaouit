import React, { Component } from "react";
import Header from "./components/Header";
import TitleLT from "./components/TitleLT";
import Cardpanel from "./components/CardPanel";
import ListsChedule from './components/ListsChedule';
import ListStatus from './components/ListStatus';
import { connect } from 'react-redux';
import "./App.css";


class App extends Component {

  render() {
    var { Students } = this.props
    var elmTasks = Students.slice(0, 1).map((Student, index = 0) => {

      return (
        <div class="overflowtop">
          <h1>{Student.name_student}</h1>
          <div class="overflow">
            <ListsChedule />
          </div>
        </div>
      )


    })
    return (
      <div className="App">
        <Header />
        <TitleLT />
        <div id="banner-main" />
        <div id="main">
          <div id="content" class="content-with-preloader container">
            <div class="row">
              <div id="us-creator" class="col s12 m12 l12">
                <Cardpanel />
                {elmTasks}
              </div>
            </div>
          </div>
        </div>
        <ListStatus />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    Students: state.Students
  }
}
export default connect(mapStateToProps, null)(App);
