import {useAppSelector} from '@/store/types';
import {useCallback, useEffect, useRef} from 'react';
import {LayoutChangeEvent, ScrollView} from 'react-native';

export function useScroll() {
  const scrollRef = useRef<ScrollView>(null);
  const detailY = useRef(0);
  const participantsY = useRef(0);
  const commentsY = useRef(0);
  const detailOnLayout = useCallback((event: LayoutChangeEvent) => {
    detailY.current = event.nativeEvent.layout.y;
  }, []);
  const participantsOnLayout = useCallback((event: LayoutChangeEvent) => {
    participantsY.current = event.nativeEvent.layout.y;
  }, []);
  const commentsOnLayout = useCallback((event: LayoutChangeEvent) => {
    commentsY.current = event.nativeEvent.layout.y;
  }, []);
  const tab = useAppSelector(state => state.eventDetail.tab);
  useEffect(() => {
    switch (tab) {
      case 'detail':
        scrollRef.current?.scrollTo({y: detailY.current});
        break;
      case 'comment':
        scrollRef.current?.scrollTo({y: commentsY.current});
        break;
      case 'participant':
        scrollRef.current?.scrollTo({y: participantsY.current});
        break;
    }
  }, [tab]);
  return {
    detailOnLayout,
    scrollRef,
    commentsOnLayout,
    participantsOnLayout,
  };
}
