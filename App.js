import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import StackNavigator from './app/navigation/StackNavigation';

import SwitchScreen from './app/navigation/SwitchNavigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SwitchScreen />
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
