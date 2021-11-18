import React from 'react';
import { render } from '../../../test/test-utils';
import { MenuView } from './MenuView';

describe('<MenuItemView />', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<MenuView />);
    expect(asFragment()).toMatchSnapshot();
  });
});
