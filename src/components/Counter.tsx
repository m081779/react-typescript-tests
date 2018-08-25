import * as React from 'react';

interface ICounterProps {
  count: number;
}

const Counter:React.SFC<ICounterProps> = ({ count }) => {
  return (
    <h2>Count: {count}</h2>
  );
}

export default Counter;