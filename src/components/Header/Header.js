import { Image, Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          gap: 5,
        }}
      >
        <Text
          style={styles.headertxt}
        >
          Location
        </Text>
        <View style={{ flex: 1, flexDirection: 'row', gap: 5 ,alignItems:'center'}}>
          <Image
            source={require('../../assets/icons/location.png')}
            style={{ width: 20, height: 20, tintColor: '#fff' }}
          />
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#eeeeee' }}>
            B4 Restaurant, Viraj Khand, Gomtinagar
          </Text>
        </View>
      </View>
      <View
        style={styles.headericon}
      >
        <Image
          source={require('../../assets/icons/shopping-cart.png')}
          style={{ width: 20, height: 20 }}
        />
      </View>
    </View>
  );
};

export default Header;
