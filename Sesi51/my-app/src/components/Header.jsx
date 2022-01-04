import React, { Component } from "react";
import PropTypes from "prop-types";
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Oki ",
      counter: 0,
    };
  }

  changeName = (newName) => {
    console.log(this.props);
    this.setState({
      name: this.state.name + newName,
    });
  };

  changeCount = (type) => {
    const oldCounter = this.state.counter;

    switch (type) {
      case "increment":
        this.setState({
          counter: oldCounter > 9 ? 10 : oldCounter + 1,
        });
        break;
      case "decrement":
        this.setState({
          counter: oldCounter < 1 ? 0 : oldCounter - 1,
        });
        break;
      default:
    }
  };
  render() {
    // <> -> React Fragment: tidak perlu adanya tag <div> baru
    return (
      <div>
        <h1>Batch {this.props.batch}</h1>

        <img src={this.props.logo} alt="logo" />

        <h3>Halo {this.state.name}</h3>
        <button onClick={() => this.changeName("FSD OCBC Materi React!!!!!!!")}>
          Ganti nama, gan!
        </button>

        <hr />

        <h4>Let's count!</h4>

        <h5>{this.state.counter}</h5>

        <button onClick={() => this.changeCount("increment")}>
          Tambahkan dengan 1
        </button>
        <br />
        <button onClick={() => this.changeCount("decrement")}>
          Kurangkan dengan 1
        </button>
      </div>
    );
  }
}
Header.propTypes = {
  batch: PropTypes.string,
  logo: PropTypes.string,
};

export default Header;
