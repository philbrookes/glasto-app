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
            let starredActs = JSON.parse(localStorage.getItem("starred-acts"));
            if(!starredActs){
                starredActs = {};
            }
            let act = this.state.data[index];
            if(
                act.act === "Tba" 
                || (this.props.onlyStarred && (typeof starredActs[act.id] === "undefined"))
                || (this.props.search.length > 0 && !act.act.toLowerCase().includes(this.props.search))
            )
            {
                continue;
            }
            act.index = index;
            acts.push(<Act key={act.index} data={ act }></Act>);
        }
        if(acts.length <= 0){
            return ("");
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