import { StyleSheet } from 'react-native';
import { Colors } from '../../assets/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems:'center'
  },
  headericon: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 40,
    height: 40,
    width: 40,
  },
  headertxt: { fontSize: 14, fontWeight: 'bold', color: Colors.textMuted },
  address: {
    fontSize: 14,
    fontWeight: '600',
    color: '#EEEEEE',
  },
});
