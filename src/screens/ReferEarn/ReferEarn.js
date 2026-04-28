import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../assets/Colors';
import CustomButton from '../../components/CustomButton';

const ReferEarn = () => {
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
          <Text style={{ color: Colors.textPrimary }}>
            Invite your friends to earn more points
          </Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 20,
              gap: 10,
            }}
          >
            <Text style={{ color: Colors.textPrimary }}>Your Points: 50</Text>
            <CustomButton
              title={'Invite friends!'}
              bgcolor={Colors.primary}
              textcolor={Colors.appBg}
              size={16}
              thick={'600'}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ReferEarn;

const styles = StyleSheet.create({});
