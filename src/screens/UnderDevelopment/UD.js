import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../assets/Colors';
import CustomModal from '../../components/CustomModal';

const UD = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [otpVisible, setOTPVisible] = useState(false);

  useEffect(() => {
    setTimeout(()=>{
      setOTPVisible(false)
    },8000)
  }, [otpVisible]);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#000000'}
        hidden={false}
        translucent={false}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.appBg }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ color: Colors.textPrimary }}>Comming Soon..</Text>
          <Text style={{ color: Colors.textPrimary, textAlign: 'center' }}>
            The Application in under development, Some feature may not be
            available at the moment.
          </Text>
          <Text style={{ color: Colors.textPrimary }}>
            Thank you for your patience..
          </Text>
        </View>
        {otpVisible && (
          <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.card,
            paddingHorizontal: 20,
            paddingVertical:10,
            borderRadius: 10,
            alignSelf: 'center',
            position:'absolute',
            top:50
          }}
        >
          <Text style={{ color: Colors.textPrimary ,fontWeight:'bold'}}>
             Verfication OTP: 123456
          </Text>
        </View>
        )}
        
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text
            style={{ color: Colors.textPrimary, marginTop: 20 }}
            onPress={() => {setModalVisible(true)
              setOTPVisible(true)
            }}
          >
            Open Modal
          </Text>
        </View>
        <CustomModal visible={modalVisible}>
          <View
            style={{
              width: '85%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 5,
              overflow: 'hidden',
            }}
          >
            <TextInput
              placeholder="Enter OTP"
              placeholderTextColor={'black'}
              keyboardType="numeric"
              style={{ flex: 1, color: '#000000', fontWeight: '500' }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 10,
            }}
          >
            <View style={{ flex: 1 }}>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
            <View style={{ flex: 1 }}>
              <Button
                title="Submit"
                onPress={() => {
                  setOTPVisible(true);
                  setModalVisible(false);
                }}
              />
            </View>
          </View>
        </CustomModal>
      </SafeAreaView>
    </>
  );
};

export default UD;

const styles = StyleSheet.create({});
