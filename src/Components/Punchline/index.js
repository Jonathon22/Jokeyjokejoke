import React, { Component } from 'react';

class Punchline extends Component {
  render() {
    const { punchline } = this.props;
    return <h2 className="Punchline">
      {punchline}
    </h2>;
  }
}

export default Punchline;
