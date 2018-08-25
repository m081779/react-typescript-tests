import * as React from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

interface IAppState {
  count: number;
  incrementer: number
}

class App extends React.Component<{},IAppState> {
  public state: IAppState = {
    count: 0,
    incrementer: 1
  }

  public handleClickIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    let count: number = this.state.count;
    count+=this.state.incrementer;
    this.setState({count});
  }

  public handleClickDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    let count: number = this.state.count;
    const { incrementer } = this.state;
    count - incrementer > 0 ?  count -= incrementer : count = 0
    this.setState({count});
  }

  public countByFive = () => {
    this.setState(prevState => (
      {incrementer: prevState.incrementer !== 5 ? 5 : 1}
    ))
  }

  public render() {
    return (
      <>
        <Counter count={this.state.count}/>
        <Button className='increment' onClick={this.handleClickIncrement}>Increment</Button>
        <Button className='decrement' onClick={this.handleClickDecrement}>Decrement</Button>
        <Button className='countByFive' onClick={this.countByFive}>{this.state.incrementer !== 5 ? 'Count By 5' : 'Count By 1'}</Button>
      </>
    );
  }
}

export default App;
