import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Alumnos from './Alumnos';

export default function App() {
  return (
    <View style={styles.contenedorPrincipal}>
      <Text>Lista de Estudiantes - Proyecto React Native</Text>
      <StatusBar style="auto" />
      <Alumnos/>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
