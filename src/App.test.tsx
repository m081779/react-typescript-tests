
import * as Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import App from './App';



Enzyme.configure({ adapter: new Adapter() });
describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  })
})