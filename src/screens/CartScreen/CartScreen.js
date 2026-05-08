import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../assets/Colors';
import Header2 from '../../components/Header2/Header2';
import { goBack, navigate } from '../../navigation/NavigationService';
import CartItem from '../../components/CartItem';
import CartEmpty from '../../components/CartEmpty';
import { useSelector } from 'react-redux';
import CustomButton from '../../components/CustomButton';

const CartScreen = () => {
  const cartData = useSelector(state => state.cart);

  console.log('Console from CartScreen: ', cartData);

  const usdToInr = 89.81;
  const platformFee = 55;
  const deliveryFee = 40;

  const getTotal = () => {
    let tempTotal = 0;
    cartData.map(item => {
      tempTotal =
        tempTotal + Math.round(item.price * usdToInr * (item.quantity || 1));
    });
    return tempTotal;
  };

  const getGrandTotal = () => {
    return getTotal() + platformFee + deliveryFee;
  };
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#000000'}
        hidden={false}
        translucent={false}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.appBg }}>
        <View style={styles.segWrapper}>
          <Header2
            title={'Cart'}
            subtitle={'Shop product or book an appointment'}
            onPress={() => {
              goBack();
            }}
          />
        </View>
        {/* <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ color: Colors.textPrimary }}>CartScreen..</Text>
          <Text style={{ color: Colors.textPrimary, textAlign: 'center' }}>
            The Application in under development, Some feature may not be
            available at the moment.
          </Text>
          <Text style={{ color: Colors.textPrimary }}>
            Thank you for your patience..
          </Text>
        </View> */}
        {cartData.length > 0 ? (
          <FlatList
            data={cartData}
            keyExtractor={(item, index) => index.toString()}
            paddingBottom={100}
            renderItem={({ item, index }) => (
              <CartItem
                item={item}
                onRemoveItem={() =>
                  dispatch({ type: REMOVE_FROM_CART, payload: item })
                }
              />
            )}
          />
        ) : (
          <CartEmpty />
        )}
        {cartData.length > 0 && (
        <View
          style={{
            alignSelf: 'center',
            width: '100%',
            backgroundColor: Colors.card,
            paddingBottom: 50,
          }}
        >
          <View
            style={{
              borderTopWidth: 0.5,
              padding: 1.5,
              backgroundColor:'#a1a1a1ff'
            }}
          >
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTopWidth: 0.5,
              padding: 10,
              paddingRight: 20,
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: Colors.textPrimary }}>SubTotal:</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: Colors.textPrimary }}>
              ₹{getTotal()}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTopWidth: 0.5,
              padding: 10,
              paddingRight: 20,
            }}
          >
             <Text style={{ fontWeight: 'bold', fontSize: 14, color: Colors.textPrimary }}>
              Platform Fee:
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: Colors.green,
              }}
            >
              ₹ +{platformFee}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTopWidth: 0.5,
              padding: 10,
              paddingRight: 20,
            }}
          >
         <Text style={{ fontWeight: 'bold', fontSize: 14, color: Colors.textPrimary }}>
              Delivery Charge:
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: Colors.green,
              }}
            >
              ₹ +{deliveryFee}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTopWidth: 0.5,
              padding: 10,
              paddingRight: 20,
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: Colors.textPrimary }}>Total Amount:</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: Colors.textPrimary }}>
              ₹{getGrandTotal()}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
            }}
          >
            <CustomButton
              title={'Select Delivery Address'}
              size={18}
              thick={'700'}
              onPress={()=>{navigate('AddressScreen')}}
            />
          </View>
        </View>
      )}
      </SafeAreaView>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  segWrapper: {
    backgroundColor: Colors.card,
    paddingHorizontal: 20,
  },
});
