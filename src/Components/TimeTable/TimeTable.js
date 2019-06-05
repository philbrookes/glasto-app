import React from "react";
import DaySelector from "./DaySelector/DaySelector";

class TimeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render() {
    return (
      <div className="TimeTable">
        <DaySelector
          data={this.state.data}
          search={this.props.search}
          onlyStarred={this.props.onlyStarred}
        />
      </div>
    );
  }
}

export default TimeTable;
