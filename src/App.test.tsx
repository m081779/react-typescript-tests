
import * as Enzyme from 'enzyme';
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
  });
  describe('incrementing and decrementing', () => {
    it('Count should increment by 1 when increment button is clicked', () => {
      const wrapper = Enzyme.mount(<App />);
      const increment = wrapper.find('button.increment');
      increment.simulate('click');
      expect(wrapper.state('count')).toBe(1);
    });
    it('Count should decrement by 1 when decrement button is clicked', () => {
      const wrapper = Enzyme.mount(<App />);
      const increment = wrapper.find('button.increment');
      increment.simulate('click');
      expect(wrapper.state('count')).toBe(1);
      const decrement = wrapper.find('button.decrement');
      decrement.simulate('click');
      expect(wrapper.state('count')).toBe(0);
    });
    it('Count should increment by 5 when count by 5 button is selected', () => {
      const wrapper = Enzyme.mount(<App />);
      const countByFive = wrapper.find('button.countByFive');
      countByFive.simulate('click');
      expect(wrapper.state('count')).toBe(0);
      const increment = wrapper.find('button.increment');
      increment.simulate('click');
      expect(wrapper.state('count')).toBe(5);
    });
    it('Count should decrement by 5 when count by 5 button is selected', () => {
      const wrapper = Enzyme.mount(<App />);
      const countByFive = wrapper.find('button.countByFive');
      countByFive.simulate('click');
      expect(wrapper.state('count')).toBe(0);
      const increment = wrapper.find('button.increment');
      increment.simulate('click');
      expect(wrapper.state('count')).toBe(5);
      const decrement = wrapper.find('button.decrement');
      decrement.simulate('click');
      expect(wrapper.state('count')).toBe(0);
    });
    it('Count should not go below zero', () => {
      const wrapper = Enzyme.mount(<App />);
      const countByFive = wrapper.find('button.countByFive');
      const increment = wrapper.find('button.increment');
      const decrement = wrapper.find('button.decrement');
      countByFive.simulate('click');
      expect(wrapper.state('count')).toBe(0);
      increment.simulate('click');
      expect(wrapper.state('count')).toBe(5);
      countByFive.simulate('click');
      decrement.simulate('click');
      expect(wrapper.state('count')).toBe(4);
      countByFive.simulate('click');
      decrement.simulate('click');
      expect(wrapper.state('count')).toBe(0);
    });
  })
})