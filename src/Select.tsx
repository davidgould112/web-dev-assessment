import * as React from 'react';
import './Select.css';

export interface Props {
  handleSelect(e: React.SyntheticEvent<HTMLSelectElement>): void
}

class Select extends React.Component<Props, object> {
  render() {
    const colors: string[] = ['red', 'blue', 'yellow', 'orange', 'purple', 'green']
    const { handleSelect } = this.props;

    return (
      <select defaultValue="Select your Favorite Colors!" onChange={(e) => handleSelect(e)}>
        <option key={0} disabled>Select your Favorite Colors!</option>
        {colors.map((color: string) => <option value={color} key={color}>{color}</option>)}
      </select>
    );
  }
}

export default Select;
