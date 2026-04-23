import { Colors } from '../../assets/Colors';

const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  card1: {
    backgroundColor: Colors.card,
    flex: 1,
    borderRadius: 10,
    padding: 20,
    gap: 15,
    elevation: 5,
    justifyContent: 'space-between',
  },
  card2: {
    backgroundColor: Colors.card,
    flex: 1,
    borderRadius: 10,
    padding: 20,
    gap: 20,
    elevation: 5,
  },
  dot1: {
    width: 50,
    height: 50,
    backgroundColor: Colors.texthighlight,
    position: 'absolute',
    borderRadius: 25,
    zIndex: -10,
    right: 50,
    top: 40,
    overflow: 'hidden',
  },
  dot2: {
    width: 60,
    height: 60,
    backgroundColor: Colors.dot,
    position: 'absolute',
    borderRadius: 30,
    zIndex: -10,
    right: 100,
    top: 60,
    overflow: 'hidden',
  },
});
