import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../assets/Colors';
import { goBack } from '../navigation/NavigationService';
import CustomButton from './CustomButton';

const CartEmpty = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <Image
          source={require('../assets/icons/shopping-cart.png')}
          style={{
            width: 120,
            height: 120,
            tintColor: Colors.primary,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: Colors.textPrimary,
          }}
        >
          The bags seems empty..
        </Text>
        <CustomButton title={'SHOP NOW'} size={16} thick={'600'} onPress={()=>{goBack()}}/>
      </View>
    </SafeAreaView>
  );
};

export default CartEmpty;
