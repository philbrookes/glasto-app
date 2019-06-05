import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Day from "../Day/Day";

class DaySelector extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.prepareData(props.data);
    this.state = {
      selectedDay: 0
    };
  }

  prepareData(data) {
    let days = {
      "26": [],
      "27": [],
      "28": [],
      "29": [],
      "30": []
    };

    for (let index = 0; index < data.length; ++index) {
      let act = data[index];
      switch (act.date) {
        case "26/05/2019":
          days["26"].push(act);
          break;
        case "27/05/2019":
          days["27"].push(act);
          break;
        case "28/05/2019":
          days["28"].push(act);
          break;
        case "29/05/2019":
          days["29"].push(act);
          break;
        case "30/05/2019":
          days["30"].push(act);
          break;
        default:
          break;
      }
    }

    return days;
  }

  render() {
    return (
      <Tabs
        selectedIndex={this.state.selectedDay}
        onSelect={selectedDay => this.setState({ selectedDay })}
      >
        <TabList>
          <Tab>Wednesday</Tab>
          <Tab>Thursday</Tab>
          <Tab>Friday</Tab>
          <Tab>Saturday</Tab>
          <Tab>Sunday</Tab>
        </TabList>

        <TabPanel>
          <Day
            data={this.data["26"]}
            search={this.props.search}
            onlyStarred={this.props.onlyStarred}
          />
        </TabPanel>
        <TabPanel>
          <Day
            data={this.data["27"]}
            search={this.props.search}
            onlyStarred={this.props.onlyStarred}
          />
        </TabPanel>
        <TabPanel>
          <Day
            data={this.data["28"]}
            search={this.props.search}
            onlyStarred={this.props.onlyStarred}
          />
        </TabPanel>
        <TabPanel>
          <Day
            data={this.data["29"]}
            search={this.props.search}
            onlyStarred={this.props.onlyStarred}
          />
        </TabPanel>
        <TabPanel>
          <Day
            data={this.data["30"]}
            search={this.props.search}
            onlyStarred={this.props.onlyStarred}
          />
        </TabPanel>
      </Tabs>
    );
  }
}

export default DaySelector;
