import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../assets/Colors";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },

  // Header
  header: {
    backgroundColor: '#111',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 16 : 12,
    paddingBottom: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#1e1e1e',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#1a1a1a',
    borderWidth: 0.5,
    borderColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtnText: {
    fontSize: 24,
    color: '#888',
    lineHeight: 28,
    marginTop: -2,
  },
  headerTitle: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '600',
    lineHeight: 22,
  },
  headerSub: {
    fontSize: 12,
    color: '#888',
  },

  // Progress
  progressBarRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 6,
  },
  progressSegment: {
    flex: 1,
    height: 4,
    borderRadius: 10,
    backgroundColor: '#2a2a2a',
  },
  progressSegmentActive: {
    flex: 1,
    height: 4,
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },
  stepLabel: {
    fontSize: 11,
    color: '#555',
    letterSpacing: 0.6,
  },

  // Scroll & layout
  stepScroll: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  stepContent: {
    padding: 20,
    paddingBottom: 40,
  },
  sectionLabel: {
    fontSize: 11,
    color: '#888',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 10,
    marginTop: 4,
  },

  // Vehicle card
  vehicleCard: {
    backgroundColor: '#111',
    borderRadius: 14,
    padding: 14,
    borderWidth: 0.5,
    borderColor: '#2a2a2a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  vehicleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  vehicleIconBox: {
    width: 40,
    height: 40,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicleName: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
  vehicleSub: {
    fontSize: 12,
    color: '#555',
  },
  changeBadge: {
    backgroundColor: '#1a1a00',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 0.5,
    borderColor: '#3a3000',
  },
  changeBadgeText: {
    fontSize: 11,
    color: Colors.primary,
    fontWeight: '500',
  },

  // Service card
  serviceCard: {
    backgroundColor: '#111',
    borderRadius: 14,
    padding: 14,
    borderWidth: 0.5,
    borderColor: '#2a2a2a',
    marginBottom: 10,
  },
  serviceCardSelected: {
    borderWidth: 2,
    borderColor:Colors.primary,
  },
  serviceCardInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  serviceCardLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    flex: 1,
    marginRight: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2a2a2a',
    marginTop: 4,
    flexShrink: 0,
  },
  dotSelected: {
    backgroundColor: Colors.primary,
  },
  serviceName: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 2,
  },
  serviceDesc: {
    fontSize: 11,
    color: '#555',
  },
  serviceCardRight: {
    alignItems: 'flex-end',
  },
  servicePrice: {
    fontSize: 15,
    color: '#888',
    fontWeight: '600',
  },
  servicePriceSelected: {
    color: Colors.primary,
  },
  serviceDuration: {
    fontSize: 11,
    color: '#555',
  },
  popularBadge: {
    backgroundColor: '#1a2a1a',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 1,
    marginBottom: 3,
  },
  popularBadgeText: {
    fontSize: 10,
    color: '#4CAF50',
    fontWeight: '500',
  },

  // Textarea
  textArea: {
    backgroundColor: '#111',
    borderWidth: 0.5,
    borderColor: '#2a2a2a',
    borderRadius: 12,
    padding: 12,
    color: '#fff',
    fontSize: 13,
    marginBottom: 20,
    minHeight: 80,
  },

  // Info / pickup card
  infoCard: {
    backgroundColor: '#111',
    borderRadius: 14,
    padding: 14,
    borderWidth: 0.5,
    borderColor: '#1e1e1e',
    marginBottom: 20,
  },
  infoCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  infoCardTitle: {
    fontSize: 13,
    color: '#4CAF50',
    fontWeight: '500',
  },
  pickupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pickupDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  pickupText: {
    fontSize: 12,
    color: '#666',
  },
  pickupLine: {
    width: 0.5,
    height: 12,
    backgroundColor: '#2a2a2a',
    marginLeft: 3,
    marginVertical: 3,
  },

  // Price bar
  priceBar: {
    backgroundColor: '#111',
    borderRadius: 14,
    padding: 14,
    borderWidth: 0.5,
    borderColor: '#2a2a2a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  priceBarLabel: {
    fontSize: 11,
    color: '#555',
    marginBottom: 2,
  },
  priceBarName: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
  priceBarAmount: {
    fontSize: 18,
    color: Colors.primary,
    fontWeight: '600',
  },

  // CTA
  ctaBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    width: '100%',
  },
  ctaBtnText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0a0a0a',
    letterSpacing: 0.3,
  },
  noPayNote: {
    fontSize: 11,
    color: '#444',
    textAlign: 'center',
    marginTop: 12,
  },

  // Address card
  addressCard: {
    backgroundColor: '#111',
    borderRadius: 14,
    padding: 14,
    borderWidth: 0.5,
    borderColor: '#2a2a2a',
    marginBottom: 20,
  },
  addressLabel: {
    fontSize: 11,
    color: '#555',
    marginBottom: 4,
  },
  addressText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },

  // Day scroll
  dayScroll: {
    paddingBottom: 4,
    gap: 8,
    marginBottom: 20,
  },
  dayChip: {
    backgroundColor: '#111',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#2a2a2a',
  },
  dayChipSelected: {
    backgroundColor:Colors.primary,
    borderColor: Colors.primary,
  },
  dayChipText: {
    fontSize: 13,
    color: '#888',
  },
  dayChipTextSelected: {
    color: '#0a0a0a',
    fontWeight: '600',
  },

  // Time grid
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  timeChip: {
    width: '47%',
    backgroundColor: '#111',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#2a2a2a',
  },
  timeChipSelected: {
    backgroundColor: '#1a1a00',
    borderColor: Colors.primary,
  },
  timeChipText: {
    fontSize: 14,
    color: '#888',
  },
  timeChipTextSelected: {
    color: Colors.primary,
    fontWeight: '500',
  },

  // Summary
  summaryCard: {
    backgroundColor: '#111',
    borderRadius: 14,
    padding: 16,
    borderWidth: 0.5,
    borderColor: '#2a2a2a',
    marginBottom: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: '#1e1e1e',
  },
  summaryRowLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  summaryKey: {
    fontSize: 13,
    color: '#888',
  },
  summaryVal: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '500',
  },

  // Confirmed
  successCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#1a2a1a',
    borderWidth: 2,
    borderColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  successTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 8,
  },
  successSub: {
    fontSize: 13,
    color: '#888',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  bookingIdCard: {
    backgroundColor: '#111',
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderWidth: 0.5,
    borderColor: '#2a2a2a',
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  bookingIdLabel: {
    fontSize: 11,
    color: '#555',
    letterSpacing: 0.6,
    marginBottom: 4,
  },
  bookingIdVal: {
    fontSize: 20,
    color: Colors.primary,
    fontWeight: '600',
    letterSpacing: 1,
  },
});
