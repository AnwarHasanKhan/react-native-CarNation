import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../assets/Colors';
import { goBack } from '../navigation/NavigationService';

const CartEmpty = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          marginTop: 100,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
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
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 15,
            paddingVertical: 6,
            backgroundColor: Colors.primary,
          }}
          onPress={() => {
            goBack();
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: '#000',
            }}
          >
            SHOP NOW
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartEmpty;
