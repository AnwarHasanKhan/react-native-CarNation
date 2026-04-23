import { Text, View } from "react-native";
import {styles} from './styles'

export const ProgressBar = ({ step, total = 3 }) => (
  <View>
    <View style={styles.progressBarRow}>
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          style={[
            styles.progressSegment,
            i < step && styles.progressSegmentActive,
          ]}
        />
      ))}
    </View>
    <Text style={styles.stepLabel}>
      Step {step} of {total} —{' '}
      {step === 1
        ? 'Select service'
        : step === 2
        ? 'Schedule pick-up'
        : 'Review & confirm'}
    </Text>
  </View>
);