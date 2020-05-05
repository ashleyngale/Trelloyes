import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Items';
import { createRenderer } from 'react-dom/test-utils';
import Item from './Items.js';

describe('Item component', ()=> {
it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(<item />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders amount of card clicks with no clicks', ()=> {
  const tree = renderer 
  .create(<item name="items" item={0}/>)
  .toJSON();
  expected(tree).toMatchSnapSHot();
});