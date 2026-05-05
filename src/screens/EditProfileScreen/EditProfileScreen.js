import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../assets/Colors';
import CustomButton from '../../components/CustomButton';
import { addUser, removeUser } from '../../redux/slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { goBack } from '../../navigation/NavigationService';

const EditProfileScreen = () => {
  const [userName, setUserName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  const dispatch = useDispatch();
  const user = useSelector(state => state.userinfo);
  const screenWidth = useWindowDimensions();

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
            source={require('../../assets/icons/back.png')}
            style={{ width: 30, height: 30, tintColor: '#fff' }}
          />
          <Text
            style={{
              fontSize: 22,
              fontWeight: '700',
              color: Colors.textPrimary,
            }}
          >
            Edit Profile
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
              placeholder={'User Name'}
              placeholderTextColor={'grey'}
              autoFocus
              value={userName}
              onChangeText={txt => setUserName(txt)}
              style={{ flex: 1, color: '#fff' }}
            />
          </View>
          <View style={[styles.inputbox, { backgroundColor: Colors.card }]}>
            <TextInput
              placeholder={'Phone Number'}
              placeholderTextColor={'grey'}
              value={phoneNo}
              onChangeText={txt => setPhoneNo(txt)}
              style={{ flex: 1, color: '#fff' }}
            />
          </View>
          <View style={{ gap: 10 }}>
            <CustomButton
              title={'Save Address'}
              disabled={userName === '' || phoneNo === ''}
              size={16}
              thick={'600'}
              onPress={() => {
                dispatch(
                  addUser({
                    userName: userName,
                    phoneNo: phoneNo,
                  }),
                );
                setUserName('');
                setPhoneNo('');
                goBack();
              }}
            />
            <CustomButton
              title={'Clear Address'}
              size={16}
              thick={'600'}
              onPress={() => {
                dispatch(removeUser());
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default EditProfileScreen;

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
