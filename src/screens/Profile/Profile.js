import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { Colors } from '../../assets/Colors';
import { navigate, replace } from '../../navigation/NavigationService';
import { useDispatch, useSelector } from 'react-redux';
import { addCar, removeCar } from '../../redux/slice/carSlice';

const Profile = () => {
  const dispatch = useDispatch();

  const name = useSelector(state => state.carlist?.name);
  const license = useSelector(state => state.carlist?.license);
  const isDefault = useSelector(state => state.carlist.isDefault);
  const userName = useSelector(state => state.userinfo?.userName);
  const phoneNo = useSelector(state => state.userinfo?.phoneNo);
  const ListItem = ({ label, icon }) => (
    <View style={styles.listRow}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image source={icon} style={styles.listIcon} />
        <Text style={styles.listLabel}>{label}</Text>
      </View>
      <Image
        source={require('../../assets/icons/next.png')}
        style={styles.nextIcon}
      />
    </View>
  );

  const ListItem2 = ({ label, icon }) => (
    <View
      style={{
        justifyContent: 'space-between',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image source={icon} style={styles.listIcon2} />
      <Text style={styles.listLabel}>{label}</Text>
    </View>
  );
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#000000'}
        hidden={false}
        translucent={false}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.appBg }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.profileContainer}>
            <View style={styles.dp}>
              <Image
                source={require('../../assets/icons/user.png')}
                style={styles.profileImage}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: Colors.textPrimary,
                  fontSize: 16,
                  fontWeight: '600',
                }}
              >
                {userName}
              </Text>
              <Text style={{ color: Colors.textPrimary }}>{phoneNo}</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              gap: 10,
            }}
          >
            <View style={{ flex: 2, gap: 10 }}>
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>
                My Cars
              </Text>
              <View
                style={{
                  backgroundColor: Colors.card,
                  borderRadius: 10,
                  padding: 10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: 10,
                  alignItems: 'center',
                }}
              >
                <Image
                  source={require('../../assets/icons/car.png')}
                  style={{ height: 30, width: 30, tintColor: '#cdcdcd' }}
                />
                <View style={{ flex: 1, gap: 5 }}>
                  <Text
                    style={{ color: Colors.textPrimary, fontWeight: '600' }}
                  >
                    Car: {name}
                  </Text>
                  <Text
                    style={{ color: Colors.textPrimary, fontWeight: '600' }}
                  >
                    License: {license}
                  </Text>
                  <Text
                    style={{ color: Colors.textPrimary, fontWeight: '600' }}
                  >
                    {isDefault && (
                      <View
                        style={{
                          flex: 1,
                          gap: 5,
                          backgroundColor: Colors.primary,
                          paddingHorizontal: 5,
                          borderRadius: 5,
                        }}
                      >
                        <Text
                          style={{ color: Colors.appBg, fontWeight: '600' }}
                        >
                          default
                        </Text>
                      </View>
                    )}
                  </Text>
                </View>
                <Pressable
                  onPress={() => {
                    dispatch(removeCar());
                  }}
                  style={{
                    alignSelf: 'flex-start',
                  }}
                >
                  <Image
                    source={require('../../assets/icons/close.png')}
                    style={{
                      height: 15,
                      width: 15,
                      tintColor: Colors.primary,
                    }}
                  />
                </Pressable>
              </View>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', gap: 10 }}>
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: 16,
                  fontWeight: '600',
                }}
              >
                Add Vehicle
              </Text>

              <View
                style={{
                  borderRadius: 10,
                  padding: 10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                  flex: 1,
                  borderWidth: 1,
                  borderColor: Colors.primary,
                  borderStyle: 'dashed',
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    gap: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    navigate('AddCarScreen');
                  }}
                >
                  <Text
                    style={{ color: Colors.textPrimary, fontWeight: '600' }}
                  >
                    +Add {'\n'}New Car
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ gap: 15, padding: 10, marginBottom: 5 }}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>
              Quick Actions
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-evenly',
              }}
            >
              <TouchableOpacity onPress={() => navigate('PackageScreen')}>
                <ListItem2
                  label="Car Wash"
                  icon={require('../../assets/icons/car-wash.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigate('UD')}>
                <ListItem2
                  label="My Booking"
                  icon={require('../../assets/icons/sticky-notes.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigate('Subscription')}>
                <ListItem2
                  label="Subscription"
                  icon={require('../../assets/icons/insurance.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.list}
              onPress={() => navigate('EditProfileScreen')}
            >
              <ListItem
                label="Edit Profile"
                icon={require('../../assets/icons/edit-text.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() => navigate('AddressScreen')}
            >
              <ListItem
                label="Addresses"
                icon={require('../../assets/icons/pin.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.list}>
              <ListItem
                label="Payment Methods"
                icon={require('../../assets/icons/wallet.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.list}>
              <ListItem
                label="Notification"
                icon={require('../../assets/icons/notification.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() => navigate('HelpScreen')}
            >
              <ListItem
                label="Help"
                icon={require('../../assets/icons/help.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() => replace('SignIn', { replace: true })}
            >
              <ListItem
                label="Logout"
                icon={require('../../assets/icons/exit.png')}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Profile;
