import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

const cardArray = [
  { id: 'a', title: 'First card', content: 'lorem ipsum' },
  { id: 'b', title: 'Second card', content: 'lorem ipsum' }
]

describe( 'Card component', () => {
  // Smoke Tests
    it( 'renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<List header="test header" cards={cardArray}/>, div);
      ReactDOM.unmountComponentAtNode(div);
    });

  //Snapshot Test
    it('renders the UI as expected', () => {
      const tree = renderer
      .create(<List header="Test card" cards={cardArray} />)
      .toJSON();
      expect(tree).toMatchSnapshot();
    });

});