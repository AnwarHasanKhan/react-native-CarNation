import { StyleSheet } from 'react-native';
import { Colors } from '../../assets/Colors';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.card,
    paddingTop: 12,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#1E1E1E',
  },
  backBtn: {
    width: 34,
    height: 34,
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 22,
    color: Colors.textMuted,
    lineHeight: 26,
  },
  headerTitle: {
    fontSize: 17,
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  headerSub: {
    fontSize: 12,
    color: Colors.textHint,
    marginTop: 1,
  },
});
