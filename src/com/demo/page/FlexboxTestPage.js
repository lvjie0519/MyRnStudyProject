/**
 * Created by Administrator on 2018/4/6 0006.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

export default class FlexboxTestPage extends Component {
    render() {
        return (
            <ScrollView>

                <View>
                    <View style={{flex:1, backgroundColor: 'powderblue'}} />
                    <View style={{flex:2, backgroundColor: 'skyblue'}} />
                    <View style={{flex:3, backgroundColor: 'steelblue'}} />
                </View>

                <View style={{height:100, marginTop:10}}>
                    <View style={{flex:1, backgroundColor: 'powderblue'}} />
                    <View style={{flex:2, backgroundColor: 'skyblue'}} />
                    <View style={{flex:3, backgroundColor: 'steelblue'}} />
                </View>

                <View style={{height:100, backgroundColor: '#b2d235', flexDirection:'row', marginTop:10}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>

                <View style={{height:100, backgroundColor: '#7fb80e',
                    flexDirection:'row', justifyContent:'center', marginTop:10}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>

                <View style={{height:100, backgroundColor: '#6d8346',
                    flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:10}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
        viewStyle:{

        }
});
