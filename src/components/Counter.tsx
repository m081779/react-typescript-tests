import * as React from 'react';

interface ICounterProps {
  count: number;
}

class Counter extends React.Component<ICounterProps> {
  public render() {
    return (
      <h2>Count: {this.props.count}</h2>
    );
  }
}

export default Counter;