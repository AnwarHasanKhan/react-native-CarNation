import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { navigate } from '../../navigation/NavigationService';

const Header = () => {
  const addresses = useSelector(state => state.address);
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          gap: 5,
        }}
      >
        <Text style={styles.headertxt}>Location</Text>
        <TouchableOpacity
        onPress={()=>{navigate('AddressScreen')}}
          style={{
            flex: 1,
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../../assets/icons/location.png')}
            style={{ width: 20, height: 20, tintColor: '#fff' }}
          />
          {addresses.map((addr, index) => (
            <Text key={index} style={styles.address}>
              {[addr.building, addr.locality, addr.city].filter(Boolean).join(', ')}
            </Text>
          ))}
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.headericon}
      onPress={()=>{navigate('ProductsScreen')}}>
        <Image
          source={require('../../assets/icons/shopping-cart.png')}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
