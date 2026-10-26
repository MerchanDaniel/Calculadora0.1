import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function IndexScreen() {
  return (
    <View style={styles.calculatorContainer}>
      
      {/* Zona de la Pantalla (Display) */}
      <View style={styles.displayContainer}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={styles.mainResult}
        >
          99.99
        </Text>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={styles.subResult}
        >
          10 + 89.99
        </Text>
      </View>

      {/* Zona de la Grilla de Botones */}
      <View style={styles.buttonsContainer}>
        
        {/* Fila 1 */}
        <View style={styles.row}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>AC</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>±</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>%</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>÷</Text>
          </Pressable>
        </View>

        {/* Fila 2 */}
        <View style={styles.row}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>7</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>8</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>9</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>×</Text>
          </Pressable>
        </View>

        {/* Fila 3 */}
        <View style={styles.row}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>4</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>6</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
        </View>

        {/* Fila 4 */}
        <View style={styles.row}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>2</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>3</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>

        {/* Fila 5 */}
        <View style={styles.row}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>.</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>0</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.doubleButton]}>
            <Text style={styles.buttonText}>=</Text>
          </Pressable>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calculatorContainer: {
    flex: 1,
    backgroundColor: '#38B6FF',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  mainResult: {
    fontFamily: 'PixelFont',
    fontSize: 70,
    color: '#FFFFFF',
  },
  subResult: {
    fontFamily: 'PixelFont',
    fontSize: 30,
    color: '#FFFFFF',
    marginTop: 5,
  },
  buttonsContainer: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FF914D',
    width: '22%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#000000',
  },
  doubleButton: {
    width: '47%',
  },
  buttonText: {
    fontFamily: 'PixelFont',
    fontSize: 28,
    color: '#000000',
  },
});