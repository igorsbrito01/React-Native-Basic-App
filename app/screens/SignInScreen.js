import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class SignInScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        }
    }

    componentWillMount() {

    }

    render() {
        return (
            <View style={styles.conteiner}>
                <View style={{ flex: 1,justifyContent: 'center' }}>
                    <Text style={{ color: '#fff' }}>Teste</Text>
                </View>
                <View style={{ flex: 1, color: '#fff' }}>
                    <Text>Teste</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#001256',
        flexDirection: 'column',
        alignItems: 'center'
    }

});
