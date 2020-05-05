import React, { Component } from 'react';
import List from './List'
import './App.css';
import Item from './Items.test.js';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    <item name="item_clicked" amount={0}/>
  <item name="clicked" amount={13}/>
    const { store } = this.props
    return (
      <item item={item}/>
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;