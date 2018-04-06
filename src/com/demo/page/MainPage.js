/**
 * Created by Administrator on 2018/4/6 0006.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    ToastAndroid,
} from 'react-native';

export default class MainPage extends Component {

    constructor(props){
        super(props);

        this.init();
    }

    init(){
        this.goBasicControlTestPage = this.goBasicControlTestPage.bind(this);
        this.goPropsAndStateTestPage = this.goPropsAndStateTestPage.bind(this);
        this.goFlexboxTestPage = this.goFlexboxTestPage.bind(this);
    }

    render() {
        return (
            <View>
                <View style={styles.btnStyle}>
                    <Button
                        onPress={this.goBasicControlTestPage}
                        title="进入基本控件学习页面"
                    />
                </View>

                <View style={styles.btnStyle}>
                    <Button
                        onPress={this.goFlexboxTestPage}
                        title="进入Flexbox学习页面"
                    />
                </View>

                <View style={styles.btnStyle}>
                    <Button
                        onPress={this.goPropsAndStateTestPage}
                        title="进入Props/State学习页面"
                    />
                </View>

            </View>
        );
    }

    goBasicControlTestPage(){
        this.props.navigation.navigate('BasicControlTestPage')
    }

    goPropsAndStateTestPage(){
        this.props.navigation.navigate('PropsAndStateTestPage')
    }

    goFlexboxTestPage(){
        this.props.navigation.navigate('FlexboxTestPage')
    }

}

const styles = StyleSheet.create({
    btnStyle: {
        marginTop:10,
        marginLeft: 30,
        marginRight:30,
    }
});
