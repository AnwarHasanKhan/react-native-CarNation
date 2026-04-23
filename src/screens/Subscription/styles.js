import { StyleSheet } from "react-native";
import {Colors} from '../../assets/Colors'

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.appBg,
  },

  // Header
//   header: {
//     backgroundColor: Colors.header,
//     paddingHorizontal: 20,
//     paddingTop: 12,
//     paddingBottom: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 12,
//     borderBottomWidth: 0.5,
//     borderBottomColor: '#1E1E1E',
//   },
//   backBtn: {
//     width: 34,
//     height: 34,
//     backgroundColor: '#1A1A1A',
//     borderRadius: 10,
//     borderWidth: 0.5,
//     borderColor: '#2A2A2A',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   backArrow: {
//     fontSize: 22,
//     color: Colors.textMuted,
//     lineHeight: 26,
//   },
//   headerTitle: {
//     fontSize: 17,
//     color: Colors.textPrimary,
//     fontWeight: '600',
//   },
//   headerSub: {
//     fontSize: 12,
//     color: Colors.textHint,
//     marginTop: 1,
//   },

  // Segment
  segWrapper: {
    backgroundColor: Colors.card,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  segContainer: {
    backgroundColor: Colors.seg,
    borderRadius: 12,
    padding: 4,
    flexDirection: 'row',
    gap: 4,
  },
  segBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  segBtnActive: {
    backgroundColor: Colors.primary,
  },
  segLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#555555',
  },
  segLabelActive: {
    color: '#0A0A0A',
    fontWeight: '600',
  },

  // Scroll
  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },

  // Package card
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: Colors.border,
    padding: 14,
    marginBottom: 10,
  },
  cardActive: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  tag: {
    alignSelf: 'flex-start',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 10,
    fontWeight: '500',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    flex: 1,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginTop: 3,
  },
  cardTitle: {
    fontSize: 15,
    color: Colors.textPrimary,
    fontWeight: '500',
    marginBottom: 2,
  },
  cardTime: {
    fontSize: 11,
    color: Colors.textHint,
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: '600',
  },
  divider: {
    height: 0.5,
    backgroundColor: '#1E1E1E',
    marginBottom: 10,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  checkCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: {
    width: 5,
    height: 3,
    borderBottomWidth: 1.2,
    borderLeftWidth: 1.2,
    transform: [{ rotate: '-45deg' }],
    marginTop: -1,
  },
  featureText: {
    fontSize: 12,
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
});