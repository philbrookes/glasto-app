import React from 'react';
import ReactTooltip from 'react-tooltip';

import Stage from '../Stage/Stage';
import Timetrack from '../Timetrack/Timetrack';

import './Day.css';
import unlitStar from './iconfinder_star_216411.png';
import litStar from './iconfinder_star_285661.png';

class Day extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.prepareData(this.props.data),
            star: unlitStar,
            dataTip: "click to show only starred acts",
            onlyStarred: false
        };
        this.starToggle = this.starToggle.bind(this);
    }

    starToggle(){
        if(this.state.star === unlitStar){
            this.setState({star: litStar, dataTip: "click to show all acts", onlyStarred: true})
        } else {
            this.setState({star: unlitStar, dataTip: "click to show only starred acts", onlyStarred: false})
        }
    }

    prepareData(data){
        let stages = {};

        for(let index=0; index < data.length; index++){
            let act = data[index];
            if(typeof stages[act.stage] === "undefined"){
                stages[act.stage] = [];
            }
            stages[act.stage].push(act);
        }
        return stages;
    }

    render(){
        const stages = [];
        let stageNames = Object.keys(this.state.data);
        for(let index=0; index < stageNames.length; index++){
            let stage = this.state.data[stageNames[index]];
            stages.push(<Stage onlyStarred={this.state.onlyStarred} key={stageNames[index]} data={ stage } name={stageNames[index]}></Stage>);
        }
        return (
            <div>
                <ReactTooltip/>
                <div onClick={this.starToggle} data-tip={this.state.dataTip} style={{backgroundImage: "url(" + this.state.star + ")"}} className="daystar"></div>
                <Timetrack/>
                {stages}
            </div>
        );
    }
}

export default Day;