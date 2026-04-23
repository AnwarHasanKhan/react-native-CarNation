import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { DAYS, TIME_SLOTS } from '../../screens/ServiceAndRepair/ServiceModel';
import {formatPrice} from '../../utils/helpers/PriceFormatter'
import {styles} from './styles'

export const StepSchedule = ({
  selectedDay,
  setSelectedDay,
  selectedTime,
  setSelectedTime,
  service,
  onNext,
}) => (
  <ScrollView
    style={styles.stepScroll}
    contentContainerStyle={styles.stepContent}
    showsVerticalScrollIndicator={false}
  >
    <Text style={styles.sectionLabel}>Pick-up address</Text>
    <View style={styles.addressCard}>
      <Text style={styles.addressLabel}>Home</Text>
      <Text style={styles.addressText}>
        Vivek Khand Road, Vivek Khand, Lucknow
      </Text>
    </View>

    <Text style={styles.sectionLabel}>Select date</Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.dayScroll}
    >
      {DAYS.map(d => (
        <TouchableOpacity
          key={d}
          activeOpacity={0.8}
          onPress={() => setSelectedDay(d)}
          style={[styles.dayChip, selectedDay === d && styles.dayChipSelected]}
        >
          <Text
            style={[
              styles.dayChipText,
              selectedDay === d && styles.dayChipTextSelected,
            ]}
          >
            {d}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>

    <Text style={styles.sectionLabel}>Select time slot</Text>
    <View style={styles.timeGrid}>
      {TIME_SLOTS.map(t => (
        <TouchableOpacity
          key={t}
          activeOpacity={0.8}
          onPress={() => setSelectedTime(t)}
          style={[
            styles.timeChip,
            selectedTime === t && styles.timeChipSelected,
          ]}
        >
          <Text
            style={[
              styles.timeChipText,
              selectedTime === t && styles.timeChipTextSelected,
            ]}
          >
            {t}
          </Text>
        </TouchableOpacity>
      ))}
    </View>

    <View style={styles.priceBar}>
      <View>
        <Text style={styles.priceBarLabel}>Pick-up</Text>
        <Text style={styles.priceBarName}>
          {selectedDay} · {selectedTime}
        </Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.priceBarLabel}>Total</Text>
        <Text style={styles.priceBarAmount}>{formatPrice(service?.price)}</Text>
      </View>
    </View>

    <TouchableOpacity
      style={styles.ctaBtn}
      onPress={onNext}
      activeOpacity={0.85}
    >
      <Text style={styles.ctaBtnText}>Review booking →</Text>
    </TouchableOpacity>
    <Text style={styles.noPayNote}>No payment now · pay after service</Text>
  </ScrollView>
);