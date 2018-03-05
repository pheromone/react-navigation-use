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
    Image
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Two from './component/Two';
import One from './component/One';
import OneDetails from './component/OneDetails'
import OneDetailsFlat from './component/OneDetailsFlat'
import OneDetailsList from  './component/OneDetailsList'
import OneDetailsFlatDetails from './component/OneDetailsFlatDetails'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class TwoDetails extends Component<Props> {
    render() {
        return (
            <Navigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                             // 只要切换tab,push,pop,这里一定走
                             console.log(prevState)
                             console.log(currentState)

                        }
                    }
            />
        );
    }
}


const Tab = TabNavigator({
        One: {
            screen: One,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '苹果',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        source={focused ?  require('./image/one_selected.png') : require('./image/one.png')}
                        style={{ width: 25, height: 25 }}
                    />
                )
            }),
        },
        Two: {
            screen: Two,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '安卓',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        source={focused ? require('./image/two_selected.png') : require('./image/two.png') }
                        style={{ width: 25, height: 25 }}
                    />
                )
            }),
        },

    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#979797',
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        },

    });

const Navigator = StackNavigator({
    Tab: {
        screen: Tab,
    },
    OneDetails : {
        screen: OneDetails,
    },
    OneDetailsFlat : {
        screen:OneDetailsFlat
    },
    OneDetailsList : {
        screen:OneDetailsList
    },
    OneDetailsFlatDetails : {
        screen:OneDetailsFlatDetails
    }

});


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
