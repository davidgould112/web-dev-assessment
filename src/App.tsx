import * as React from 'react';
import './App.css';
import Select from './Select'

interface IState {selected: string, listed: string[]};

interface Props {};

class App extends React.Component<Props, IState> {

  constructor(props: Props){
    super(props)
    this.state = {
      selected: '',
      listed: []
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSelect(e: React.SyntheticEvent<HTMLSelectElement>): void {
    let target = e.target as HTMLSelectElement
    this.setState({selected: target.value})
  }

  handleAdd(): void {
    let newList: string[] = this.state.listed;
    if (newList.indexOf(this.state.selected) === -1) {
      newList.push(this.state.selected);
      this.setState({listed: newList})
    } 
  }

  handleDelete(ev: React.SyntheticEvent<HTMLSpanElement>): void {
    let target = ev.target as HTMLSpanElement
    let newList: string[] = this.state.listed.filter(color => color !== target.id)
    this.setState({listed: newList})
  }

  render() {

    return (
      <div className="App">
        <Select handleSelect={this.handleSelect}/>
        <button className="AddButton" onClick={this.handleAdd}> Add to List </button>
        <ul>
          {this.state.listed.map((color: string) => <li key={color}>
              {color} 
              <button className="Delete" id={color} onClick={this.handleDelete}>
                delete
              </button>
            </li>
          )}
        </ul>
      </div>
    )

  }

}

export default App;
