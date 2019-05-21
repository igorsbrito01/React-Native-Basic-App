import React from 'react';
import {
    StatusBar,
    ActivityIndicator,
    View,
    AsyncStorage
} from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
// import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import AppStack from './StackNavigation';



class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        const userToken = await AsyncStorage.getItem('userToken');
        // console.log('Teste');
        // var userToken = false;

        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }


}

const AuthStack = createStackNavigator({
    SignIn: {
        screen: SignInScreen,
        navigationOptions: {
            header: null
        }
    }

});

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));