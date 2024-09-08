import { SafeAreaView, StyleSheet, View } from 'react-native';
import TodoScreen from './src/screen/TodoScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
  },
  container: {
    flex: 1,
  },
});
