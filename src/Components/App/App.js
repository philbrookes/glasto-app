import React from 'react';
import TimeTable from '../TimeTable/TimeTable';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.showTimeTable = this.showTimeTable.bind(this);
        this.hideTimeTable = this.hideTimeTable.bind(this);
        this.state = {
            timeTable: false
        };
    }

    showTimeTable() {
        this.setState({timeTable: true});
    }
    hideTimeTable() {
        this.setState({timeTable: false});
    }

    render(){
        if (this.state.timeTable) {
            return (
                <div>
                    <button onClick={this.hideTimeTable}>Show List</button>
                    <TimeTable/>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.showTimeTable}>Show Time Table</button>
                </div>
            );
        }
    }

}

export default App;
