/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: '首页',
        headerStyle:{backgroundColor:'red'},
        headerTintColor: 'white',
    })

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            waiting: false,//防止多次重复点击
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.onclickBtn()}     disabled={this.state.waiting}>

                    <Text style={styles.welcome} >
                        One
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }

    componentDidMount() {
        console.disableYellowBox = true;  //关闭警告提示
    }

    onclickBtn =() =>{
        this.setState({waiting: true});

        this.props.navigation.navigate('OneDetails', { name: 'XXX' ,age:25})

        setTimeout(()=> {
            this.setState({waiting: false})
        }, 2000);//2秒后重置state中的waiting状态
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
