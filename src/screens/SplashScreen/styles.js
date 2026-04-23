import { StyleSheet } from 'react-native';
import { Colors } from '../../assets/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.appBg,
  },
  logo: {
    backgroundColor: Colors.primary,
    marginBottom: 10,
    height: 140,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
    padding: 10,
    borderBlockColor: Colors.border
  },
  logotxt: {
    fontSize: 22,
    fontWeight: '700',
    fontStyle: 'italic',
    color: Colors.textHint
  },
  txt: {
    fontSize: 17,
    color: Colors.textPrimary
  },
});
