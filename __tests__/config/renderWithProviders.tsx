import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../src/store';

export function renderWithProviders(ui: React.ReactElement) {
  function Wrapper(): JSX.Element {
    return <Provider store={store}>{ui}</Provider>;
  }
  return renderer.create(<Wrapper />);
}
