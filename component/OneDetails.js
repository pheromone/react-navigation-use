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
export default class OneDetails extends Component<Props> {

    static navigationOptions = ({ navigation }) => ({
        title: '详情',
        headerStyle:{backgroundColor:'cyan'},
        headerTintColor: 'red',
        headerLeft:(
            <Text onPress={()=>navigation.goBack()} >回到上一页</Text>
        ),

    })

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            waiting:false//防止多次重复点击
        };
      }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    传过来的参数是: {this.props.navigation.state.params.age} + {this.props.navigation.state.params.name}
                </Text>
                <Text>测试下FlatList 和 ListView性能</Text>
                <TouchableOpacity onPress={()=>this.onclickBtn()}     disabled={this.state.waiting}>
                    <Text>点击再跳转FlatList</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onclickBtn1()}     disabled={this.state.waiting}>
                    <Text>点击再跳转ListView</Text>
                </TouchableOpacity>
            </View>
        );
    }

    onclickBtn =() =>{

        this.setState({waiting: true});

        this.props.navigation.navigate('OneDetailsFlat')

        setTimeout(()=> {
            this.setState({waiting: false})
        }, 2000);//2秒后重置state中的waiting状态

    }
    onclickBtn1 =() =>{
        this.setState({waiting: true});

        this.props.navigation.navigate('OneDetailsList')

        setTimeout(()=> {
            this.setState({waiting: false})
        }, 3000);//3秒后重置state中的waiting状态
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
