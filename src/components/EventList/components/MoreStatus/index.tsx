import React, {useMemo} from 'react';
import SaveBottom from '@/components/SaveBottom';
import {Pressable, Text, View} from 'react-native';
import {ResponseTypeWithStatus} from '@/hooks/useRequest';
import useI18n from '@/i18n/useI18n';
import styles from './styles';

export interface MoreStatusProps {
  more: ResponseTypeWithStatus<{}>;
  hasMore: boolean;
  refetch: () => void;
  hidden: boolean;
}

export default function ({
  more,
  hasMore,
  refetch,
  hidden = false,
}: MoreStatusProps) {
  const t = useI18n();
  const render = useMemo(() => {
    if (!hasMore) {
      return <Text style={styles.noMore}>{t('no_more')}</Text>;
    }
    switch (more.type) {
      case 'loading':
        return <Text style={styles.loading}>{t('loading')}</Text>;
      case 'apiError':
      case 'jsonError':
      case 'networkError':
        return (
          <Pressable onPress={refetch}>
            <Text>{t('api_error3')}</Text>
          </Pressable>
        );
    }
  }, [hasMore, more.type, refetch, t]);
  if (hidden) {
    return null;
  }

  return (
    <View style={styles.container}>
      {render}
      <SaveBottom />
    </View>
  );
}
