import { View, Text, StyleSheet } from 'react-native';

interface DisplayProps {
  mainValue: string;
  subValue: string;
}

export function Display({ mainValue, subValue }: DisplayProps) {
  return (
    <View style={styles.displayContainer}>
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.mainResult}>
        {mainValue}
      </Text>
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.subResult}>
        {subValue}
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
});