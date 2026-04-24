import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  icon,
  rightIcon,
  onRightIconPress,
  keyboardType,
  secureTextEntry,
  tintColor,
  inputbg,
}) => {
  return (
    <View style={[styles.inputbox, { backgroundColor: inputbg }]}>
      <Image
        source={icon}
        style={{ width: 20, height: 20, tintColor: tintColor }}
      />

      <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}>
        <Text style={{ color: '#dddddd', fontWeight: '500' }}>+91</Text>

        <TextInput
          placeholder={placeholder}
          placeholderTextColor={'grey'}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          style={{ flex: 1, color: '#dddddd', fontWeight: '500' }}
        />

        {value >0 && rightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            <Image source={rightIcon} style={{ width: 15, height: 15,tintColor: tintColor }} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputbox: {
    width: '85%',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    gap: 5,
    overflow: 'hidden',
  },
});
