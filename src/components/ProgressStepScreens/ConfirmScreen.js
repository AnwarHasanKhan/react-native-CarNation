import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { randomBookingId } from '../../utils/helpers/RandomIDGen';
import { formatPrice } from '../../utils/helpers/PriceFormatter';
import {styles} from './styles'
import {SummaryRow} from '../ProgressStepScreens/Step3Screen'
import { Colors } from '../../assets/Colors';

export const ConfirmedScreen = ({
  service,
  selectedDay,
  selectedTime,
  onReset,
}) => {
  const [bookingId] = useState(randomBookingId);

  return (
    <ScrollView
      style={styles.stepScroll}
      contentContainerStyle={[styles.stepContent, { alignItems: 'center' }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.successCircle}>
        <Image
          source={require('../../assets/icons/check.png')}
          style={{ height: 25, width: 25, tintColor: Colors.green }}
        />
      </View>

      <Text style={styles.successTitle}>Booking confirmed!</Text>
      <Text style={styles.successSub}>
        Your {service.name} is scheduled for {selectedDay} at {selectedTime}.
        Our driver will pick up your car from Vivek Khand, Lucknow.
      </Text>

      <View style={styles.bookingIdCard}>
        <Text style={styles.bookingIdLabel}>BOOKING ID</Text>
        <Text style={styles.bookingIdVal}>{bookingId}</Text>
      </View>

      <View style={[styles.summaryCard, { width: '100%' }]}>
        {[
          { label: 'Service', value: service.name },
          { label: 'Date', value: selectedDay },
          { label: 'Time', value: selectedTime },
          { label: 'Pick-up', value: 'Vivek Khand, Lucknow' },
          {
            label: 'Amount',
            value: formatPrice(service.price),
            last: true,
            accent: true,
          },
        ].map(row => (
          <SummaryRow key={row.label} {...row} />
        ))}
      </View>

      <TouchableOpacity
        style={styles.ctaBtn}
        onPress={onReset}
        activeOpacity={0.85}
      >
        <Text style={styles.ctaBtnText}>Back to home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};