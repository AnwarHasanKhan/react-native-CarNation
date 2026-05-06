import {
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../assets/Colors';
import CustomButton from '../../components/CustomButton';
import { goBack } from '../../navigation/NavigationService';

import {
  addAddress,
  clearAddress,
  deleteAddress,
  setSelectedIndex,
} from '../../redux/slice/addressSlice';
import { useDispatch, useSelector } from 'react-redux';

const AddressScreen = () => {
  const [building, setBuilding] = useState('');
  const [locality, setLocality] = useState('');
  const [city, setCity] = useState('');

  const dispatch = useDispatch();
  const addresses = useSelector(state => state.address.addresses);
  const selectedIndex = useSelector(state => state.address.selectedIndex);

  console.log('Building:', building);
  console.log('selected:', selectedIndex);
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
        <TouchableWithoutFeedback
          style={{ flex: 1 }}
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
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
                    Keyboard.dismiss();
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
            {selectedIndex !== null && addresses[selectedIndex] && (
              <View
                style={{
                  gap: 10,
                  padding: 10,
                  backgroundColor: '#000',
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 18,
                    fontWeight: '600',
                    borderBottomWidth: 1,
                    borderColor: '#fff',
                  }}
                >
                  Selected Address
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.card,
                    borderRadius: 10,
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderWidth: 2,
                    borderColor: Colors.primary,
                  }}
                >
                  <View style={{ flexDirection: 'row', gap: 10, width: '80%' }}>
                    <Image
                      source={require('../../assets/icons/location.png')}
                      style={{ width: 20, height: 20, tintColor: '#fff' }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#EEEEEE',
                      }}
                    >
                      {[
                        addresses[selectedIndex].building,
                        addresses[selectedIndex].locality,
                        addresses[selectedIndex].city,
                      ]
                        .filter(Boolean)
                        .join(', ')}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            {addresses.length > 0 && (
              <View
                style={{
                  gap: 10,
                  padding: 10,
                  backgroundColor: '#000',
                  height: 300,
                }}
              >
                <Text
                  style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}
                >
                  Saved Address
                </Text>
                <FlatList
                  data={addresses}
                  keyExtractor={(_, index) => index.toString()}
                  contentContainerStyle={{ gap: 10 }}
                  renderItem={({ item, index }) => {
                    const isSelected = selectedIndex === index;

                    return (
                      <TouchableOpacity
                        style={{
                          backgroundColor: Colors.card,
                          borderRadius: 10,
                          paddingHorizontal: 20,
                          paddingVertical: 15,
                          gap: 10,
                          elevation: 5,
                          flexDirection: 'row',
                          justifyContent: 'space-between',

                          borderWidth: isSelected ? 2 : 0,
                          borderColor: isSelected
                            ? Colors.primary
                            : 'transparent',
                        }}
                        onPress={() => dispatch(setSelectedIndex(index))}
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
                            style={{
                              fontSize: 14,
                              fontWeight: '600',
                              color: '#EEEEEE',
                            }}
                          >
                            {[item.building, item.locality, item.city]
                              .filter(Boolean)
                              .join(', ')}
                          </Text>
                        </View>

                        <TouchableOpacity
                          onPress={() => dispatch(deleteAddress(index))}
                          style={{ justifyContent: 'center' }}
                        >
                          <Image
                            source={require('../../assets/icons/close.png')}
                            style={{ width: 15, height: 15, tintColor: '#fff' }}
                          />
                        </TouchableOpacity>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            )}
          </ImageBackground>
        </TouchableWithoutFeedback>
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
