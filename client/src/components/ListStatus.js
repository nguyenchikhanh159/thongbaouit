import React, { Component } from "react";
import { connect } from "react-redux";
import ListStatusItem from './ListStatusItem'
import {
  actGetStudentsidAccessRespond,
  actGetStudentsid,
  actGetStudentsidAccess
} from './../action';

class ListStatus extends Component {

  componentDidMount(){
    this.props.fetchAll()
  }
  OnShowDetailStudents=(id)=>{
    this.props.getStudentsid(id)
  }
  render() {
    var { StudentsAccessRespond } = this.props
    var elmTasks = StudentsAccessRespond.map((student, index) => {
      return (
        <ListStatusItem
          key={index}
          index={index}
          student={student}
          OnShowDetailStudents={this.OnShowDetailStudents}
        />
      )
    })
    return (
      <div class="container-bottom">
        <div class="card-panel-bottom">
          <div class="right github-star-wrapper">
            <a
              class="github-button"
              href="https://github.com/nguyenchikhanh159?tab=projects"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
            >
              Star
            </a>
            <h5>Hoạt động gần đây (329)</h5> <br />
          </div>
          {elmTasks}

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    StudentsAccessRespond: state.StudentsAccessRespond,
    // Count:state.Count
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAll:()=>{
      dispatch(actGetStudentsidAccessRespond())
    },
    getStudentsid: (student_id) => {
      dispatch(actGetStudentsid(student_id));
    },
    // getCount:(count)=>{
    //   dispatch(get_students_id_Count(count))
    // }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ListStatus);
