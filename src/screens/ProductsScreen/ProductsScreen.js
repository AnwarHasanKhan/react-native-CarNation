import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../assets/Colors';
import Header2 from '../../components/Header2/Header2';
import usefetchProducts from '../../hooks/usefetchProducts';
import { goBack } from '../../navigation/NavigationService';

const ProductsScreen = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const ProdScreen = usefetchProducts({ product, loading, error });

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.images[0] }} style={styles.image} />
      <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
        <View style={{ height: '100%', width: '65%' }}>
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <Text
          style={styles.cartbtn}
          onPress={x => {
            dispatch(addItemToCart(item));
          }}
        >
          Add Item
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          backgroundColor: Colors.featureBg,
          borderRadius: 20,
          elevation: 5,
          position: 'absolute',
          top: 10,
          right: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={x => {
          dispatch(addToWishlist(item));
        }}
      >
        <Image
          source={require('../../assets/icons/heart.png')}
          style={{
            width: 20,
            height: 20,
            tintColor: Colors.primary,
          }}
        />
      </TouchableOpacity>
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
        <Header2
          title={'Shop Products'}
          subtitle={'Choose best for your car'}
          onPress={()=>{goBack()}}
        />
        <View style={{ flex: 1 }}>
          <FlatList
            data={ProdScreen}
            renderItem={renderItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ padding: 4 }}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            ListFooterComponent={<View style={{ height: 100 }} />}
          />
        </View>
        {/* Bottom bar */}
        <View style={styles.bottomBar}>
          {/* <View style={styles.selectionRow}>
            <View>
              <Text style={styles.selLabel}>Selected</Text>
              <Text style={styles.selName}>{selected.name}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.selLabel}>Price</Text>
              <Text style={styles.selPrice}>₹{item.price}</Text>
            </View>
          </View> */}
          <TouchableOpacity style={styles.bookBtn} activeOpacity={0.85}>
            <Text style={styles.bookBtnText}>Buy now</Text>
          </TouchableOpacity>
          <Text style={styles.bookHint}>Read Terms & Conditions · For more info</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ProductsScreen;
