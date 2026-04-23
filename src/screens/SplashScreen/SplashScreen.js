import { View, Text, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'#F7F7F7'}
        hidden={false} // Ensure it's not hidden
        translucent={false} // Avoid translucency
      />
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.logotxt}>CarNation</Text>
        </View>
        <Text style={styles.txt}>Car Service at Home!</Text>
      </View>
    </>
  );
};

export default SplashScreen;
