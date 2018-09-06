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
    Dimensions,
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
        this.goFlatListTestPage = this.goFlatListTestPage.bind(this);
        this.goWebViewTest = this.goWebViewTest.bind(this);
        this.goTagFlowLayoutTestPage = this.goTagFlowLayoutTestPage.bind(this);
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

                <View style={styles.btnStyle}>
                    <Button
                        onPress={this.goFlatListTestPage}
                        title="进入FlatList学习页面"
                    />
                </View>

                <View style={styles.btnStyle}>
                    <Button
                        onPress={this.goWebViewTest}
                        title="进入WebView测试"
                    />
                </View>

                <View style={styles.btnStyle}>
                    <Button
                        onPress={this.goTagFlowLayoutTestPage}
                        title="进入FlowLayoutTestPage测试"
                    />
                </View>

            </View>
        );
    }

    goBasicControlTestPage(){
        ToastAndroid.show("height="+height+"   width="+width, ToastAndroid.SHORT)
        this.props.navigation.navigate('BasicControlTestPage')
    }

    goPropsAndStateTestPage(){
        this.props.navigation.navigate('PropsAndStateTestPage')
    }

    goFlexboxTestPage(){
        this.props.navigation.navigate('FlexboxTestPage')
    }

    goFlatListTestPage(){
        this.props.navigation.navigate('FlatListViewTestPage')
    }

    goWebViewTest(){
        this.props.navigation.navigate('WebViewTestPage')
    }

    goTagFlowLayoutTestPage(){
        this.props.navigation.navigate('TagFlowLayoutTestPage')
    }

}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    btnStyle: {
        marginTop:10,
        marginLeft: 30,
        marginRight:30,
    }
});
