import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import StackNavigator from './app/navigation/StackNavigation';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StackNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
