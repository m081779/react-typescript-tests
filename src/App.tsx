import * as React from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

interface IAppState {
  count: number;
}

class App extends React.Component<{},IAppState> {
  public state: IAppState = {
    count: 0
  }

  public handleClickIncrement = (event: React.MouseEvent<HTMLButtonElement>):boolean => {
    let count: number = this.state.count;
    count++;
    this.setState({count});
    return true;
  }

  public handleClickDecrement = (event: React.MouseEvent<HTMLButtonElement>):boolean => {
    let count: number = this.state.count;
    if (count>0){ count-- }
    this.setState({count});
    return true;
  }

  public render() {
    return (
      <>
        <Counter count={this.state.count}/>
        <Button onClick={this.handleClickIncrement}>Increment</Button>
        <Button onClick={this.handleClickDecrement}>Decrement</Button>
      </>
    );
  }
}

export default App;
