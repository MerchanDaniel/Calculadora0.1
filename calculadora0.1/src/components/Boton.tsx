import { Text, TouchableOpacity, StyleSheet, DimensionValue } from 'react-native';

interface BotonProps {
  label: string;
  onPress?: () => void;
  isDouble?: boolean;
}

export function Boton({ label, onPress, isDouble = false }: BotonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.button, isDouble && styles.doubleButton]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF914D',
    width: '22%' as DimensionValue,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#000000',
  },
  doubleButton: {
    width: '47%' as DimensionValue,
  },
  buttonText: {
    fontFamily: 'PixelFont',
    fontSize: 28,
    color: '#000000',
  },
});