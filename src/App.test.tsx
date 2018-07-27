
import * as Enzyme from 'enzyme';
// import {shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import App from './App';
import Button from './components/Button';



Enzyme.configure({ adapter: new Adapter() });
describe('<App />', () => {
  it('renders without crashing', () => {
    Enzyme.shallow(<App />);
  });
  it('should handle the click event', () => {
    const mockfunction = jest.fn();
    const wrapper = Enzyme.shallow(<Button onClick={mockfunction}/>);
    wrapper.simulate('click');
    expect(mockfunction).toHaveBeenCalledTimes(1)
  })
})