import React, { Component } from 'react';
import CalendarHeader from './compnents/CalendarHeader';
import CalendarMain from  './compnents/CalendarMain';
import CalendarFooter from './compnents/CalendarFooter';

const displayDaysPerMonth = (year) =>{
  let daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    daysInMonth[1] = 29
  }
  let daysInpreviousMonth = [].concat(daysInMonth);
  daysInpreviousMonth.unshift(daysInpreviousMonth.pop())

  //获取每个月数据中需要补足上个月天数
  let addDaysFromPreMonth = new Array(12).fill(null).map((item,index)=>{
    let day = new Date(year,index,1).getDay();
    if (day === 0) {
      return 6
    }else{
      return day -1
    }
  })

  //返回一年中的每月显示数据,每月显示数据是6行7天
  
}


class App extends Component {

  render() {
    return (
      <div className="output">
        fgjfhj
      </div>
    );
  }
}

export default App;
