import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Header2 = ({title,subtitle, onPress}) => {
  return (
    // <View style={styles.container}>
    //   <View
    //     style={{
    //       flex: 1,
    //       gap: 10,
    //       flexDirection: 'row',
    //       justifyContent: 'center',
    //     }}
    //   >
    //     <View style={{backgroundColor:Colors.textHint,justifyContent:'center',borderRadius:10, padding:10}}>
    //       <Image
    //         source={require('../../assets/icons/back.png')}
    //         style={{ width: 25, height: 25, tintColor: '#fff' }}
    //       />
    //     </View>
    //     <View style={{ flex: 1 }}>
    //       <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#eeeeee' }}>
    //         Car Wash Packages
    //       </Text>
    //       <Text style={styles.headertxt}>Choose your vehicle type</Text>
    //     </View>
    //   </View>
    // </View>
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
