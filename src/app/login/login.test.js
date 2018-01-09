import { shallow } from '../../test';
import LoginPage from './login';

test('Must pass sanity test', () => {
  const wrapper = shallow(LoginPage);
  expect(true).toBeTruthy();
});
