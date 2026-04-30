import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from '../../components/Carousel/Carousel';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { styles } from '../SignIn/styles';
import { Colors } from '../../assets/Colors';
import { navigate } from '../../navigation/NavigationService';
import { getAuth, signInWithPhoneNumber } from '@react-native-firebase/auth';

const SignIn = () => {
  const [phoneNo, setPhoneNo] = useState('');
  const [confirm, setConfirm] = useState(null);

  console.log('Console from  SignIn: ', confirm);
  const [code, setCode] = useState('');

  async function handleSignInWithPhoneNumber(value) {
    try {
      let cleaned = value.replace(/\D/g, '');

      if (cleaned.startsWith('0')) {
        cleaned = cleaned.substring(1);
      }

      const phone = `+91${cleaned}`;

      console.log('Formatted Phone:', phone);

      const confirmation = await signInWithPhoneNumber(getAuth(), phone);
      setConfirm(confirmation);
    } catch (error) {
      console.log('Auth Error:', error);
    }
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      console.log('User signed in successfully');
      navigate('BottomNavigator', {
        screen: 'Home',
      });

      setPhoneNo('')
      setConfirm('')
    } catch (error) {
      console.log('Invalid code:', error);
    }
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.appBg}
        hidden={false}
        translucent={true}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.appBg }}>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
          style={{ flex: 1, gap: 20 }}
        >
          <View style={{ flex: 1 }}>
            <Carousel />
            <TouchableOpacity
              style={[styles.skipbtn, { position: 'absolute' }]}
              onPress={() => {
                navigate('BottomNavigator');
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: Colors.textPrimary,
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <Text style={styles.text}>India's #1</Text>
              <Text style={styles.text}>Car and Bike Care App</Text>
              <Text style={[styles.text, { fontSize: 14 }]}>Login/SignUp</Text>
            </View>
            {!confirm ? (
              <View
                style={{
                  flex: 2,
                  justifyContent: 'center',
                  gap: 20,
                }}
              >
                <CustomTextInput
                  icon={require('../../assets/icons/call.png')}
                  rightIcon={require('../../assets/icons/close.png')}
                  onRightIconPress={() => {
                    setPhoneNo('');
                  }}
                  placeholder={'Phone Number'}
                  keyboardType={'numeric'}
                  value={phoneNo}
                  onChangeText={setPhoneNo}
                  inputbg={Colors.card}
                  tintColor={Colors.primary}
                />

                <CustomButton
                  title={'Login with OTP'}
                  disabled={phoneNo.replace(/\D/g, '').length !== 10}
                  size={16}
                  thick={'600'}
                  onPress={() => handleSignInWithPhoneNumber(phoneNo)}
                />
              </View>
            ) : (
              <View
                style={{
                  flex: 2,
                  justifyContent: 'center',
                  gap: 20,
                }}
              >
                <View
                  style={{
                    width: '85%',
                    borderWidth: 1,
                    borderRadius: 10,
                    alignSelf: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    gap: 5,
                    overflow: 'hidden',
                    backgroundColor:Colors.card
                  }}
                >
                  <TextInput
                    placeholder="Enter OTP"
                    placeholderTextColor={'grey'}
                    keyboardType="numeric"
                    value={code}
                    onChangeText={setCode}
                    style={{ flex: 1, color: '#dddddd', fontWeight: '500' }}
                  />
                </View>
                <CustomButton
                  title={'Enter OTP'}
                  disabled={code.length < 6}
                  size={16}
                  thick={'600'}
                  onPress={() => confirmCode()}
                />
              </View>
            )}
          </View>
        </KeyboardAvoidingView>
        <Text
          style={{
            alignSelf: 'center',
            textAlign: 'center',
            marginHorizontal: 70,
            fontSize: 12,
            color: Colors.textMuted,
          }}
        >
          By proceeding you agree to terms and conditions and privacy policies
        </Text>
      </SafeAreaView>
    </>
  );
};

export default SignIn;
