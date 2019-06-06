import React from 'react';
import './Timetrack.css';

class Timetrack extends React.Component {
    render(){
        return (
            <div className="time-track">

                <span
                    className={"timeline-indicator"}
                    style={{left: this.props.indicateLeft + "px", width: this.props.indicateWidth + "px"}}
                ></span>
                <span className="time-track-header">Time</span>
                <span className="time-block">8:00</span>
                <span className="time-block">9:00</span>
                <span className="time-block">10:00</span>
                <span className="time-block">11:00</span>
                <span className="time-block">12:00</span>
                <span className="time-block">13:00</span>
                <span className="time-block">14:00</span>
                <span className="time-block">15:00</span>
                <span className="time-block">16:00</span>
                <span className="time-block">17:00</span>
                <span className="time-block">18:00</span>
                <span className="time-block">19:00</span>
                <span className="time-block">20:00</span>
                <span className="time-block">21:00</span>
                <span className="time-block">22:00</span>
                <span className="time-block">23:00</span>
                <span className="time-block">0:00</span>
                <span className="time-block">1:00</span>
                <span className="time-block">2:00</span>
                <span className="time-block">3:00</span>
                <span className="time-block">4:00</span>
                <span className="time-block">5:00</span>
                <span className="time-block">6:00</span>
                <span className="time-block">7:00</span>
            </div>
        );
    }
}

export default Timetrack;