import React, { Component } from "react";
import Header from './components/header/Header';
import Table from './components/table/Table'
import friends from "./friends.json";
import "./App.css"

let flag = 0;


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { friends, flag }

  }

  firstHandleClick = (e) => {
    e.preventDefault();
    console.log(this.state.flag);
    if (this.state.flag === 0 || this.state.flag === -1) {
      this.setState({
        flag: 1,
        friends: this.state.friends.sort((a, b) => a.firstName.localeCompare(b.firstName))
      })
      this.render();
    } else if (this.state.flag === 1) {
      this.setState({
        flag: -1,
        friends: this.state.friends.sort((a, b) => b.firstName.localeCompare(a.firstName))
      })
      this.render();
    }
  }

  lastHandleClick = (e) => {
    e.preventDefault();
    console.log(this.state.flag);
    if (this.state.flag === 0 || this.state.flag === -1) {
      this.setState({
        flag: 1,
        friends: this.state.friends.sort((a, b) => a.lastName.localeCompare(b.lastName))
      })
      this.render();
    } else if (this.state.flag === 1) {
      this.setState({
        flag: -1,
        friends: this.state.friends.sort((a, b) => b.lastName.localeCompare(a.lastName))
      })
      this.render();
    }
  }

  phoneHandleClick = (e) => {
    e.preventDefault();
    console.log(this.state.flag);
    if (this.state.flag === 0 || this.state.flag === -1) {
      this.setState({
        flag: 1,
        friends: this.state.friends.sort((a, b) => a.phoneNumber - b.phoneNumber)
      })
      this.render();
    } else if (this.state.flag === 1) {
      this.setState({
        flag: -1,
        friends: this.state.friends.sort((a, b) => b.phoneNumber - a.phoneNumber)
      })
      this.render();
    }
  }



  render() {
    return (
      <>
        <Header />
        <div className="row">
          <div className="col-lg-3 table-head"></div>
          <h3 className="col-lg-2 table-head first-sort" onClick={this.firstHandleClick}>First Name</h3>
          <h3 className="col-lg-2 table-head last-sort" onClick={this.lastHandleClick}>Last Name</h3>
          <h3 className="col-lg-2 table-head phone-sort" onClick={this.phoneHandleClick}>Phone Number</h3>
          <div className="col-lg-3 table-head"></div>
        </div>
        {this.state.friends.map(friend => (
          <Table
            id={friend.id}
            key={friend.id}
            first={friend.firstName}
            last={friend.lastName}
            image={friend.image}
            phone={friend.phoneNumber}
          />
        ))}
      </>
    );

  }
}

export default App;
