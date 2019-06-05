import React from "react";
import TimeTable from "../TimeTable/TimeTable";
import unlitStar from "./iconfinder_star_216411.png";
import litStar from "./iconfinder_star_285661.png";
import "./SearchBox.css";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
    this.state = {
      search: "",
      star: unlitStar,
      onlyStarred: false
    };
    this.starToggle = this.starToggle.bind(this);
    this.updateSearchValue = this.updateSearchValue.bind(this);
  }

  starToggle() {
    if (this.state.star === unlitStar) {
      this.setState({
        star: litStar,
        dataTip: "click to show all acts",
        onlyStarred: true
      });
    } else {
      this.setState({
        star: unlitStar,
        dataTip: "click to show only starred acts",
        onlyStarred: false
      });
    }
  }

  updateSearchValue(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.updateSearchValue}
        />
        <div className="searchstar-main">
          <div
            onClick={this.starToggle}
            style={{ backgroundImage: "url(" + this.state.star + ")" }}
            className="searchstar"
          />
          <span onClick={this.starToggle} className="searchstar-fav">Toggle Only Favourites</span>
        </div>
        <TimeTable
          data={this.data}
          search={this.state.search}
          onlyStarred={this.state.onlyStarred}
        />
      </React.Fragment>
    );
  }
}

export default SearchBox;
