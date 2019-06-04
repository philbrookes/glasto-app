import React from 'react';
import Stage from '../Stage/Stage';
import Timetrack from '../Timetrack/Timetrack';
import ReactTooltip from 'react-tooltip';

class Day extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.prepareData(this.props.data)
        };
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
            stages.push(<Stage key={stageNames[index]} data={ stage } name={stageNames[index]}></Stage>);
        }
        return (
            <div>
                <ReactTooltip/>
                <Timetrack/>
                {stages}
            </div>
        );
    }
}

export default Day;