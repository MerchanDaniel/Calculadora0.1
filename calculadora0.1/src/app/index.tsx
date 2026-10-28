import { View, StyleSheet } from 'react-native';
import { Display } from '../components/Display';
import { Regilla } from '../components/Regilla';

export default function IndexScreen() {
  return (
    <View style={styles.calculatorContainer}>
      <Display mainValue="99.99" subValue="10 + 89.99" />
      <Regilla />
    </View>
  );
}

const styles = StyleSheet.create({
  calculatorContainer: {
    flex: 1,
    backgroundColor: '#38B6FF',
  },
});