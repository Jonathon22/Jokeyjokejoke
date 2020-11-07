import React, { Component } from 'react';

class Setup extends Component {
  render() {
    const { setup } = this.props;
    return <h2 className="setup">
      {setup}
    </h2>;
  }
}

export default Setup;
