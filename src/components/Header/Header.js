// import { Image, Text, TouchableOpacity, View } from 'react-native';
// import React from 'react';
// import { styles } from './styles';
// import { useSelector } from 'react-redux';
// import { navigate } from '../../navigation/NavigationService';

// const Header = () => {
//   const addresses = useSelector(state => state.address);
//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           gap: 5,
//           width:'80%'
//         }}
//       >
//         <Text style={styles.headertxt}>Your Location</Text>
//         <TouchableOpacity
//           onPress={() => {
//             navigate('AddressScreen');
//           }}
//           style={{
//             flex: 1,
//             flexDirection: 'row',
//             gap: 5,
//             alignItems: 'center',
//           }}
//         >
//           <Image
//             source={require('../../assets/icons/location.png')}
//             style={{ width: 20, height: 20, tintColor: '#fff' }}
//           />
//           {addresses.length > 0 && (
//             <Text style={styles.address}>
//               {[addresses[0].building, addresses[0].locality, addresses[0].city]
//                 .filter(Boolean)
//                 .join(', ')}
//             </Text>
//           )}
//           {addresses.length == 0 && (  <Text style={styles.headertxt}>Enter Your Address</Text>)}
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity
//         style={styles.headericon}
//         onPress={() => {
//           navigate('ProductsScreen');
//         }}
//       >
//         <Image
//           source={require('../../assets/icons/shopping-cart.png')}
//           style={{ width: 20, height: 20 }}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Header;

import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { navigate } from '../../navigation/NavigationService';

const Header = () => {
  const addresses = useSelector(state => state.address.addresses);
  const selectedIndex = useSelector(state => state.address.selectedIndex);

  const selectedAddress =
    selectedIndex !== null && addresses[selectedIndex]
      ? addresses[selectedIndex]
      : addresses[0] ?? null; // fallback to first if none selected

  return (
    <View style={styles.container}>
      <View style={{ gap: 5, width: '80%' }}>
        <Text style={styles.headertxt}>Your Location</Text>
        <TouchableOpacity
          onPress={() => navigate('AddressScreen')}
          style={{ flex: 1, flexDirection: 'row', gap: 5, alignItems: 'center' }}
        >
          <Image
            source={require('../../assets/icons/location.png')}
            style={{ width: 20, height: 20, tintColor: '#fff' }}
          />
          {selectedAddress ? (
            <Text style={styles.address} numberOfLines={1}>
              {[selectedAddress.building, selectedAddress.locality, selectedAddress.city]
                .filter(Boolean)
                .join(', ')}
            </Text>
          ) : (
            <Text style={styles.headertxt}>Enter Your Address</Text>
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.headericon}
        onPress={() => navigate('ProductsScreen')}
      >
        <Image
          source={require('../../assets/icons/shopping-cart.png')}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

