import React from 'react';
import './act.css';

class Act extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data
        };
    }


    render(){
        let start = this.state.data.start.split(':');
        let end = this.state.data.end.split(':');

        let begin  = (+start[0]) * 60 + (+start[1]) + 150;
        let finish = ((+end[0]) * 60 + (+end[1]) + 150);
        if(begin >= finish){
            begin = 150;
        }
        if(finish <= begin){
            finish = (24*60)+150;
        }
        finish = finish - begin;
        return (
            <span data-tip={this.state.data.act} className="act-slot" duration={finish} begin={this.state.data.start} end={this.state.data.end} style={{position: "absolute", left: begin + "px", width: finish + "px"}}>
                {this.state.data.act}
            </span>
        );
    }
}

export default Act;