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
    Dimensions,
    ListView,
} from 'react-native';

var {width,height} = Dimensions.get('window');
var dataAry = []
var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class OneDetailsList extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'ListView',
        headerStyle:{backgroundColor:'red'},
        headerRight:(
            <Text onPress={()=>navigation.state.params.navigatePress()}>
                点击
            </Text>
        )
    });

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        for(var i = 0;i<10;i++){
            dataAry.push(i)
        }
        this.state = {
            text:'XXXX',
            dataSource:ds.cloneWithRows(dataAry),
        };
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                onEndReached={this.onEndReached}
            />
        );
    }

    //listView的renderRow
    renderRow =(rowData,sectionID,rowID,highlightRow) =>{
        var R = parseInt(Math.random()*255)
        var G = parseInt(Math.random()*255)
        var B = parseInt(Math.random()*255)
        return(
            <View style={{flexDirection:'row',marginTop:5,marginLeft:5,borderWidth:1,marginRight:5,borderColor:'#DEDEDE',backgroundColor:'white'}}>
                <Image source={require('../image/one_selected.png')} style={{width:60,height:60,borderRadius:30,marginTop:5,marginBottom:5}}/>
                <View style={{flexDirection:'column',justifyContent:'space-around',marginLeft:5}}>
                    <Text style={{fontSize:16,color:'rgba('+R+','+G+','+B+',1.0)'}}>歌名: 彩虹彼岸</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:14,color:'#BDBDBD'}}>歌手:虚拟歌姬</Text>
                        <Text style={{fontSize:14,color:'#BDBDBD',marginLeft:10}}>专辑:react native</Text>
                    </View>
                </View>
            </View>
        )
    }

    onEndReached =() =>{
        // alert(dataAry.length)
        for(var i = 0;i<10;i++){
            dataAry.push(i)
        }
        this.setState({
            dataSource:ds.cloneWithRows(dataAry),
        })
    }

    //设置在static中使用this
    componentDidMount(){
        this.props.navigation.setParams({
            navigatePress:this.navigatePress
        })
    }

    //导航条按钮点击
    navigatePress = () => {
        alert(this.state.text)
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
