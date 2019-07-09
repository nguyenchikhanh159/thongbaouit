import React, { Component } from "react";
import {
  actGetStudentsid,
  actGetStudentsidAccess,
} from './../action';
import { connect } from "react-redux";

class CardPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student_id: '',
      count: 0
    };
  }

  onHandleChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }
  onSave = (e) => {
    e.preventDefault();
    if (this.state.student_id) {
      this.props.getStudentsid(this.state.student_id);
      this.props.getStudentsidAccess(this.state.student_id)
    }
    // this.setState({
    //   count:this.state.count+1
    // })
    // this.props.getCount(this.state.count)


  }
  render() {
    return (
      <div className="card-panel">
        <form onSubmit={this.onSave}>
          <input name="utf8" type="hidden" value="&#x2713;" />
          <div className="input-field">
            <input
              type="text"
              name="student_id"
              id="student-id"
              value={this.state.student_id}
              autocomplete="off"
              className="center-align"
              onChange={this.onHandleChange}
            />
            <label className="active" for="student_id">
              Mã số sinh viên
            </label>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {

  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    getStudentsid: (student_id) => {
      dispatch(actGetStudentsid(student_id));
    },
    getStudentsidAccess: (student_id) => {
      dispatch(actGetStudentsidAccess(student_id));
    }

    // getCount:(count)=>{
    //   dispatch(get_students_id_Count(count))
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardPanel);
