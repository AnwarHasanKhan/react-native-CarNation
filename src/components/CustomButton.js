import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { navigate } from '../navigation/NavigationService';
import { Colors } from '../assets/Colors';

const CustomButton = ({ title, size, thick, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: disabled ? Colors.featureBg : Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        alignSelf: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
      }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={{
          color: disabled ? Colors.textMuted : Colors.appBg,
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
