import * as React from "react";

interface IProps {
  onClick: Function;
  label: string;
}

class Button extends React.Component<IProps> {
  public render() {
    return (
      <button onClick={e => this.props.onClick(e)}>
        {this.props.label}
      </button>
      
    );
  }
}

export default Button;
