/**
 * Created by Administrator on 2018/4/6 0006.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Button,
    TextInput,
    ToastAndroid,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

// import a from '../../../../res/icon_01.png'

export default class BasicControlPageTest extends Component {

    constructor(props){
        super(props);

        this.init();
    }

    init(){
        this.viewOnAccessibilityTap = this.viewOnAccessibilityTap.bind(this);
        this.viewOnMoveShouldSetResponder = this.viewOnMoveShouldSetResponder.bind(this);
        this.viewOnMoveShouldSetResponder = this.viewOnMoveShouldSetResponder.bind(this);
        this.textOnPress = this.textOnPress.bind(this);
    }

    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.scrollViewContentContainerStyle}
                horizontal={false}
            >

                <View
                    style={{height: 100, width: 300, margin: 20, backgroundColor:'#fab27b'}}
                >
                    <Text style={ {fontSize:16,margin:20}}>尺寸</Text>
                </View>


                <View
                    style={{height: 100, width: 300, margin: 20, backgroundColor:'#2a5caa'}}
                    accessibilityLabel='view 1'
                    onMoveShouldSetResponderCapture = {this.viewOnMoveShouldSetResponderCapture}
                >

                    <View
                        style={styles.viewStyle}
                        accessibilityLabel='view 2'
                        accessible={true}
                        onAccessibilityTap = {this.viewOnAccessibilityTap}
                        onMoveShouldSetResponder = {this.viewOnMoveShouldSetResponder}
                    >
                    </View>

                </View>

                <Text style={styles.textPStyle} numberOfLines={1}> hello react
                    <Text
                        style={styles.textCStyle}
                        numberOfLines={1}
                        onPress={this.textOnPress}
                    >Hello React Native Hello React Native Hello React Native Hello React Native</Text>
                </Text>

                <Text style={styles.textPStyle}> hello react
                    <Text
                        style={styles.textCStyle}
                        numberOfLines={1}
                        onPress={this.textOnPress}
                    >Hello React Native Hello React Native Hello React Native Hello React Native</Text>
                </Text>

                <Image
                    style={styles.imageStyle}
                    source={require('../../../../res/icon_01.png')}
                />
                <Image
                    style={styles.imageStyle}
                    source={{uri:'https://reactnative.cn/proxy/bbs.reactnative.cn/uploads/files/1493305850267-banner-01.png'}}
                />
                <Image
                    style={styles.imageStyle}
                    resizeMode={Image.resizeMode.stretch}
                    onPress={this.textOnPress}
                    source={{uri:'https://reactnative.cn/proxy/bbs.reactnative.cn/uploads/files/1493305850267-banner-01.png'}}
                />

                <TextInput
                    onChange={()=>this.textInputOnChange()}
                    placeholder="please input..."
                />
                <TextInput
                    defaultValue='123'
                    style={styles.textInputStyle_2}
                    underlineColorAndroid='transparent'
                    keyboardType='numeric'
                    onChangeText={(text)=>this.textInputOnChangeText(text)}
                />

                <TouchableHighlight
                    style={styles.touchableHighlightStyle}
                    onPress={()=>this.touchableHighlightOnPress()}>
                    <Text>TouchableHighlight-1</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.touchableHighlightStyle}
                    onPress={()=>this.touchableHighlightOnPress()}
                    underlayColor="#fcfcfc"
                >
                    <Text>TouchableHighlight-2</Text>
                </TouchableHighlight>

                <TouchableOpacity
                    style={styles.touchableOpacityStyle}
                    onPress={()=>this.touchableOpacityOnPress()}
                >
                    <Text>TouchableOpacity-1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchableOpacityStyle}
                    onPress={()=>this.touchableOpacityOnPress()}
                    activeOpacity={0}
                >
                    <Text>TouchableOpacity-2</Text>
                </TouchableOpacity>

            </ScrollView>
        );
    }

    /*     View相关        */
    viewOnAccessibilityTap(){
        ToastAndroid.show('viewOnAccessibilityTap...', ToastAndroid.SHORT);
    }

    viewOnMoveShouldSetResponder(){
        ToastAndroid.show('view2--onMoveShouldSetResponder...', ToastAndroid.SHORT);
    }

    viewOnMoveShouldSetResponderCapture(){
        ToastAndroid.show('view1--onMoveShouldSetResponderCapture...', ToastAndroid.SHORT);
        return true;
    }

    /*     Text相关        */
    textOnPress(){
        ToastAndroid.show('textOnPress...', ToastAndroid.SHORT);
    }

    /*     ScrollView相关        */
    scrollViewOnContentSizeChange(){

    }

    /*     TextInput相关        */
    textInputOnChange(){
        ToastAndroid.show('textInputOnChange...', ToastAndroid.SHORT);
    }

    textInputOnChangeText(text){
        ToastAndroid.show('textInputOnChangeText...'+text, ToastAndroid.SHORT);
    }

    /*     TouchableHighlight相关        */
    touchableHighlightOnPress(){
        ToastAndroid.show('touchableHighlightOnPress...', ToastAndroid.SHORT);
    }

    /*     TouchableOpacity相关        */
    touchableOpacityOnPress(){
        ToastAndroid.show('touchableOpacityOnPress...', ToastAndroid.SHORT);
    }

}

const styles = StyleSheet.create({
    viewStyle:{
        height: 50,
        width: 150,
        margin: 20,
        backgroundColor:'#ef5b9c'
    },
    textPStyle: {
        color:'#432312'
    },
    textCStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'#c34253'
    },
    imageStyle:{
        height:70,
        width:150,
        borderRadius:4,
        borderColor:'#694d9f',
        borderWidth:1,
        marginLeft:10,
        marginTop:10,
    },
    scrollViewContentContainerStyle:{
        paddingVertical: 20
    },
    textInputStyle_1:{
        marginTop:10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
    textInputStyle_2:{
        marginTop:10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
    touchableHighlightStyle:{
        width: 200,
        marginTop:10,
        padding:10,
        borderColor: 'gray',
        borderWidth: 1,
    },
    touchableOpacityStyle:{
        width: 200,
        marginTop:10,
        padding:10,
        borderColor: 'gray',
        borderWidth: 1,
    }

});
