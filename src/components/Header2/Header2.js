import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Header2 = ({title,subtitle, onPress}) => {
  return (
    <View style={styles.header}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={onPress}
              activeOpacity={0.7}
            >
              <Image
            source={require('../../assets/icons/back.png')}
            style={{ width: 25, height: 25, tintColor: '#fff' }}
          />
            </TouchableOpacity>
            <View>
              <Text style={styles.headerTitle}>{title}</Text>
              <Text style={styles.headerSub}>{subtitle}</Text>
            </View>
          </View>
  );
};

export default Header2;
