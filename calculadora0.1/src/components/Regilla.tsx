import { View, StyleSheet } from 'react-native';
import { Boton } from './Boton';

export function Regilla() {
  return (
    <View style={styles.buttonsContainer}>
      {/* Fila 1 */}
      <View style={styles.row}>
        <Boton label="AC" />
        <Boton label="±" />
        <Boton label="%" />
        <Boton label="÷" />
      </View>

      {/* Fila 2 */}
      <View style={styles.row}>
        <Boton label="7" />
        <Boton label="8" />
        <Boton label="9" />
        <Boton label="×" />
      </View>

      {/* Fila 3 */}
      <View style={styles.row}>
        <Boton label="4" />
        <Boton label="5" />
        <Boton label="6" />
        <Boton label="-" />
      </View>

      {/* Fila 4 */}
      <View style={styles.row}>
        <Boton label="1" />
        <Boton label="2" />
        <Boton label="3" />
        <Boton label="+" />
      </View>

      {/* Fila 5 */}
      <View style={styles.row}>
        <Boton label="." />
        <Boton label="0" />
        <Boton label="=" isDouble />
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