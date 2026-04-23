import { StyleSheet } from "react-native";
import { Colors } from "../../assets/Colors";

export const styles = StyleSheet.create({

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
  }
})