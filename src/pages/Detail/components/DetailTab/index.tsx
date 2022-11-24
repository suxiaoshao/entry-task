import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {EventItem} from '@/service/getEventList';
import styles from './styles';
import Divider from '@/components/Divider';
import When from './components/When';
import Where from './components/Where';

export interface DetailTabProps
  extends Pick<
    EventItem,
    | 'images'
    | 'description'
    | 'begin_time'
    | 'end_time'
    | 'location_detail'
    | 'location'
  > {}

export default function ({
  description,
  images,
  begin_time,
  end_time,
  location_detail,
  location,
}: DetailTabProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.images}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={styles.imageHeader} />
        {images.map(value => (
          <Image style={styles.image} source={{uri: value}} />
        ))}
        <View style={styles.imageFooter} />
      </ScrollView>
      <Text style={styles.description}>{description}</Text>
      <Divider style={styles.divider} />
      <When begin_time={begin_time} end_time={end_time} />
      <Divider style={styles.divider} />
      <Where location={location} location_detail={location_detail} />
    </View>
  );
}
