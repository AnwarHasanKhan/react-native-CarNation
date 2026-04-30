import { StyleSheet } from 'react-native';
import { Colors } from '../../assets/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBg,
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  section: {
    marginBottom: 20,
    padding: 14,
    backgroundColor: Colors.card,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: Colors.textPrimary,
    lineHeight: 20,
  },
  bullet: {
    fontSize: 14,
    color: Colors.textPrimary,
    marginVertical: 2,
  },
});
