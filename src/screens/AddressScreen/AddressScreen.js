import {
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../assets/Colors';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { goBack } from '../../navigation/NavigationService';

import {
  addAddress,
  clearAddress,
  deleteAddress,
} from '../../redux/slice/addressSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header2 from '../../components/Header2/Header2';

const AddressScreen = () => {
  const [building, setBuilding] = useState('');
  const [locality, setLocality] = useState('');
  const [city, setCity] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');

  const dispatch = useDispatch();
  const addresses = useSelector(state => state.address);

  console.log('Building:', building);
  console.log('selected:', selectedAddress);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#000000'}
        hidden={false}
        translucent={false}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.appBg }}>
        <Pressable
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
            backgroundColor: Colors.appBg,
          }}
          onPress={() => {
            goBack();
          }}
        >
          <Image
            source={require('../../assets/icons/down.png')}
            style={{ width: 30, height: 30, tintColor: '#fff' }}
          />
          <Text
            style={{
              fontSize: 22,
              fontWeight: '700',
              color: Colors.textPrimary,
            }}
          >
            Add Address
          </Text>
        </Pressable>
        <ImageBackground
          source={require('../../assets/images/gmap.jpeg')}
          style={{ flex: 1 }}
        >
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
            style={{
              justifyContent: 'center',
              gap: 10,
              flex: 1,
              paddingHorizontal: 20,
            }}
          >
            <View style={[styles.inputbox, { backgroundColor: Colors.card }]}>
              <TextInput
                placeholder={'Enter House / Flat / Building'}
                placeholderTextColor={'grey'}
                autoFocus
                value={building}
                onChangeText={txt => setBuilding(txt)}
                style={{ flex: 1, color: '#fff' }}
              />
            </View>
            <View style={[styles.inputbox, { backgroundColor: Colors.card }]}>
              <TextInput
                placeholder={'Locality'}
                placeholderTextColor={'grey'}
                value={locality}
                onChangeText={txt => setLocality(txt)}
                style={{ flex: 1, color: '#fff' }}
              />
            </View>
            <View style={[styles.inputbox, { backgroundColor: Colors.card }]}>
              <TextInput
                placeholder={'City'}
                placeholderTextColor={'grey'}
                value={city}
                onChangeText={txt => setCity(txt)}
                style={{ flex: 1, color: '#fff' }}
              />
            </View>
            <View style={{ gap: 10 }}>
              <CustomButton
                title={'Save Address'}
                disabled={city == '' && building == '' && locality == ''}
                size={16}
                thick={'600'}
                onPress={() => {
                  dispatch(
                    addAddress({
                      building: building,
                      locality: locality,
                      city: city,
                    }),
                  );
                  setBuilding('');
                  setLocality('');
                  setCity('');
                }}
              />
              <CustomButton
                title={'Clear Address'}
                size={16}
                thick={'600'}
                onPress={() => {
                  dispatch(clearAddress());
                }}
              />
            </View>
          </KeyboardAvoidingView>

          <View
            style={{ gap: 10, padding: 10, flex: 1, backgroundColor: '#000' }}
          >
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>
              Saved Address
            </Text>
            {addresses.map((addr, index) => (
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.card,
                  borderRadius: 10,
                  padding: 20,
                  gap: 10,
                  elevation: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                    width: '80%',
                  }}
                >
                  <Image
                    source={require('../../assets/icons/location.png')}
                    style={{ width: 20, height: 20, tintColor: '#fff' }}
                  />
                  <Text
                    key={index}
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: '#EEEEEE',
                    }}
                  >
                    {[addr.building, addr.locality, addr.city]
                      .filter(Boolean)
                      .join(', ')}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(deleteAddress(index));
                  }}
                >
                  <Image
                    source={require('../../assets/icons/close.png')}
                    style={{ width: 20, height: 20, tintColor: '#fff' }}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  inputbox: {
    width: '100%',
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
