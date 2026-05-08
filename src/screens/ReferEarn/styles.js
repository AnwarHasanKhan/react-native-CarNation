import { Platform, StyleSheet } from "react-native";

const COLORS = {
  bg: '#0a0a0a',
  card: '#111111',
  border: '#2a2a2a',
  borderDim: '#1e1e1e',
  yellow: '#FFD600',
  yellowBg: '#1a1a00',
  yellowBorder: '#3a3000',
  green: '#4CAF50',
  greenBg: '#1a2a1a',
  red: '#EF5350',
  redBg: '#2a1a1a',
  purple: '#7986CB',
  purpleBg: '#1a1a2e',
  white: '#FFFFFF',
  textPrimary: '#FFFFFF',
  textSecondary: '#888888',
  textMuted: '#555555',
  textDim: '#444444',
};

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: COLORS.bg,
  },

//   // Header
//   header: {
//     backgroundColor: '#111111',
//     paddingHorizontal: 20,
//     paddingTop: Platform.OS === 'android' ? 8 : 8,
//     borderBottomWidth: 0.5,
//     borderBottomColor: COLORS.borderDim,
//   },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
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
    fontSize: 26,
    color: '#888',
    lineHeight: 30,
    marginTop: -2,
  },
  headerTitle: {
    fontSize: 17,
    color: COLORS.textPrimary,
    fontWeight: '500',
  },
  headerSub: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 1,
  },

  // Scroll
  scroll: {
    flex: 1,
    // backgroundColor: COLORS.bg,
  },
  scrollContent: {
    paddingBottom: 40,
  },

  // Section label
  sectionLabel: {
    fontSize: 11,
    color: COLORS.textSecondary,
    letterSpacing: 0.8,
    paddingHorizontal: 20,
    marginTop: 4,
  },

  // Hero
  hero: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 8,
  },
  coinRing: {
    width: 80,
    height: 80,
    borderRadius: 40,
    // backgroundColor: COLORS.yellowBg,
    // borderWidth: 1,
    borderColor: COLORS.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 22,
    color: COLORS.textPrimary,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSub: {
    fontSize: 13,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },

  // Code box
  codeBox: {
    // backgroundColor: COLORS.card,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    borderRadius: 14,
    padding: 14,
    marginHorizontal: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  codeLabel: {
    fontSize: 11,
    color: COLORS.textMuted,
    letterSpacing: 0.6,
    marginBottom: 4,
  },
  codeVal: {
    fontSize: 20,
    color: COLORS.yellow,
    fontWeight: '500',
    letterSpacing: 1.5,
  },
  copyBtn: {
    backgroundColor: COLORS.yellowBg,
    borderWidth: 0.5,
    borderColor: COLORS.yellow,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  copyBtnActive: {
    backgroundColor: '#2a2a00',
  },
  copyBtnText: {
    fontSize: 12,
    color: COLORS.yellow,
    fontWeight: '500',
  },

  // Share button
  shareBtn: {
    backgroundColor: COLORS.yellow,
    borderRadius: 14,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginBottom: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareBtnText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#0a0a0a',
  },

  // Steps
  stepsContainer: {
    paddingHorizontal: 20,
    marginBottom: 28,
    marginTop: 12,
  },
  stepRow: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'flex-start',
  },
  stepLineWrap: {
    alignItems: 'center',
  },
  stepNum: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.yellowBg,
    borderWidth: 0.5,
    borderColor: COLORS.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  stepNumText: {
    fontSize: 13,
    color: COLORS.yellow,
    fontWeight: '500',
  },
  stepConnector: {
    width: 1,
    height: 28,
    backgroundColor: COLORS.border,
    marginVertical: 4,
  },
  stepContent: {
    flex: 1,
    paddingTop: 6,
  },
  stepTitle: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: '500',
    marginBottom: 3,
  },
  stepDesc: {
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },

  // Rewards grid
  rewardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 28,
    marginTop: 12,
  },
  rewardCard: {
    width: '47.5%',
    backgroundColor: COLORS.card,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    borderRadius: 14,
    padding: 14,
  },
  rewardIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  rewardAmt: {
    fontSize: 18,
    color: COLORS.yellow,
    fontWeight: '500',
    marginBottom: 3,
  },
  rewardLabel: {
    fontSize: 11,
    color: COLORS.textSecondary,
    lineHeight: 16,
  },

  // Stats
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 28,
    marginTop: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
  },
  statNum: {
    fontSize: 22,
    color: COLORS.textPrimary,
    fontWeight: '500',
    marginBottom: 3,
  },
  statLabel: {
    fontSize: 11,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 15,
  },

  // Friends
  friendsCard: {
    marginHorizontal: 20,
    backgroundColor: COLORS.card,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 20,
    marginTop: 12,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#1a1a1a',
  },
  friendLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  friendAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  friendAvatarText: {
    fontSize: 13,
    fontWeight: '500',
  },
  friendName: {
    fontSize: 13,
    color: COLORS.textPrimary,
    fontWeight: '500',
    marginBottom: 2,
  },
  friendDate: {
    fontSize: 11,
    color: COLORS.textMuted,
  },
  friendReward: {
    fontSize: 13,
    color: COLORS.green,
    fontWeight: '500',
  },

  // T&C
  tnc: {
    fontSize: 11,
    color: COLORS.textDim,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 18,
  },
});
