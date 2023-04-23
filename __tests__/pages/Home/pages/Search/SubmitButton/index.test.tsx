import SubmitButton from '@/pages/Home/pages/Search/components/SubmitButton';
import {
  renderWithProviders,
  updateWithProviders,
} from '@tests/config/renderWithProviders';
import React from 'react';
import {Pressable} from 'react-native';
import {act} from 'react-test-renderer';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      dispatch: mockedNavigate,
    }),
  };
});

describe('SubmitButton', () => {
  const render = renderWithProviders(
    <SubmitButton time={undefined} channels={undefined} />,
  );
  const pressButton = render.root.findByType(Pressable);
  it('render', () => {
    expect(pressButton.props.disabled).toBeTruthy();
  });
  it('press', () => {
    act(() => {
      pressButton.props.onPress();
    });
    expect(mockedNavigate).toBeCalledTimes(0);

    // only time
    act(() => {
      updateWithProviders(
        <SubmitButton time={{type: 'today'}} channels={undefined} />,
        render,
      );
    });
    expect(render.root.findByType(Pressable).props.disabled).toBeTruthy();
    act(() => {
      render.root.findByType(Pressable).props.onPress();
    });
    expect(mockedNavigate).toBeCalledTimes(0);

    // only channel
    act(() => {
      updateWithProviders(
        <SubmitButton time={undefined} channels={[1]} />,
        render,
      );
    });
    expect(render.root.findByType(Pressable).props.disabled).toBeTruthy();
    act(() => {
      render.root.findByType(Pressable).props.onPress();
    });
    expect(mockedNavigate).toBeCalledTimes(0);

    // all
    act(() => {
      updateWithProviders(
        <SubmitButton time={{type: 'today'}} channels={[1]} />,
        render,
      );
    });
    expect(render.root.findByType(Pressable).props.disabled).toBeFalsy();
    act(() => {
      render.root.findByType(Pressable).props.onPress();
    });
    expect(mockedNavigate).toBeCalledTimes(1);
  });
});
