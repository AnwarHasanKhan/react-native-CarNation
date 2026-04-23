import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PACKAGES } from '../../model/Packages';
import { VEHICLES } from '../../model/Vehicles';
import Header2 from '../../components/Header2/Header2';
import { Colors } from '../../assets/Colors';
import { styles } from './styles';
import { goBack } from '../../navigation/NavigationService';

const CheckIcon = ({ color }) => (
  <View
    style={[
      styles.checkCircle,
      { borderColor: color, backgroundColor: color + '22' },
    ]}
  >
    <View style={[styles.checkMark, { borderColor: color }]} />
  </View>
);

const TagBadge = ({ tag }) => {
  const isPopular = tag === 'Popular';
  return (
    <View
      style={[
        styles.tag,
        { backgroundColor: isPopular ? Colors.tintGreen : Colors.tintAmber },
      ]}
    >
      <Text
        style={[
          styles.tagText,
          { color: isPopular ? Colors.green : Colors.primary },
        ]}
      >
        {tag}
      </Text>
    </View>
  );
};

const PackageCard = ({ pkg, isActive, onPress }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={[styles.card, isActive && styles.cardActive]}
  >
    {pkg.tag && <TagBadge tag={pkg.tag} />}

    <View style={styles.cardHeader}>
      <View style={styles.cardHeaderLeft}>
        <View
          style={[
            styles.radioDot,
            { backgroundColor: isActive ? Colors.primary : '#2A2A2A' },
          ]}
        />
        <View>
          <Text style={styles.cardTitle}>{pkg.name}</Text>
          <Text style={styles.cardTime}>{pkg.time}</Text>
        </View>
      </View>
      <Text
        style={[
          styles.cardPrice,
          { color: isActive ? Colors.primary : Colors.textPrimary },
        ]}
      >
        ₹{pkg.price}
      </Text>
    </View>

    <View style={styles.divider} />

    {pkg.features.map((f, i) => (
      <View key={i} style={styles.featureRow}>
        <CheckIcon color={isActive ? Colors.primary : '#444444'} />
        <Text
          style={[
            styles.featureText,
            { color: isActive ? '#CCCCCC' : '#666666' },
          ]}
        >
          {f}
        </Text>
      </View>
    ))}
  </TouchableOpacity>
);

export default function PackagesScreen({ navigation }) {
  const [vehicle, setVehicle] = useState('car');
  const [selectedId, setSelectedId] = useState('qr');

  const packages = PACKAGES[vehicle];
  const selected = packages.find(p => p.id === selectedId) ?? packages[0];
   console.log('Console from PackageScrn:', selected)

  const handleVehicleChange = key => {
    setVehicle(key);
    setSelectedId(PACKAGES[key][0].id);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.header} />
      <Header2 title={"Car wash packages"}
      subtitle={'Choose you vehicle type'}
      onPress={()=>{goBack()}}/>

      {/* Segment */}
      <View style={styles.segWrapper}>
        <View style={styles.segContainer}>
          {VEHICLES.map(v => (
            <TouchableOpacity
              key={v.key}
              style={[styles.segBtn, vehicle === v.key && styles.segBtnActive]}
              onPress={() => handleVehicleChange(v.key)}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.segLabel,
                  vehicle === v.key && styles.segLabelActive,
                ]}
              >
                {v.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Package list */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {packages.map(pkg => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            isActive={selectedId === pkg.id}
            onPress={() => setSelectedId(pkg.id)}
          />
        ))}
        <View style={{ height: 200 }} />
      

      {/* Bottom bar */}
      <View style={styles.bottomBar}>
        <View style={styles.selectionRow}>
          <View>
            <Text style={styles.selLabel}>Selected</Text>
            <Text style={styles.selName}>{selected.name}</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.selLabel}>Price</Text>
            <Text style={styles.selPrice}>₹{selected.price}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.bookBtn} activeOpacity={0.85}>
          <Text style={styles.bookBtnText}>Book now</Text>
        </TouchableOpacity>
        <Text style={styles.bookHint}>Doorstep service · 30 min notice</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
