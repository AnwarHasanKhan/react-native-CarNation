import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { navigate } from '../../navigation/NavigationService';
import { Colors } from '../../assets/Colors';
import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header/Header';
import { PACKAGES } from '../../model/Packages';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  const baseprice = PACKAGES;
  const bikeBP = baseprice.bike[0].price;
  const carBP = baseprice.car[0].price;
  console.log('Hello from home:', baseprice.bike[0].price);
  console.log('Hello from home:', baseprice.car[0].price);
  // const { width } = useWindowDimensions();

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#000000'}
        hidden={false}
        translucent={true}
      />
      <LinearGradient
        useAngle={true}
        angle={15}
        angleCenter={{ x: 0.1, y: 0.2 }}
        colors={['#0A0A0A', '#121212', '#192f6a']}
        style={{
          flex: 1,
        }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                gap: 10,
                padding: 10,
              }}
            >
              <Header />
              {/* 1st */}
              <View
                style={[styles.headcard, { backgroundColor: Colors.header }]}
              >
                <View>
                  <Text
                    style={{
                      color: Colors.primary,
                      fontWeight: '500',
                      textTransform: 'uppercase',
                    }}
                  >
                    Featured
                  </Text>
                  <Text
                    style={{
                      color: Colors.textPrimary,
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      fontSize: 20,
                    }}
                  >
                    Premium Car Wash
                  </Text>
                  <Text style={{ color: '#b1b1b1', fontSize: 14 }}>
                    Starting from ₹{carBP}
                  </Text>
                </View>
                <CustomButton
                  title={'Book Now!'}
                  bgcolor={Colors.primary}
                  textcolor={Colors.appBg}
                  size={16}
                  thick={'600'}
                  onPress={() => {
                    navigate('PackageScreen');
                  }}
                />
                <View style={styles.dot1} />
                <View style={styles.dot2} />
              </View>

              {/* 2nd Card Row */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  gap: 10,
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity
                  style={[
                    styles.card1,
                    { flex: 1, borderColor: Colors.borderAccent },
                  ]}
                  onPress={() => {
                    navigate('PackageScreen');
                  }}
                >
                  <Image
                    source={require('../../assets/icons/tire.png')}
                    style={{ width: 40, height: 40, tintColor: Colors.green }}
                  />
                  <View>
                    <Text
                      style={{ color: Colors.textPrimary, fontWeight: '500' }}
                    >
                      Car & Bike {'\n'}Wash
                    </Text>
                    <Text style={{ color: Colors.green, fontSize: 14 }}>
                      From ₹{carBP}/₹{bikeBP}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.card1, { flex: 1 }]}
                  onPress={() => {
                    navigate('ProductsScreen');
                  }}
                >
                  <Image
                    source={require('../../assets/icons/shopping-cart.png')}
                    style={{ width: 35, height: 35, tintColor: Colors.primary }}
                  />
                  <View>
                    <Text
                      style={{ color: Colors.textPrimary, fontWeight: '500' }}
                    >
                      Products &{'\n'}Accessories
                    </Text>
                    <Text style={{ color: Colors.primary, fontSize: 14 }}>
                      Upto 50% OFF
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* 3rd */}
              <LinearGradient
                useAngle={true}
                angle={5}
                angleCenter={{ x: 0.2, y: 0.2 }}
                colors={['#0A0A0A','#1a1a1a', '#192f6a']}
                style={styles.linearGradient}
              >
                <TouchableOpacity
                  style={styles.lgcard}
                  onPress={() => {
                    navigate('Subscription');
                  }}
                >
                  <Image
                    source={require('../../assets/icons/insurance.png')}
                    style={{ width: 35, height: 35, tintColor: Colors.indigo }}
                  />
                  <View>
                    <Text
                      style={{
                        color: Colors.textPrimary,
                        fontWeight: '500',
                        textTransform: 'uppercase',
                        fontSize: 20,
                      }}
                    >
                      MONTHLY PLANS
                    </Text>
                    <Text style={{ color: '#b1b1b1', fontSize: 14 }}>
                      Explore all the exclusive offers
                    </Text>
                    <Text style={{ color: Colors.indigo, fontSize: 14 }}>
                      Save your Time and Money
                    </Text>
                  </View>
                </TouchableOpacity>
              </LinearGradient>

              {/* 4th */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  gap: 10,
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity
                  style={[styles.card1, { flex: 1 }]}
                  onPress={() => {
                    navigate('UD');
                  }}
                >
                  <Image
                    source={require('../../assets/icons/sticky-notes.png')}
                    style={{ width: 35, height: 35, tintColor: Colors.red }}
                  />
                  <View>
                    <Text
                      style={{ color: Colors.textPrimary, fontWeight: '500' }}
                    >
                      Clear My {'\n'}Challan
                    </Text>
                    <Text style={{ color: Colors.red, fontSize: 14 }}>
                      Upto 50% off
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.card1, { flex: 1 }]}
                  onPress={() => {
                    navigate('ServiceAndRepair');
                  }}
                >
                  <Image
                    source={require('../../assets/icons/settings.png')}
                    style={{ width: 35, height: 35, tintColor: Colors.primary }}
                  />
                  <View>
                    <Text
                      style={{ color: Colors.textPrimary, fontWeight: '500' }}
                    >
                      Car Servicing{'\n'}& Repair
                    </Text>
                    <Text style={{ color: Colors.primary, fontSize: 14 }}>
                      Free pick-up & drop
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* 5th */}
              <LinearGradient
                useAngle={true}
                angle={10}
                angleCenter={{ x: 0.1, y: 0.3 }}
                colors={['#0A0A0A','#1a1a1a', '#112660']}
                style={styles.linearGradient}
              >
                <TouchableOpacity
                  style={styles.lgcard}
                  onPress={() => {
                    navigate('ReferEarn');
                  }}
                >
                  <Text
                    style={{
                      color: Colors.textPrimary,
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      fontSize: 20,
                    }}
                  >
                    Your Rewards
                  </Text>
                  <View>
                    <Text
                      style={{
                        color: Colors.primary,
                        fontWeight: '500',
                        textTransform: 'uppercase',
                        fontSize: 20,
                      }}
                    >
                      50
                    </Text>
                    <Text
                      style={{
                        color: Colors.textPrimary,
                        fontWeight: '500',
                        textTransform: 'uppercase',
                      }}
                    >
                      CarNation Points
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: Colors.header,
                      paddingVertical: 5,
                      paddingLeft: 15,
                      borderRadius: 10,
                    }}
                  >
                    <Text style={{ color: '#b1b1b1', fontSize: 14 }}>
                      Refer a friend & Earn Points!!
                    </Text>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Home;
