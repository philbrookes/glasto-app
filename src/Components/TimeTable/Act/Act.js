import React from 'react';
import './act.css';

class Act extends React.Component {
    constructor(props){
        super(props);
        let starredActs = JSON.parse(localStorage.getItem("starred-acts"));
        if(!starredActs){
            starredActs = {};
        }
        this.state = {
            data: this.props.data,
            starred: (typeof starredActs[this.props.data.id] !== "undefined")
        };
        this.starToggle = this.starToggle.bind(this);
    }

    starToggle(){
        let starredActs = JSON.parse(localStorage.getItem("starred-acts"));
        if(!starredActs){
            starredActs = {};
        }
        if(typeof starredActs[this.state.data.id] !== "undefined") {
            delete starredActs[this.state.data.id];
            this.setState({starred: false});
        } else {
            starredActs[this.state.data.id] = "";
            this.setState({starred: true});
        }
        localStorage.setItem("starred-acts", JSON.stringify(starredActs));
    }

    render(){
        let start = this.state.data.start.split(':');
        let end = this.state.data.end.split(':');

        let begin  = (+start[0]) * 60 + (+start[1]) + 150;
        let finish = ((+end[0]) * 60 + (+end[1]) + 150);

        if(finish <= begin){
            finish = (24*60)+150;
        }
        finish = finish - begin;
        return (
            <span
                onClick={this.starToggle}
                data-tip={this.state.data.act + ": " + this.state.data.start + " - " + this.state.data.end}
                className={this.state.starred ? "act-slot starred": "act-slot"}
                duration={finish}
                begin={this.state.data.start}
                end={this.state.data.end}
                style={{position: "absolute", left: begin + "px", width: finish + "px"}}
            >
                {this.state.data.act}
            </span>
        );
    }
}

export default Act;