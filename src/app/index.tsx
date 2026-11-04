import { View, StyleSheet, SafeAreaView, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Display } from '../components/Display';
import { Regilla } from '../components/Regilla';
import { useCalculator } from '../hooks/useCalculator';

export default function IndexScreen() {
  const {
    formula,
    prevNumber,
    history,
    clear,
    clearHistory,
    deleteLast,
    buildNumber,
    setOperationType,
    calculatePercentage,
    calculateResult,
    useHistoryItem,
  } = useCalculator();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.calculatorContainer}>
        
        {/* Panel de Historial Interactivo */}
        <View style={styles.historyWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.historyScroll}>
            {history.length > 0 && (
              <TouchableOpacity onPress={clearHistory} style={styles.clearHistoryBtn}>
                <Text style={styles.clearHistoryText}>🗑️</Text>
              </TouchableOpacity>
            )}
            {history.map((item, index) => (
              <TouchableOpacity 
                key={index} 
                onPress={() => useHistoryItem(item)}
                style={styles.historyItemTouchable}
              >
                <Text style={styles.historyItem}>{item}</Text>
              </TouchableOpacity>
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
  historyWrapper: {
    height: 45,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  historyScroll: {
    alignItems: 'center',
    gap: 8,
  },
  clearHistoryBtn: {
    backgroundColor: '#da3633',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearHistoryText: {
    fontSize: 14,
  },
  historyItemTouchable: {
    borderRadius: 6,
    overflow: 'hidden',
  },
  historyItem: {
    fontFamily: 'PixelFont',
    fontSize: 14,
    color: '#8b949e',
    backgroundColor: '#161b22',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#30363d',
  },
});