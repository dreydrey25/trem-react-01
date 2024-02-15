import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto1}>Andrey Sousa Tristão, Número do Notebook:01, Armário:01</Text>
      <Text style={styles.texto2}>Andrey Sousa Tristão, Número do Notebook:01, Armário:01</Text>
      <Text style={styles.introdução}>Me chamo Andrey</Text>
      <Text style={styles.meio}>Não sei dar detalhes ;P</Text>
      <Text style={styles.ultimo}>Amo música, música é minha vida...</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: '1',
    backgroundColor: '#fff',
    alignItems: 'top',
    justifyContent: 'left',
  },

  texto1: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  texto2: {
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderColor: 'blue',
    padding: 5,
    marginTop: 10,
  },

  introdução: {
    borderWidth: 2,
    fontSize: 30,
  },

  meio: {
    marginTop: 10,
  },

  ultimo: {
    marginTop: 10,
  }
});