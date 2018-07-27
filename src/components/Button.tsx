import * as React from 'react';

interface IButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => boolean;
  // children?: string;
  [propName:string]: any;
}

class Button extends React.Component<IButtonProps>{
  public render() {
    return (
      <button {...this.props} onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
}

export default Button;