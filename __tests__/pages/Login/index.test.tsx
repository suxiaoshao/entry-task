import 'react-native';
import React from 'react';
import {act} from 'react-test-renderer';
import {Pressable, Text} from 'react-native';
import Login from '../../../src/pages/Login';
import {renderWithProviders} from '../../config/renderWithProviders';
import InputContent from '../../../src/pages/Login/components/InputContent';
import Input from '../../../src/components/Input';
import store from '../../../src/store';
jest.mock('../../../src/store/login/actionCreator', () => {
  return {
    login: () => {
      return {type: 'SET_TOKEN', payload: 'token'};
    },
  };
});

describe('Login', () => {
  const loginRender = renderWithProviders(<Login />);
  const button = loginRender.root.findAllByType(Pressable)[0];
  const inputContent = loginRender.root.findAllByType(InputContent)[0];
  const [usernameInput, passwordInput] = inputContent.findAllByType(Input);
  const [usernameError, passwordError] = inputContent.findAllByType(Text);
  it('verify input', () => {
    expect(usernameError.props.children).toBeUndefined();
    expect(passwordError.props.children).toBeUndefined();
    act(() => {
      button.props.onPress();
    });
    expect(usernameError.props.children).toBe('username_error');
    expect(passwordError.props.children).toBeUndefined();
    act(() => {
      usernameInput.props.onChangeText('user_1');
    });
    expect(usernameError.props.children).toBeUndefined();
    act(() => {
      button.props.onPress();
    });
    expect(passwordError.props.children).toBe('password_error');
    act(() => {
      usernameInput.props.onChangeText('22');
    });
    expect(passwordError.props.children).toBe('password_error');
    act(() => {
      passwordInput.props.onChangeText('123456');
    });
    expect(passwordError.props.children).toBeUndefined();
  });
  it('login', () => {
    act(() => {
      usernameInput.props.onChangeText('user_1');
    });
    act(() => {
      button.props.onPress();
    });
    expect(store.getState().login.token).toBe('token');
  });
});
