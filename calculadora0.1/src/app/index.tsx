import { View, StyleSheet } from 'react-native';
import { Display } from '../components/Display';
import { Regilla } from '../components/Regilla';
import { useCalculator } from '../hooks/UseCalculator';

export default function IndexScreen() {
  const {
    formula,
    prevNumber,
    clear,
    deleteLast,
    buildNumber,
    setOperationType,
    calculateResult,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <Display mainValue={formula} subValue={prevNumber} />
      <Regilla
        onBuildNumber={buildNumber}
        onClear={clear}
        onDelete={deleteLast}
        onOperation={setOperationType}
        onCalculate={calculateResult}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  calculatorContainer: {
    flex: 1,
    backgroundColor: '#38B6FF',
  },
});