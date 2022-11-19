import React, {useState} from 'react';
import {View} from 'react-native';
import TimeInput from './components/TimeInput';
import useStyles from './styles';
import ChannelsInput from '@/pages/Home/pages/Search/components/ChannelsInput';
import {EventListSearchTime} from '@/store/eventList/types';
import SubmitButton from './components/SubmitButton';

export default function () {
  const styles = useStyles();
  const [time, setTime] = useState<EventListSearchTime>();
  const [channels, setChannels] = useState<number[]>();
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TimeInput time={time} setTime={setTime} />
        <ChannelsInput channels={channels} setChannels={setChannels} />
      </View>
      <SubmitButton time={time} channels={channels} />
    </View>
  );
}
