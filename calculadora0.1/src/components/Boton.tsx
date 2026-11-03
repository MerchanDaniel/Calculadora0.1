import { Text, TouchableOpacity, StyleSheet, DimensionValue } from 'react-native';
import * as Haptics from 'expo-haptics';

interface BotonProps {
  label: string;
  onPress?: () => void;
  isDouble?: boolean;
  type?: 'number' | 'operator' | 'action' | 'equal';
}

export function Boton({ label, onPress, isDouble = false, type = 'number' }: BotonProps) {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (onPress) onPress();
  };

  // Definir colores según el tipo de botón para darle un look único
  const getBackgroundColor = () => {
    switch (type) {
      case 'operator': return '#FF9F0A'; // Naranja vibrante estilo iOS/Retro
      case 'action': return '#A5A5A5';   // Gris claro para AC / Borrar
      case 'equal': return '#34C759';    // Verde acento único para el igual
      case 'number':
      default: return '#333333';       // Gris oscuro elegante para números
    }
  };

  const getTextColor = () => {
    return type === 'action' ? '#000000' : '#FFFFFF';
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      style={[
        styles.button,
        isDouble && styles.doubleButton,
        { backgroundColor: getBackgroundColor() },
      ]}
    >
      <Text style={[styles.buttonText, { color: getTextColor() }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '22%' as DimensionValue,
    height: 68,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16, // Bordes redondeados modernos pero con carácter
    marginVertical: 4,
    // Sombra sutil con relieve
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  doubleButton: {
    width: '48%' as DimensionValue,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'PixelFont',
    fontSize: 26,
  },
});