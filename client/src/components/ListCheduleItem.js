import React, { Component } from "react";
import moment from 'moment'

class ListCheduleItem extends Component {
  ConvertToDate = (Flag) => {
    let FlagDay=''
    let current_day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let day_name = ['2', '3', '4', '5', '6', '7']
    let result = current_day.map((day, index) => {
      if (Flag === day)
        FlagDay= day_name[index]
    })
    return FlagDay
  }
  render() {
    var { Student } = this.props;
    const ConvertToday = moment(Student.room.day, 'DD MM YYYY')._d.toString().substring(0, 3)
    let Current_Day= this.ConvertToDate(ConvertToday)
  
    return (

      <tr class="grey lighten-1 grey-text">
        <td title="Ngày thi">{Student.room.day}</td>
        <td title="Thứ">{Current_Day}</td>
        <td
          class="tooltipped"
          data-delay="1"
          data-tooltip="9:30"
          data-position="right"
        >
          {}
        </td>
        <td
          class="tooltipped"
          data-delay="1"
          data-tooltip="NT101.J11.ANTT"
          data-position="right"
        >
          {Student.room.name_subject}
        </td>
        <td title="Mã môn thi">{Student.room.c_subject}</td>
        <td title="Số báo danh">{Student.norder}</td>
        <td title="Phòng thi">{Student.room.room}</td>
        <td title="Ghi chú" >{Student.note}</td>
      </tr>
    );
  }
}

export default ListCheduleItem;
