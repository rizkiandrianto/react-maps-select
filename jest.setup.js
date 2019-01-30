import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

window.matchMedia = window.matchMedia
  || function fun() {
    return {
      matches: false,
      addListener: function add() {},
      removeListener: function rem() {}
    };
  };
