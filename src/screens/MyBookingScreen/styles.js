import { Platform, StyleSheet } from 'react-native';

const COLORS = {
  bg: '#0a0a0a',
  card: '#111',
  border: '#2a2a2a',
  borderSubtle: '#1e1e1e',
  yellow: '#FFD600',
  yellowBg: '#1a1a00',
  yellowBorder: '#FFD600',
  green: '#4CAF50',
  greenBg: '#1a2a1a',
  red: '#EF5350',
  redBg: '#2a1a1a',
  purple: '#7986CB',
  purpleBg: '#1a1a2e',
  white: '#fff',
  textPrimary: '#fff',
  textSecondary: '#888',
  textMuted: '#666',
  textDim: '#555',
};

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  // Header
  header: {
    backgroundColor: '#111',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 8 : 8,
    paddingBottom: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.borderSubtle,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 14,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#1a1a1a',
    borderWidth: 0.5,
    borderColor: COLORS.border,
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
    color: COLORS.white,
    fontWeight: '500',
  },
  headerSub: {
    fontSize: 12,
    color: COLORS.textMuted,
  },

  // Tabs
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 3,
    gap: 2,
  },
  tab: {
    flex: 1,
    paddingVertical: 7,
    borderRadius: 9,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: COLORS.yellow,
  },
  tabText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#0a0a0a',
    fontWeight: '600',
  },

  // List
  listContent: {
    paddingBottom: 40,
  },

  // Summary strip
  summaryStrip: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 14,
    overflow: 'hidden',
  },
  summaryItem: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  summaryItemBorder: {
    borderRightWidth: 0.5,
    borderRightColor: COLORS.border,
  },
  summaryNum: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 2,
  },
  summaryLabel: {
    fontSize: 10,
    color: COLORS.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },

  // Filter chips
  filterScroll: {
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 14,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    backgroundColor: COLORS.card,
  },
  filterChipActive: {
    backgroundColor: COLORS.yellowBg,
    borderColor: COLORS.yellow,
  },
  filterChipText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  filterChipTextActive: {
    color: COLORS.yellow,
  },

  // Booking card
  bookingCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    marginHorizontal: 20,
    overflow: 'hidden',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 14,
    gap: 8,
  },
  cardLeft: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
    alignItems: 'flex-start',
  },
  serviceIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  serviceIconText: {
    fontSize: 18,
  },
  bookingIdText: {
    fontSize: 11,
    color: COLORS.textDim,
    marginBottom: 2,
    letterSpacing: 0.3,
  },
  bookingName: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: '500',
    marginBottom: 3,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calIcon: {
    fontSize: 11,
  },
  bookingDate: {
    fontSize: 12,
    color: COLORS.textMuted,
  },

  // Status badge
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    flexShrink: 0,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '500',
  },

  // Ongoing bar
  ongoingBar: {
    backgroundColor: COLORS.purpleBg,
    borderTopWidth: 0.5,
    borderTopColor: '#2a2a3e',
    paddingHorizontal: 14,
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  ongoingDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: COLORS.purple,
  },
  ongoingText: {
    fontSize: 12,
    color: COLORS.purple,
    fontWeight: '500',
    flex: 1,
  },

  // Star rating
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingBottom: 10,
    gap: 2,
  },
  starFilled: {
    fontSize: 14,
    color: COLORS.yellow,
  },
  starEmpty: {
    fontSize: 14,
    color: COLORS.border,
  },
  ratingLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginLeft: 6,
  },

  // Divider
  divider: {
    height: 0.5,
    backgroundColor: COLORS.borderSubtle,
    marginHorizontal: 14,
  },

  // Card bottom
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    paddingHorizontal: 14,
    gap: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaIcon: {
    fontSize: 12,
  },
  metaText: {
    fontSize: 12,
    color: COLORS.textMuted,
  },
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardPrice: {
    fontSize: 15,
    color: COLORS.yellow,
    fontWeight: '500',
  },

  // Action buttons
  actionRow: {
    flexDirection: 'row',
    gap: 6,
  },
  trackBtn: {
    backgroundColor: COLORS.yellowBg,
    borderWidth: 0.5,
    borderColor: COLORS.yellow,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  trackBtnText: {
    fontSize: 11,
    color: COLORS.yellow,
    fontWeight: '500',
  },
  cancelBtn: {
    backgroundColor: COLORS.redBg,
    borderWidth: 0.5,
    borderColor: COLORS.red,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  cancelBtnText: {
    fontSize: 11,
    color: COLORS.red,
    fontWeight: '500',
  },

  // Empty state
  emptyState: {
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  emptyIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: '500',
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: 13,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  bookNowBtn: {
    backgroundColor: COLORS.yellow,
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  bookNowText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0a0a0a',
  },
});
