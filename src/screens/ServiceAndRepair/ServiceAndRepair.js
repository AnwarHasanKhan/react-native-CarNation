import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SERVICES } from './ServiceModel';
import Header2 from '../../components/Header2/Header2';
import { ProgressBar } from '../../components/ProgressBar/ProgressBar';
import { goBack } from '../../navigation/NavigationService';
import {StepSelectService} from '../../components/ProgressStepScreens/Step1Screen'
import {StepSchedule} from '../../components/ProgressStepScreens/Step2Screen'
import {StepReview} from '../../components/ProgressStepScreens/Step3Screen'
import {ConfirmedScreen} from '../../components/ProgressStepScreens/ConfirmScreen'

export default function CarServiceBooking() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('basic');
  const [selectedDay, setSelectedDay] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [repairNote, setRepairNote] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const service = SERVICES.find(s => s.id === selectedService);

  const handleReset = () => {
    setStep(1);
    setSelectedService('basic');
    setSelectedDay('Tomorrow');
    setSelectedTime('11:00 AM');
    setRepairNote('');
    setConfirmed(false);
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#000000'}
        hidden={false}
        translucent={false}
      />
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <Header2
            title={'Car Servicing & Repair'}
            subtitle={'Free pick-up & drop included'}
            onPress={() => {
              if (step === 1) {
                goBack();
              } else {
                setStep(step - 1);
              }
            }}
          />
          {confirmed ? (
            <>
              <View style={styles.progressBarRow}>
                {[1, 2, 3].map(i => (
                  <View key={i} style={styles.progressSegmentActive} />
                ))}
              </View>
              <Text style={styles.stepLabel}>Booking confirmed</Text>
            </>
          ) : (
            <ProgressBar step={step} />
          )}
        </View>
        {/* Body */}
        {confirmed ? (
          <ConfirmedScreen
            service={service}
            selectedDay={selectedDay}
            selectedTime={selectedTime}
            onReset={handleReset}
          />
        ) : step === 1 ? (
          <StepSelectService
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            repairNote={repairNote}
            setRepairNote={setRepairNote}
            onNext={() => setStep(2)}
          />
        ) : step === 2 ? (
          <StepSchedule
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            service={service}
            onNext={() => setStep(3)}
          />
        ) : (
          <StepReview
            service={service}
            selectedDay={selectedDay}
            selectedTime={selectedTime}
            onConfirm={() => setConfirmed(true)}
          />
        )}
      </SafeAreaView>
    </>
  );
}
