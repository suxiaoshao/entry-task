import React, {useMemo} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useSize} from '../../../Users/hooks';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import useI18n from '@/i18n/useI18n';

export interface DescriptionProps {
  description: string;
}

export default function ({description}: DescriptionProps) {
  const {
    onLayout,
    size: {height},
  } = useSize();
  const tooLong = useMemo(() => height > 180, [height]);
  const [showMore, setShowMore] = React.useState(false);
  const t = useI18n();

  return (
    <View style={[styles.container, showMore && styles.containerShowMore]}>
      <Text onLayout={onLayout} style={styles.description}>
        {description}
      </Text>
      {tooLong && !showMore && (
        <>
          <LinearGradient
            angle={180}
            colors={[
              'rgba(250, 249, 252, 0.0001)',
              'rgba(250, 249, 252, 0.7)',
              '#FAF9FC',
            ]}
            locations={[0, 0.4075, 1]}
            style={styles.tooLongBackground}
          />
          <Pressable style={styles.button} onPress={() => setShowMore(true)}>
            <Text style={styles.buttonLabel}>{t('view_all')}</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}
