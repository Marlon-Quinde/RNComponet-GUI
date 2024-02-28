import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position     = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('TT'));

    
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(position, {
      toValue: -100,
      useNativeDriver: true,
      duration: 700,
    }).start();
  };

  const startMovingPosition = (initPosition: number, duration: number ) => {
    position.setValue(initPosition)

    Animated.timing(position, {
        toValue: 0,
        duration: duration,
        useNativeDriver: true,
        // easing: Easing.bounce,
      }).start();
  }

  return {
    position,
    opacity,
    fadeIn,
    fadeOut,
    startMovingPosition
  }
};
