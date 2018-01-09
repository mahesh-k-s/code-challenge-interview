import { shallow } from '../../test';
import MediaPage from './media';

test('Must pass sanity test', () => {
  const wrapper = shallow(MediaPage);
  expect(true).toBeTruthy();
});
