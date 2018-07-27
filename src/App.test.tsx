import App from './App';
import {shallow} from 'enzyme';
import * as React from 'react';

import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  })
})