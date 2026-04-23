import { Text, Pressable, Animated } from 'react-native';
import React, { useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton2 = ({
  onPress,
  title,
  bgcolor,
  textcolor,
  size,
  thick,
  gradientColors,
}) => {
  const scale = useRef(new Animated.Value(1)).current;

//   const handlePressIn = () => {
//     Animated.spring(scale, {
//       toValue: 0.96,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handlePressOut = () => {
//     Animated.spring(scale, {
//       toValue: 1,
//       friction: 4,
//       tension: 40,
//       useNativeDriver: true,
//     }).start();
//   };

  return (
    <Pressable>
      <Animated.View
        style={{
          transform: [{ scale }],
          width: '100%',
          alignSelf: 'center',
        }}
      >
        <LinearGradient
          colors={gradientColors}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: textcolor,
              fontSize: size,
              fontWeight: thick,
            }}
          >
            {title}
          </Text>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
};

export default CustomButton2;
