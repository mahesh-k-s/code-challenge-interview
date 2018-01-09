import { shallow } from '../../test';
import MediaDescriptionPage from './media-description';

test('Must pass sanity test', () => {
  const wrapper = shallow(MediaDescriptionPage);
  expect(true).toBeTruthy();
});
