import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../assets/Colors';

const UD = () => {
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
          <Text style={{ color: Colors.textPrimary,textAlign:'center' }}>The Application in under development, Some feature may not be available at the moment.</Text>
          <Text style={{ color: Colors.textPrimary }}>Thank you for your patience..</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default UD;

const styles = StyleSheet.create({});
