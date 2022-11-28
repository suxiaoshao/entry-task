import React, {LegacyRef} from 'react';
import {Image, ScrollView, View, ViewProps} from 'react-native';
import {EventItem} from '@/service/getEventList';
import styles from './styles';
import Divider from '@/components/Divider';
import When from './components/When';
import Where from './components/Where';
import Description from './components/Description';

export interface DetailTabProps
  extends Pick<
      EventItem,
      | 'images'
      | 'description'
      | 'begin_time'
      | 'end_time'
      | 'location_detail'
      | 'location'
    >,
    ViewProps {}

function DetailTab(
  {
    description,
    images,
    begin_time,
    end_time,
    location_detail,
    location,
    ...props
  }: DetailTabProps,
  ref: LegacyRef<View>,
) {
  return (
    <View {...props} style={styles.container} ref={ref}>
      <ScrollView
        style={styles.images}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={styles.imageHeader} />
        {images.map(value => (
          <Image key={value} style={styles.image} source={{uri: value}} />
        ))}
        <View style={styles.imageFooter} />
      </ScrollView>
      <Description description={description} />
      <Divider style={styles.divider} />
      <When begin_time={begin_time} end_time={end_time} />
      <Divider style={styles.divider} />
      <Where location={location} location_detail={location_detail} />
    </View>
  );
}

export default React.forwardRef(DetailTab);
