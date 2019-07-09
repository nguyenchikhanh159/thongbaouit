import React, { Component } from "react";

class ListStatusItem extends Component {

    OnShowDetailStudents = (id) => {
        this.props.OnShowDetailStudents(id)
    }
    render() {

        var { student } = this.props
        return (
            <div class="chip">

                <a onClick={() => this.OnShowDetailStudents(student.student_id)}>
                    {student.student_id}
                </a>


            </div>
        );
    }
}


export default (ListStatusItem);
