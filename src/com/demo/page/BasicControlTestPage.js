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
    InputText,
    ToastAndroid
} from 'react-native';

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
            <ScrollView>

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

                <Text style={styles.textPStyle} numberOfLines={1}> hello lvjie
                    <Text
                        style={styles.textCStyle}
                        numberOfLines={1}
                        onPress={this.textOnPress}
                    >Hello React Native Hello React Native Hello React Native Hello React Native</Text>
                </Text>


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


}

const styles = StyleSheet.create({
    viewStyle:{
        height: 50,
        width: 150,
        margin: 20,
        backgroundColor:'#ef5b9c'
    },
    textPStyle: {
        fontFamily: 'Cochin',
        color:'#432312'
    },
    textCStyle:{
        fontSize: 20,
        fontWeight: 'bold',
    }
});
