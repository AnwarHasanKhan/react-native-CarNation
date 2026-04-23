import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { navigate } from '../navigation/NavigationService';

const CustomButton = ({ title, bgcolor, textcolor, size, thick, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgcolor,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        alignSelf: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
      }}
      onPress={onPress}
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
    </TouchableOpacity>
  );
};

export default CustomButton;
