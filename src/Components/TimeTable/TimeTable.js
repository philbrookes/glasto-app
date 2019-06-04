import React from 'react';
import DaySelector from './DaySelector/DaySelector'

class TimeTable extends React.Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }
    render() {
        return (
            <div className="TimeTable">
                <DaySelector data={this.data}/>
            </div>
        );
    }
}

export default TimeTable;
