import React from 'react';
import './stage.css';

import Act from '../Act/Act';

class Stage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
            name: this.props.name
        };
    }


    render(){
        let acts = [];
        for(let index=0; index < this.state.data.length; index++){
            let act = this.state.data[index];
            if(act.act === "TBA"){
                continue;
            }
            acts.push(<Act key={act.act} data={ act }></Act>);
        }
        return (
            <div className="stage-track">
                <span className="stage-name" data-tip={this.state.name}>
                    {this.state.name}
                </span>
                {acts}
            </div>
        );
    }
}

export default Stage;