import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Layout from '../constants/Layout';

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

    changeLogin = (login) =>{
        console.log(login);
        this.setState({login});
    }

    changePassword = (password) =>{
        this.setState({password});
    }

    render() {
        return (
            <View style={styles.conteiner}>
                <StatusBar barStyle="light-content"/>
                <View style={{ flex: 1,justifyContent: 'center' }}>
                   <Image 
                    style={{
                        width:150,
                        height:150
                    }}
                    source={require('../../assets/images/logo-react.png')}
                    />
                    <Text style={styles.title}> React Native</Text>
                </View>
                {/* <ScrollView> */}
                <ScrollView style={{ flex: 1, color: '#fff', width:Layout.window.width }}>
                    <View style={styles.inputView}>
                        <Text style={styles.label}>Login</Text>
                        <TextInput 
                            value={this.state.login}
                            placeholder={'Type your login'}
                            onChangeText={this.changeLogin.bind(this)}
                            placeholderTextColor={'#fff'}
                            style={styles.input}/>
                        
                        <Text style={styles.label}>Password</Text>
                        <TextInput 
                            value={this.state.password}
                            placeholder={'Type your password'}
                            onChangeText={this.changePassword.bind(this)}
                            placeholderTextColor={'#fff'}
                            style={styles.input}
                            secureTextEntry={true}/>
                        
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('App')} style={styles.confirmButtom}>
                            <View style={styles.buttomText}>
                                <Text style={{color:'#001060', fontWeight:'bold'}}>LOGIN</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log('Teste')} style={styles.subsButtom}>
                            <View style={styles.buttomText}>
                                <Text style={{color:'#fff', fontWeight:'bold'}}>REGISTER</Text>
                            </View>
                        </TouchableOpacity>
                       
                    </View> 
                </ScrollView>

                {/* </ScrollView> */}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0835dd',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title:{
        marginTop:10,
        alignSelf:'center',
        color:'#fff',
        fontSize:25,
        fontWeight:'bold'
    },
    inputView:{ 
        flex:1,
        alignSelf:'center',
        // backgroundColor:'#cccccc',
         width:Layout.window.width*.9 ,
         padding:10,
        //  borderRadius:10
    },
    input:{
        color:'#fff',
        marginTop:10,
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        paddingBottom:5
    },
    label:{
        color:'#fff',
        marginTop:15,
        fontWeight:'bold',
        fontSize:8
    },
    confirmButtom:{
        alignSelf:'center',
        marginTop:20,
        padding:10,
        width:Layout.window.width*.9 ,
        borderRadius:20,
        backgroundColor:'#d1d1d1'
    },
    buttomText:{
       
        alignItems:'center',
        justifyContent:'center'
    },
    subsButtom:{
        alignSelf:'center',
        marginTop:20,
        padding:10,
        width:Layout.window.width*.9 ,
     
    }

});
