import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../assets/Colors';
import CustomButton from '../../components/CustomButton';
import { useDispatch } from 'react-redux';
import { goBack } from '../../navigation/NavigationService';
import { addCar, removeCar } from '../../redux/slice/carSlice';

const AddCarScreen = () => {
  const [car, setCar] = useState('');
  const [license, setLicense] = useState('');

  const dispatch = useDispatch();

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
            Your Garage
          </Text>
        </Pressable>
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
              placeholder={'Car Name'}
              placeholderTextColor={'grey'}
              autoFocus
              value={'VirtusGT'}
              onChangeText={txt => setCar('VirtusGT')}
              style={{ flex: 1, color: '#fff' }}
            />
          </View>
          <View style={[styles.inputbox, { backgroundColor: Colors.card }]}>
            <TextInput
              placeholder={'Plate Number'}
              placeholderTextColor={'grey'}
              value={'Plate1'}
              onChangeText={txt => setLicense('Plate1')}
              style={{ flex: 1, color: '#fff',textTransform:'uppercase' }}
            />
          </View>
          <View style={{ gap: 10 }}>
            <CustomButton
              title={'Save Car'}
              size={16}
              thick={'600'}
              onPress={() => {
                dispatch(
                  addCar({
                    name: 'VirtusGT',
                    license: 'Plate1',
                  }),
                );
                setCar('');
                setLicense('');
                goBack();
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default AddCarScreen;

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
    margin: 10,
  },
});
