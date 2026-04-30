import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StatusBar,
  Image,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../assets/Colors';
import { styles } from './styles';
import { goBack } from '../../navigation/NavigationService';

const HelpScreen = () => {
  const Section = ({ title, children }) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );

  const Bullet = ({ text }) => <Text style={styles.bullet}>• {text}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.appBg} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Pressable
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            marginBottom: 20,
          }}
          onPress={() => {
            goBack();
          }}
        >
          <Image
            source={require('../../assets/icons/back.png')}
            style={{ width: 30, height: 30, tintColor: '#fff' }}
          />
          <Text style={styles.title}>Help Center</Text>
        </Pressable>

        {/* Getting Started */}
        <Section title="Getting Started">
          <Text style={styles.text}>
            Carnation helps you manage car and bike care easily.
          </Text>
          <Bullet text="Book vehicle services" />
          <Bullet text="Track service status" />
          <Bullet text="Manage vehicle details" />
          <Bullet text="Get maintenance reminders" />
        </Section>

        {/* Login */}
        <Section title="🔑 Login / Signup">
          <Bullet text="Enter your mobile number" />
          <Bullet text="Tap Login/Signup" />
          <Bullet text="Enter OTP received on your phone" />
          <Bullet text="You are ready to use the app" />
        </Section>

        {/* OTP Issues */}
        <Section title="❌ OTP Not Received?">
          <Bullet text="Check correct phone number (+91XXXXXXXXXX)" />
          <Bullet text="Ensure good network connection" />
          <Bullet text="Wait a few seconds and retry" />
          <Bullet text="Restart app if needed" />
        </Section>

        {/* Errors */}
        <Section title="⚠️ Common Issues">
          <Bullet text="Use correct format: +91XXXXXXXXXX" />
          <Bullet text="Avoid spaces or special characters" />
          <Bullet text="Check internet connection" />
        </Section>

        {/* Booking */}
        <Section title="🛠 Booking a Service">
          <Bullet text="Select your vehicle" />
          <Bullet text="Choose service type" />
          <Bullet text="Pick date & time" />
          <Bullet text="Confirm booking" />
        </Section>

        {/* Privacy */}
        <Section title="🔒 Privacy & Security">
          <Text style={styles.text}>
            Your data is securely stored and never shared without permission.
          </Text>
        </Section>

        {/* Contact */}
        <Section title="📞 Support">
          <Text style={styles.text}>
            Need help? Contact us inside the app or email support.
          </Text>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpScreen;
