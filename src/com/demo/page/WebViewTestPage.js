/**
 * Created by Administrator on 2018/8/8 0008.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    WebView,
    ToastAndroid,
} from 'react-native';


export default class WebViewTestPage extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <View style={{flex: 1}}>
                <WebView
                    style={{flex: 1}}
                    source={{uri: 'https://www.baidu.com/'}}
                    onError={(e)=>ToastAndroid.show("onError", ToastAndroid.SHORT)}
                    onLoad={(e)=>ToastAndroid.show("onLoad", ToastAndroid.SHORT)}
                    onLoadStart={(e)=>ToastAndroid.show("onLoadStart", ToastAndroid.SHORT)}
                    renderError={() => {
                        return <View><Text>renderError回调了，出现错误</Text></View>
                    }}
                    renderLoading={() => {
                        return <View><Text>这是自定义Loading...</Text></View>
                    }}
                />
            </View>
        );
    }

    headerLeftOnClick(){
        this.props.navigation.goBack(null);
    }

}

const styles = StyleSheet.create({
    webviewStyle: {
        width:'100%',
        height:'100%'
    }
});