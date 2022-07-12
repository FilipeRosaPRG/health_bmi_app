import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Title from './src/components/title';
import Form from './src/components/form';

export default function App() {
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}>
      <View style={styles.container}>
        <Title />
        <Form />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,

  },
});
