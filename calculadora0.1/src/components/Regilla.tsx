import { View, StyleSheet } from 'react-native';
import { Boton } from './Boton';

interface RegillaProps {
  onBuildNumber: (num: string) => void;
  onClear: () => void;
  onDelete: () => void;
  onOperation: (op: string) => void;
  onCalculate: () => void;
}

export function Regilla({ onBuildNumber, onClear, onDelete, onOperation, onCalculate }: RegillaProps) {
  return (
    <View style={styles.buttonsContainer}>
      {/* Fila 1 */}
      <View style={styles.row}>
        <Boton label="AC" onPress={onClear} />
        <Boton label="⌫" onPress={onDelete} />
        <Boton label="%" onPress={() => {}} />
        <Boton label="÷" onPress={() => onOperation('÷')} />
      </View>

      {/* Fila 2 */}
      <View style={styles.row}>
        <Boton label="7" onPress={() => onBuildNumber('7')} />
        <Boton label="8" onPress={() => onBuildNumber('8')} />
        <Boton label="9" onPress={() => onBuildNumber('9')} />
        <Boton label="×" onPress={() => onOperation('×')} />
      </View>

      {/* Fila 3 */}
      <View style={styles.row}>
        <Boton label="4" onPress={() => onBuildNumber('4')} />
        <Boton label="5" onPress={() => onBuildNumber('5')} />
        <Boton label="6" onPress={() => onBuildNumber('6')} />
        <Boton label="-" onPress={() => onOperation('-')} />
      </View>

      {/* Fila 4 */}
      <View style={styles.row}>
        <Boton label="1" onPress={() => onBuildNumber('1')} />
        <Boton label="2" onPress={() => onBuildNumber('2')} />
        <Boton label="3" onPress={() => onBuildNumber('3')} />
        <Boton label="+" onPress={() => onOperation('+')} />
      </View>

      {/* Fila 5 */}
      <View style={styles.row}>
        <Boton label="." onPress={() => onBuildNumber('.')} />
        <Boton label="0" onPress={() => onBuildNumber('0')} />
        <Boton label="=" isDouble onPress={onCalculate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 10,
  },
});