import Channel, {ChannelProps} from '@/components/Channel';
import React from 'react';
import styles from './styles';

export interface SearchChannelProps extends ChannelProps {
  selected: boolean;
}

export default function ({selected, ...props}: SearchChannelProps) {
  return (
    <Channel
      {...props}
      boxStyle={[styles.channelBox, selected && styles.containerSelected]}
      textStyle={[styles.channelText, selected && styles.textSelected]}
    />
  );
}
