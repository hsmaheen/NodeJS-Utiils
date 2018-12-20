import React, { Component } from 'react';
import Child from './Child/Child';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childCount: 3
    };
  }

  render() {
    const { childCount } = this.state;
    const { count } = this.props;
      const childs = Array.from(Array(count), (e, i) => {
      return <Child key={i} />;
    });

    return (
      <div>
        <p> Parent Component</p>
        <div>{childs}</div>
      </div>
    );
  }
}

export default Parent;
