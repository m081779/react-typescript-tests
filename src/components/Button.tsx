import * as React from 'react';

interface IButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  [propName:string]: any;
}

const Button:React.SFC<IButtonProps> = (props) => {
  return (
    <button {...props} onClick={props.onClick}>{props.children}</button>
  );
}

export default Button;