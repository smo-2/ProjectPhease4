import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter:new Adapter()});  
describe("App useState Testing",()=> {

  // static value 
  it("Testing Value",()=> {
    let wrapper  = shallow(<App/>)       
      let ref = wrapper.instance();  
      
  })
  it("Testing",()=> {
    let wrapper  = shallow(<App/>)       
    let ref = wrapper.instance;  
    expect("1").toEqual("1"); 
})
})