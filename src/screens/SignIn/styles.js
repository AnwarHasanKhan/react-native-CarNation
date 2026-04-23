import { StyleSheet } from 'react-native';
import {Colors} from '../../assets/Colors'

export const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textMuted
  },
  skipbtn: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    top: 20,
    right: 20,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderWidth: 0.2,
  },
});
