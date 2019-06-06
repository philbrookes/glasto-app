import React from "react";
import ReactTooltip from "react-tooltip";

import Stage from "../Stage/Stage";
import Timetrack from "../Timetrack/Timetrack";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.prepareData(this.props.data),
      dataTip: "click to show only starred acts",
      indicateLeft: 0,
      indicateWidth: 0
    };

    this.setIndicate = this.setIndicate.bind(this);
  }

  prepareData(data) {
    let stages = {};

    for (let index = 0; index < data.length; index++) {
      let act = data[index];
      if (typeof stages[act.stage] === "undefined") {
        stages[act.stage] = [];
      }
      stages[act.stage].push(act);
    }
    return stages;
  }


  setIndicate(left, width) {
    this.setState({indicateLeft: left, indicateWidth: width});
  }

  render() {
    const stages = [];
    let stageNames = Object.keys(this.state.data);
    for (let index = 0; index < stageNames.length; index++) {
      let stage = this.state.data[stageNames[index]];
      stages.push(
        <Stage
          onlyStarred={this.props.onlyStarred}
          key={stageNames[index]}
          data={stage}
          name={stageNames[index]}
          search={this.props.search}
          setIndicate={this.setIndicate}
        />
      );
    }
    return (
      <div>
        <ReactTooltip />
        <Timetrack indicateLeft={this.state.indicateLeft} indicateWidth={this.state.indicateWidth}/>
        {stages}
      </div>
    );
  }
}

export default Day;
