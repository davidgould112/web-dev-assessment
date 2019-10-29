import * as React from 'react';

export interface Props {
  options: string[];
}

class Display extends React.Component<Props, object> {
  render() {
    const { options } = this.props;

    return (
      <select className="select">
        {this.props.options.map((color: string) => <option>color</option>)}
      </select>
    );
  }
}

export default Display;