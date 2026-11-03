import { View, StyleSheet } from 'react-native';
import { Boton } from './Boton';

interface RegillaProps {
  onBuildNumber: (num: string) => void;
  onClear: () => void;
  onDelete: () => void;
  onOperation: (op: string) => void;
  onPercentage: () => void;
  onCalculate: () => void;
}

export function Regilla({ onBuildNumber, onClear, onDelete, onOperation, onPercentage, onCalculate }: RegillaProps) {
  return (
    <View style={styles.buttonsContainer}>
      {/* Fila 1 */}
      <View style={styles.row}>
        <Boton label="AC" onPress={onClear} type="action" />
        <Boton label="⌫" onPress={onDelete} type="action" />
        <Boton label="%" onPress={onPercentage} type="action" />
        <Boton label="÷" onPress={() => onOperation('÷')} type="operator" />
      </View>

      {/* Fila 2 */}
      <View style={styles.row}>
        <Boton label="7" onPress={() => onBuildNumber('7')} type="number" />
        <Boton label="8" onPress={() => onBuildNumber('8')} type="number" />
        <Boton label="9" onPress={() => onBuildNumber('9')} type="number" />
        <Boton label="×" onPress={() => onOperation('×')} type="operator" />
      </View>

      {/* Fila 3 */}
      <View style={styles.row}>
        <Boton label="4" onPress={() => onBuildNumber('4')} type="number" />
        <Boton label="5" onPress={() => onBuildNumber('5')} type="number" />
        <Boton label="6" onPress={() => onBuildNumber('6')} type="number" />
        <Boton label="-" onPress={() => onOperation('-')} type="operator" />
      </View>

      {/* Fila 4 */}
      <View style={styles.row}>
        <Boton label="1" onPress={() => onBuildNumber('1')} type="number" />
        <Boton label="2" onPress={() => onBuildNumber('2')} type="number" />
        <Boton label="3" onPress={() => onBuildNumber('3')} type="number" />
        <Boton label="+" onPress={() => onOperation('+')} type="operator" />
      </View>

      {/* Fila 5 */}
      <View style={styles.row}>
        <Boton label="." onPress={() => onBuildNumber('.')} type="number" />
        <Boton label="0" onPress={() => onBuildNumber('0')} type="number" />
        <Boton label="=" isDouble onPress={onCalculate} type="equal" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    paddingBottom: 15,
    paddingHorizontal: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
});