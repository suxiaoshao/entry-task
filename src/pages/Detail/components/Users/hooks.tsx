import {useCallback, useState} from 'react';
import {LayoutChangeEvent} from 'react-native';

export function useSize() {
  const [size, setSize] = useState({width: 0, height: 0});
  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const {width, height} = e.nativeEvent.layout;
    setSize({width, height});
  }, []);
  return {size, onLayout};
}
