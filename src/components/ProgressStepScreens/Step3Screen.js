import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { formatPrice } from '../../utils/helpers/PriceFormatter';
import { styles } from './styles';
import { Colors } from '../../assets/Colors';

export const SummaryRow = ({ label, value, last, accent }) => (
  <View style={[styles.summaryRow, last && styles.summaryRowLast]}>
    <Text
      style={[
        styles.summaryKey,
        accent && { color: '#FFD600', fontWeight: '500' },
      ]}
    >
      {label}
    </Text>
    <Text
      style={[styles.summaryVal, accent && { color: '#FFD600', fontSize: 16 }]}
    >
      {value}
    </Text>
  </View>
);

export const StepReview = ({
  service,
  selectedDay,
  selectedTime,
  onConfirm,
}) => (
  <ScrollView
    style={styles.stepScroll}
    contentContainerStyle={styles.stepContent}
    showsVerticalScrollIndicator={false}
  >
    <Text style={styles.sectionLabel}>Booking summary</Text>
    <View style={styles.summaryCard}>
      {[
        { label: 'Service', value: service.name },
        { label: 'Duration', value: service.duration },
        { label: 'Date', value: selectedDay },
        { label: 'Time', value: selectedTime },
        { label: 'Pick-up', value: 'Vivek Khand, Lucknow' },
        { label: 'Drop', value: 'Same address', last: true },
      ].map(row => (
        <SummaryRow key={row.label} {...row} />
      ))}
    </View>

    <View style={[styles.summaryCard, { borderColor: '#3a3000' }]}>
      <SummaryRow label="Service charge" value={formatPrice(service.price)} />
      <SummaryRow label="Pick-up & drop" value="Free" />
      <View style={[styles.summaryRowLast]}>
        <Text style={{ fontSize: 13, color: '#FFD600', fontWeight: '500' }}>
          Total payable
        </Text>
        <Text style={{ fontSize: 16, color: '#FFD600', fontWeight: '600' }}>
          {formatPrice(service.price)}
        </Text>
      </View>
    </View>

    <View style={[styles.infoCard, { marginBottom: 16 }]}>
      <View style={styles.infoCardHeader}>
        <Image
          source={require('../../assets/icons/insurance.png')}
          style={{ height: 20, width: 20, tintColor: Colors.primary }}
        />
        <Text style={[styles.infoCardTitle, { color: '#888' }]}>
          Payment after service completion
        </Text>
      </View>
    </View>

    <TouchableOpacity
      style={styles.ctaBtn}
      onPress={onConfirm}
      activeOpacity={0.85}
    >
      <Text style={styles.ctaBtnText}>Confirm booking →</Text>
    </TouchableOpacity>
    <Text style={styles.noPayNote}>No payment now · pay after service</Text>
  </ScrollView>
);


