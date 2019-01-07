import React,{Component} from 'react';

export default class CalendarHeader extends Component {
    render() {
        return (
            <div className="calendarHeader">
                <span className="prev">
                    《
                </span>
                <span class="next">
                    》
                </span>
                <span className="dateInfo">
                    {}年{}月
                </span>
            </div>
        )
    }
}
