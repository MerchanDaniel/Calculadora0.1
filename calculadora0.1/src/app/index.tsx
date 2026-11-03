import { View, StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native';
import { Display } from '../components/Display';
import { Regilla } from '../components/Regilla';
import { useCalculator } from '../hooks/useCalculator';

export default function IndexScreen() {
  const {
    formula,
    prevNumber,
    history,
    clear,
    deleteLast,
    buildNumber,
    setOperationType,
    calculatePercentage,
    calculateResult,
  } = useCalculator();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.calculatorContainer}>
        
        {/* Panel de Historial Deslizable */}
        <View style={styles.historyContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.historyScroll}>
            {history.map((item, index) => (
              <Text key={index} style={styles.historyItem}>{item}</Text>
            ))}
          </ScrollView>
        </View>

        <Display mainValue={formula} subValue={prevNumber} />
        <Regilla
          onBuildNumber={buildNumber}
          onClear={clear}
          onDelete={deleteLast}
          onOperation={setOperationType}
          onPercentage={calculatePercentage}
          onCalculate={calculateResult}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  historyContainer: {
    height: 40,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  historyScroll: {
    alignItems: 'center',
    gap: 12,
  },
  historyItem: {
    fontFamily: 'PixelFont',
    fontSize: 14,
    color: '#8b949e',
    backgroundColor: '#161b22',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    overflow: 'hidden',
  },
});