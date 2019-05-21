// Navigation

import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../screens/HomeScreen';

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            headerBackTitle: " ",
            headerStyle: {
                backgroundColor: "#001256"
            },
            title: "Home",
            headerTintColor: "white",
            gesturesEnabled: false,
        })
    }
});

export default createAppContainer(AppNavigator);