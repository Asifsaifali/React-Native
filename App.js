import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Car from './assets/components/CarList/Car';
// import Image1 from "./assets/images/ModelX.jpeg"

export default function App() {
  return (
    <View style={styles.container}>
        <Car/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
