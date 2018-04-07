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
    SrollView,
    Button,
    TextInput,
    ToastAndroid,
} from 'react-native';

import PageHeader from './widget/PageHeader'

export default class PropsAndStateTestPage extends Component {

    constructor(props){
        super(props);

        this.state = { showText: '' };
    }

    render() {
        return (
            <View>
                <PageHeader
                    headerCenterText='属性和状态的学习'
                    leftOnclick={()=>this.headerLeftOnClick()}
                />
                <View style={styles.viewStyle}>
                    <TextInput
                        ref="textInput"
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                        onChangeText={(text)=>this.onChangeText(text)}
                    />
                    <Button
                        title='确定'
                        onPress={()=>this.btnOkClick()}
                    />
                </View>
                <Text style={styles.textStyle}>{this.state.showText}</Text>

            </View>
        );
    }

    onChangeText(text){
        this.setState({
            showText:text
        });
    }

    btnOkClick(){
        this.refs.textInput;
        ToastAndroid.show(this.state.showText, ToastAndroid.SHORT)
    }

    headerLeftOnClick(){
        this.props.navigation.goBack(null);
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        height: 60,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    textInputStyle:{
        height: 40,
        width:150,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight:10,
    },
    btnStyle:{
        marginLeft:20,
        height: 40,
        width:800,
        borderRadius:4
    },
    textStyle:{
        margin:20,
    }
});