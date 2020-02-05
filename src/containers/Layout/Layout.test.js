import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'enzyme';


function LayoutWrapper() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

it('renders Layout', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LayoutWrapper />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render correctly with no props', () => {
  const component = render(<LayoutWrapper/>);
  
  expect(component).toMatchSnapshot();
});
