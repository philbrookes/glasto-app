import React from 'react';
import './act.css';

class Act extends React.Component {
    constructor(props){
        super(props);
        let starredActs = JSON.parse(localStorage.getItem("starred-acts"));
        if(!starredActs){
            starredActs = {};
        }
        let start = this.props.data.start.split(':');
        let end = this.props.data.end.split(':');
        if(start[0] >= 0 && start[0] < 8) {
            start[0] = +start[0] + (+24);
        }
        if(end[0] >= 0 && end[0] < 8) {
            end[0] = +end[0] + (+24);
        }
        this.left  = (+start[0]-(+8)) * 60 + (+start[1]) + 150;
        this.width = ((+end[0]-(+8)) * 60 + (+end[1]) + 150);

        if(this.width <= this.left){
            this.width = (24*60)+150;
        }
        this.width = this.width - this.left;

        this.state = {
            starred: (typeof starredActs[this.props.data.id] !== "undefined")
        };
        this.starToggle = this.starToggle.bind(this);
        this.timelineIndicateOn = this.timelineIndicateOn.bind(this);
    }

    timelineIndicateOn(){
        this.props.setIndicate(this.left, this.width);
    }

    starToggle(){
        let starredActs = JSON.parse(localStorage.getItem("starred-acts"));
        if(!starredActs){
            starredActs = {};
        }
        if(typeof starredActs[this.props.data.id] !== "undefined") {
            delete starredActs[this.props.data.id];
            this.setState({starred: false});
        } else {
            starredActs[this.props.data.id] = "";
            this.setState({starred: true});
        }
        localStorage.setItem("starred-acts", JSON.stringify(starredActs));
    }

    render(){
        return (
                <span
                    onClick={this.starToggle}
                    onMouseEnter={this.timelineIndicateOn}
                    data-tip={this.props.data.act + ": " + this.props.data.start + " - " + this.props.data.end}
                    className={this.state.starred ? "act-slot starred": "act-slot"}
                    style={{position: "absolute", left: this.left + "px", width: this.width + "px"}}
                >
                    {this.props.data.act}
                </span>
        );
    }
}

export default Act;