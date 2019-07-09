import React, { Component } from "react";
import ListCheduleItem from "./ListCheduleItem";
import { connect } from 'react-redux'



class ListsChedule extends Component {



  componentDidMount() {
    // this.props.getAllStudents()
  }
  render() {
    var { Students } = this.props
    var elmTasks = Students.map((Student, index) => {
     
      return (
        <ListCheduleItem
          key={index}
          index={index}
          Student={Student}
        />
      )
    })
    return (
      
      <table class="striped centered">
        <thead>
          <tr class="teal lighten-1 white-text">
            <th>Ngày thi</th>
            <th>Thứ</th>
            <th>Ca thi</th>
            <th>Môn thi</th>
            <th>Mã môn thi</th>
            <th>SBD</th>
            <th>Phòng</th>
            <th>Ghi chú</th>
          </tr>
        </thead>

        <tbody>
          {elmTasks}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = state => {
  return {
    Students: state.Students
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    // getAllStudents:()=>{
    //   dispatch(actGetAllStudents())
    // }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListsChedule);
