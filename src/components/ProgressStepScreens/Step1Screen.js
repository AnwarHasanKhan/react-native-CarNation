import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SERVICES } from '../../screens/ServiceAndRepair/ServiceModel';
import {formatPrice} from '../../utils/helpers/PriceFormatter'
import {styles} from './styles'
import { Colors } from '../../assets/Colors';

 export const ServiceCard = ({ service, selected, onSelect }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => onSelect(service.id)}
    style={[styles.serviceCard, selected && styles.serviceCardSelected]}
  >
    <View style={styles.serviceCardInner}>
      <View style={styles.serviceCardLeft}>
        <View style={[styles.dot, selected && styles.dotSelected]} />
        <View style={{ flex: 1 }}>
          <Text style={styles.serviceName}>{service.name}</Text>
          <Text style={styles.serviceDesc}>{service.desc}</Text>
        </View>
      </View>
      <View style={styles.serviceCardRight}>
        {service.badge && (
          <View style={styles.popularBadge}>
            <Text style={styles.popularBadgeText}>{service.badge}</Text>
          </View>
        )}
        <Text
          style={[styles.servicePrice, selected && styles.servicePriceSelected]}
        >
          {formatPrice(service.price)}
        </Text>
        <Text style={styles.serviceDuration}>{service.duration}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export const StepSelectService = ({
  selectedService,
  setSelectedService,
  repairNote,
  setRepairNote,
  onNext,
}) => {
  const service = SERVICES.find(s => s.id === selectedService);

  return (
    <ScrollView
      style={styles.stepScroll}
      contentContainerStyle={styles.stepContent}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {/* Vehicle */}
      <Text style={styles.sectionLabel}>Your vehicle</Text>
      <View style={styles.vehicleCard}>
        <View style={styles.vehicleLeft}>
          <View style={styles.vehicleIconBox}>
            <Image
              source={require('../../assets/icons/car-wash.png')}
              style={{ height: 20, width: 20, tintColor: Colors.primary }}
            />
          </View>
          <View>
            <Text style={styles.vehicleName}>Generic</Text>
            <Text style={styles.vehicleSub}>Vivek Khand, Lucknow</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.changeBadge} activeOpacity={0.7}>
          <Text style={styles.changeBadgeText}>Change</Text>
        </TouchableOpacity>
      </View>

      {/* Services */}
      <Text style={styles.sectionLabel}>Choose a service</Text>
      {SERVICES.map(s => (
        <ServiceCard
          key={s.id}
          service={s}
          selected={selectedService === s.id}
          onSelect={setSelectedService}
        />
      ))}

      {selectedService === 'repair' && (
        <TextInput
          style={styles.textArea}
          multiline
          numberOfLines={3}
          placeholder="Describe your issue (e.g. engine noise, brake problem...)"
          placeholderTextColor="#555"
          value={repairNote}
          onChangeText={setRepairNote}
          textAlignVertical="top"
        />
      )}

      {/* Pickup info */}
      <View style={styles.infoCard}>
        <View style={styles.infoCardHeader}>
          <Image
            source={require('../../assets/icons/check.png')}
            style={{ height: 20, width: 20, tintColor: Colors.green }}
          />
          <Text style={styles.infoCardTitle}>Free pick-up & drop included</Text>
        </View>
        <View style={styles.pickupRow}>
          <View style={[styles.pickupDot, { backgroundColor: '#FFD600' }]} />
          <Text style={styles.pickupText}>Pick-up from your doorstep</Text>
        </View>
        <View style={styles.pickupLine} />
        <View style={styles.pickupRow}>
          <View style={[styles.pickupDot, { backgroundColor: '#4CAF50' }]} />
          <Text style={styles.pickupText}>Drop back after service</Text>
        </View>
      </View>

      {/* Price bar */}
      <View style={styles.priceBar}>
        <View>
          <Text style={styles.priceBarLabel}>Selected</Text>
          <Text style={styles.priceBarName}>{service?.name}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.priceBarLabel}>Total</Text>
          <Text style={styles.priceBarAmount}>
            {formatPrice(service?.price)}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.ctaBtn}
        onPress={onNext}
        activeOpacity={0.85}
      >
        <Text style={styles.ctaBtnText}>Schedule Pick-up</Text>
      </TouchableOpacity>
      <Text style={styles.noPayNote}>No payment now · pay after service</Text>
    </ScrollView>
  );
};
