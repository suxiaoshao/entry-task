import 'react-native';
import React from 'react';
import Input from '../../src/components/Input';
import renderer, {act} from 'react-test-renderer';
import {Image, TextInput, View} from 'react-native';

describe('Input', () => {
  it('input active', () => {
    const activeContainStyle = {color: 'red'};
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const inputRender = renderer.create(
      <Input
        onBlur={onBlur}
        onFocus={onFocus}
        activeContainStyle={activeContainStyle}
      />,
    );
    const inputContain = inputRender.root.findAllByType(View)[0];
    const input = inputRender.root.findAllByType(TextInput)[0];

    act(() => {
      input.props.onFocus();
    });
    expect(inputContain.props.style[2]).toEqual(activeContainStyle);
    expect(onFocus).toBeCalledTimes(1);
    act(() => {
      input.props.onBlur();
    });
    expect(inputContain.props.style[2]).toBeFalsy();
    expect(onBlur).toBeCalledTimes(1);
  });
  it('input icon', () => {
    const inputRender = renderer.create(<Input />);
    const inputIcon = inputRender.root.findAllByType(Image)[0];
    const iconSource = {
      uri: '',
    };
    expect(inputIcon).toBeFalsy();
    act(() => {
      inputRender.update(<Input iconSource={iconSource} />);
    });
    const inputIcon2 = inputRender.root.findAllByType(Image)[0];
    expect(inputIcon2.props.source).toEqual(iconSource);
  });
});
