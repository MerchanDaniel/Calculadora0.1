import { View, Text, StyleSheet } from 'react-native';

interface DisplayProps {
  mainValue: string;
  subValue: string;
}

export function Display({ mainValue, subValue }: DisplayProps) {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.subResult} numberOfLines={1}>
        {subValue}
      </Text>
      <Text 
        style={styles.mainResult} 
        numberOfLines={1} 
        adjustsFontSizeToFit 
        minimumFontScale={0.4}
      >
        {mainValue}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: '#0d1117', // Fondo tipo terminal/consola oscura
    margin: 16,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#30363d',
  },
  mainResult: {
    fontFamily: 'PixelFont',
    fontSize: 58,
    color: '#58a6ff', // Tono azulado brillante tipo display de alta gama retro
    textAlign: 'right',
  },
  subResult: {
    fontFamily: 'PixelFont',
    fontSize: 22,
    color: '#8b949e',
    height: 30,
    textAlign: 'right',
  },
});