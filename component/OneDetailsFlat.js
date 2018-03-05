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
    FlatList,
    Dimensions
} from 'react-native';

var {width,height} = Dimensions.get('window');
var dataAry = []
var start  = 0

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class OneDetailsFlat extends Component<Props> {

    static navigationOptions = ({ navigation }) => ({
        title: 'FlatList',
        headerStyle:{backgroundColor:'yellow'},
        headerTintColor: 'black',
        headerLeft:(
            <Text onPress={()=>navigation.state.params.popTop()}>返回首页</Text>
        ),
        headerRight:(
            <Text onPress={()=>navigation.state.params.navigatePress()}>
                push下个页面
            </Text>
        )
    })

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        for(start = 0;start<10;start++){
            var obj = {}
            obj.key = start
            dataAry.push(obj)
        }

        this.state = {
            dataAry: dataAry,
            isRefreshing:true
        };
    }


    render() {
        return (
            <FlatList
                data = {this.state.dataAry}
                renderItem = {(item) => this.renderRow(item)}
                refreshing={this.state.isRefreshing}
                onRefresh={()=>this.onRefreshData()}
                onEndReached = {()=>this.onEndReached()}
                onEndReachedThreshold = {0.5}
                initialNumToRender = {10}
            />
        );
    }


    //listView的renderRow
    renderRow =(item) =>{
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

    //请求数据
    componentDidMount(){
        this.props.navigation.setParams({
            popTop:this.popTop,
            navigatePress:this.navigatePress

        })

        this.setState({
            isRefreshing:false
        })
    }

    //刷新数据
    onRefreshData =()=>{
        // alert('下拉刷新')
    }
    onEndReached = () =>{
        // alert('上拉加载')
        for(var i = start;i<start + 10;i++){
            var obj = {}
            obj.key = i
            dataAry.push(obj)
        }
        start += 10
        // alert(dataAry.length)
        this.setState({
            dataAry: dataAry
        })
    }
    //回到栈顶
    popTop =() =>{
        this.props.navigation.popToTop()
    }
    //导航条按钮点击
    navigatePress = () => {
        this.props.navigation.navigate('OneDetailsFlatDetails',{
            // 跳转的时候携带一个参数去下个页面
            callback: (data)=>{
                alert(data)
            }

        });

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
