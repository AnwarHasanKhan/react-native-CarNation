import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/slice/cartSlice';
import { Colors } from '../assets/Colors';

const CartItem = ({ item, onRemoveItem }) => {
  const dispatch = useDispatch();
  const usdToInr = 89.81;
  return (
    <View style={styles.card}>
      <Image
        // source={{ uri: item.image }}
        source={{ uri: item.image ? item.image : item.images[0] }}
        style={{
          width: '45%',
          height: '100%',
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
        resizeMode="cover"
      />
      <View
        style={{
          width: '35%',
          height: '100%',
          padding: 5,
        }}
      >
        {item.name ? (
          <Text style={styles.title}>{item.name}</Text>
        ) : (
          <Text style={styles.title}>{item.title}</Text>
        )}
        <Text style={styles.title}>₹{Math.round(usdToInr * item.price)}</Text>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Text
            style={{
              backgroundColor: '#e7e7e7cd',
              borderRadius: 10,
              padding: 5,
              fontSize: 12,
              fontWeight: '600',
            }}
          >
            Qty: {item.quantity || 1}
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View
        style={{
          width: '20%',
          paddingVertical: 10,
          paddingHorizontal: 5,
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity
          style={{
            height: 30,
            backgroundColor: '#e7e7e7cd',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            onRemoveItem();
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: '600' }}>Remove</Text>
        </TouchableOpacity>
      </View> */}
      <View
        style={{
          width: '15%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#f3f3f3ff',
          paddingHorizontal: 10,
          borderRadius: 20,
          top: 10,
          right: 10,
          position: 'absolute',
        }}
      >
        <Pressable
          onPress={() => {
            dispatch(addToCart(item));
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: '600' }}>+</Text>
        </Pressable>
        <Pressable onPress={() => dispatch(removeFromCart(item))}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>-</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.appBg },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: {
    flexDirection: 'row',
    width: '98%',
    margin: 4,
    height: 120,
    borderRadius: 10,
    elevation: 3,
    alignSelf: 'center',
    elevation: 1,
    backgroundColor: Colors.card,
    padding: 10,
  },
  image: { width: 150, height: '70%', resizeMode: 'contain', marginBottom: 10 },
  title: { fontWeight: 'bold', fontSize: 14, color: Colors.textPrimary },
  price: {
    color: '#000',
    marginTop: 4,
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  cartbtn: {
    fontSize: 12,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 3,
    paddingVertical: 3,
    alignSelf: 'center',
    top: 10,
    color: Colors.textPrimary,
  },
  // Bottom bar
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.appBg,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 28,
    borderTopWidth: 0.5,
    borderTopColor: '#1A1A1A',
  },
  selectionRow: {
    backgroundColor: Colors.card,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: '#1E1E1E',
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  selLabel: {
    fontSize: 11,
    color: Colors.textHint,
    marginBottom: 2,
  },
  selName: {
    fontSize: 14,
    color: Colors.textPrimary,
    fontWeight: '500',
  },
  selPrice: {
    fontSize: 20,
    color: Colors.primary,
    fontWeight: '600',
  },
  bookBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 8,
  },
  bookBtnText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0A0A0A',
  },
  bookHint: {
    fontSize: 11,
    color: '#444444',
    textAlign: 'center',
  },
  segWrapper: {
    backgroundColor: Colors.card,
    paddingHorizontal: 20,
  },
});
