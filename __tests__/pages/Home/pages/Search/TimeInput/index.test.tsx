import TimeInput from '@/pages/Home/pages/Search/components/TimeInput';
import DateInput from '@/pages/Home/pages/Search/components/TimeInput/components/Laterbutton/DateInput';
import TimeButton from '@/pages/Home/pages/Search/components/TimeInput/components/TimeButton';
import {EventListSearchTime} from '@/store/eventList/types';
import {today} from '@/utils/time';
import {renderWithProviders} from '@tests/config/renderWithProviders';
import dayjs from 'dayjs';
import React, {useState} from 'react';
import {Text} from 'react-native';
import {act} from 'react-test-renderer';

const label = [
  'anytime',
  'today',
  'tomorrow',
  'this_week',
  'this_month',
  'later',
];

describe('TimeInput', () => {
  const Component = () => {
    const [time, setTime] = useState<EventListSearchTime>();
    return <TimeInput time={time} setTime={setTime} />;
  };
  const render = renderWithProviders(<Component />);
  const timeRender = render.root.findAllByType(TimeButton);
  it('render', () => {
    const title = render.root.findAllByType(Text)[0];
    expect(title.props.children).toBe('date');
    expect(timeRender.length).toBe(6);
    timeRender.forEach((item, index) => {
      expect(item.props.children).toBe(label[index]);
    });
  });
  it('input', () => {
    // click to select
    expect(timeRender[0].props.selected).toBeFalsy();
    act(() => {
      timeRender[0].props.onPress();
    });
    expect(timeRender[0].props.selected).toBeTruthy();
    // double click not chanel
    expect(timeRender[3].props.selected).toBeFalsy();
    act(() => {
      timeRender[3].props.onPress();
    });
    expect(timeRender[3].props.selected).toBeTruthy();
    expect(timeRender[0].props.selected).toBeFalsy();
    act(() => {
      timeRender[3].props.onPress();
    });
    expect(timeRender[3].props.selected).toBeTruthy();
  });
  it('later button', () => {
    expect(render.root.findAllByType(DateInput).length).toBe(0);
    act(() => {
      timeRender[5].props.onPress();
    });
    expect(timeRender[5].props.selected).toBeTruthy();
    expect(timeRender[0].props.selected).toBeFalsy();
    expect(timeRender[3].props.selected).toBeFalsy();
    const dataInput = render.root.findAllByType(DateInput);
    expect(dataInput.length).toBe(2);
    const date = dataInput[0].findAllByType(Text)[0];
    expect(date.props.children).toBe(dayjs(today().after).format('DD/MM/YYYY'));
    const time = dataInput[1].findAllByType(Text)[0];
    expect(time.props.children).toBe(
      dayjs(today().before).format('DD/MM/YYYY'),
    );
  });
});
