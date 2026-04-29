import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../assets/Colors';
import { navigate, navigationRef, replace } from '../../navigation/NavigationService';

const Profile = () => {
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
            <View
              style={{
                backgroundColor: Colors.primary,
                height: 85,
                width: 85,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                marginLeft:10,
                marginTop:5
              }}
            >
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
                User Name
              </Text>
              <Text style={{ color: Colors.textPrimary }}>userInfo</Text>
            </View>
          </View>
          {/*  */}
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
                  backgroundColor: '#5d5d5d',
                  borderRadius: 10,
                  padding: 10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: 10,
                  alignItems: 'center',
                }}
              >
                <Image
                  source={require('../../assets/icons/car-wash.png')}
                  style={{ height: 30, width: 30 }}
                />
                <View style={{ flex: 1, gap: 5 }}>
                  <Text style={{ color: Colors.textPrimary }}>CarName</Text>
                  <Text style={{ color: Colors.textPrimary }}>License</Text>
                  <Text style={{ color: Colors.textPrimary }}>CarBox</Text>
                </View>
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
                + Add Car
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
                <View
                  style={{
                    flex: 1,
                    gap: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: Colors.textPrimary }}>
                    +Add {'\n'}New Car
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/*  */}
          <View style={{ gap: 10, padding: 10 }}>
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
              <TouchableOpacity
              // onPress={() => navigation.navigate('Orders')}
              >
                <ListItem2
                  label="Car Wash"
                  icon={require('../../assets/icons/car-wash.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
              // onPress={() => navigation.navigate('Orders')}
              >
                <ListItem2
                  label="My Booking"
                  icon={require('../../assets/icons/sticky-notes.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
              // onPress={() => navigation.navigate('Orders')}
              >
                <ListItem2
                  label="Subscription"
                  icon={require('../../assets/icons/insurance.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginLeft: 10, flex: 1 }}>
            <TouchableOpacity
              style={styles.list}
            >
              <ListItem
                label="Edit Profile"
                icon={require('../../assets/icons/edit-text.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
            >
              <ListItem
                label="Addresses"
                icon={require('../../assets/icons/pin.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
            >
              <ListItem
                label="Payment Methods"
                icon={require('../../assets/icons/wallet.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
            >
              <ListItem
                label="Notification"
                icon={require('../../assets/icons/notification.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
            >
              <ListItem
                label="Help"
                icon={require('../../assets/icons/help.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() => replace("SignIn", { replace: true })}
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

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
  },
  headerText: { fontSize: 20, fontWeight: 'bold' },
  settingsBtn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsIcon: { width: 23, height: 23 },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop: 20,
    gap: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: Colors.textPrimary,
  },
  nameText: { fontSize: 20, fontWeight: '600' },
  mobileText: { fontSize: 14, fontWeight: '400' },
  emailText: { fontSize: 14, color: '#333' },
  list: {
    borderBottomWidth: 0.5,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    paddingLeft: 15,
    borderRadius: 10,
  },
  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  listIcon: { width: 22, height: 22, tintColor: Colors.primary },
  listIcon2: { width: 30, height: 30, tintColor: Colors.primary },
  listLabel: { fontSize: 16, color: '#fff' },
  nextIcon: { width: 24, height: 24, tintColor: '#fff' },
  logoutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  logoutBtn: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 200,
    backgroundColor: '#000',
  },
  logoutText: { fontSize: 20, fontWeight: '700', color: '#fff' },
});
