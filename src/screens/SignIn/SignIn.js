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

const SignIn = () => {
  const [phoneNo, setPhoneNo] = useState('');
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
                onRightIconPress={()=>{
                  setPhoneNo('')
                }}
                placeholder={'Phone Number'}
                keyboardType={'numeric'}
                value={phoneNo}
                onChangeText={setPhoneNo}
                inputbg={Colors.card}
                tintColor={Colors.primary}
              />
              <CustomButton
                title={'Login/Signup'}
                disabled={phoneNo?.length <10}
                size={16}
                thick={'600'}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <Text
          style={{
            alignSelf: 'flex-end',
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
