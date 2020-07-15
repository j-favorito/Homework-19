import React, { Component } from "react";
import Header from '../header/Header';
import Table from '../table/Table';
import '../container/Container.css';




let flag = 0;


class Container extends Component {
  constructor(props) {
    super(props)
    this.state = { friends: props.friends, flag }

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
      <table className="friend-table">
        <Header
          firstHandleClick={this.firstHandleClick}
          lastHandleClick={this.lastHandleClick}
          phoneHandleClick={this.phoneHandleClick} />
        <Table friends={this.state.friends} />
      </table>
      </>
    );

  }
}

export default Container;