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

                {/*<View style={{height:100, marginTop:10}}>*/}
                    {/*<View style={{flex:1, backgroundColor: 'powderblue'}} />*/}
                    {/*<View style={{flex:2, backgroundColor: 'skyblue'}} />*/}
                    {/*<View style={{flex:3, backgroundColor: 'steelblue'}} />*/}
                {/*</View>*/}

                <View style={{height:300, backgroundColor: '#b2d235',marginTop:10}}>
                    <View style={{width: 80, height: 60, backgroundColor: 'powderblue'}} ><Text>布局一</Text></View>
                    <View style={{width: 80, height: 60, backgroundColor: 'skyblue'}} ><Text>布局二</Text></View>
                    <View style={{width: 80, height: 60, backgroundColor: 'steelblue'}} ><Text>布局三</Text></View>
                </View>

                <View style={{height:70, backgroundColor: '#b2d235', flexDirection:'row', marginTop:10}}>
                    <View style={{width: 90, height: 60, backgroundColor: 'powderblue'}} ><Text>布局一</Text></View>
                    <View style={{width: 70, height: 40, backgroundColor: 'skyblue'}} ><Text>布局二</Text></View>
                    <View style={{width: 50, height: 20, backgroundColor: 'steelblue'}} ><Text>布局三</Text></View>
                </View>

                <View style={{height:70, backgroundColor: '#b2d235',
                    flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-start', marginTop:40}}>
                    <View style={{width: 90, height: 60, backgroundColor: 'powderblue'}} ><Text>布局一</Text></View>
                    <View style={{width: 70, height: 40, backgroundColor: 'skyblue'}} ><Text>布局二</Text></View>
                    <View style={{width: 50, height: 20, backgroundColor: 'steelblue'}} ><Text>布局三</Text></View>
                </View>

                <View style={{height:70, backgroundColor: '#b2d235',
                    flexDirection:'row', justifyContent:'flex-start', alignItems:'center', marginTop:40}}>
                    <View style={{width: 90, height: 60, backgroundColor: 'powderblue'}} ><Text>布局一</Text></View>
                    <View style={{width: 70, height: 40, backgroundColor: 'skyblue', alignSelf:'flex-start'}} ><Text>布局二</Text></View>
                    <View style={{width: 50, height: 20, backgroundColor: 'steelblue', alignSelf:'center'}} ><Text>布局三</Text></View>
                    <View style={{width: 50, height: 40, backgroundColor: '#4e72b8', alignSelf:'flex-end'}} ><Text>布局四</Text></View>
                    <View style={{width: 50, backgroundColor: '#2a5caa', alignSelf:'stretch'}} ><Text>布局五</Text></View>
                </View>

                <View style={{height:70, backgroundColor: '#b2d235',
                    flexDirection:'row', justifyContent:'flex-start', alignItems:'stretch', marginTop:40}}>
                    <View style={{width: 90, height: 60, backgroundColor: 'powderblue'}} ><Text>布局一</Text></View>
                    <View style={{width: 70, height: 40, backgroundColor: 'skyblue'}} ><Text>布局二</Text></View>
                    <View style={{width: 50, height: 20, backgroundColor: 'steelblue'}} ><Text>布局三</Text></View>
                </View>

                <View style={{height:70, backgroundColor: '#b2d235',
                    flexDirection:'row', justifyContent:'flex-start', alignItems:'stretch', marginTop:40}}>
                    <View style={{width: 90,  backgroundColor: 'powderblue'}} ><Text>布局一</Text></View>
                    <View style={{width: 70,  backgroundColor: 'skyblue'}} ><Text>布局二</Text></View>
                    <View style={{width: 50,  backgroundColor: 'steelblue'}} ><Text>布局三</Text></View>
                </View>

                <View style={{backgroundColor: '#6d8346',marginTop:10, flexDirection:'row', flexWrap:'wrap'}}>
                    <View style={{width: 40, height: 40, backgroundColor: 'powderblue', margin:5}} ><Text>布局一</Text></View>
                    <View style={{width: 40, height: 40, backgroundColor: 'skyblue', margin:5}} ><Text>布局二</Text></View>
                    <View style={{width: 40, height: 40, backgroundColor: 'steelblue', margin:5}} ><Text>布局三</Text></View>
                    <View style={{width: 40, height: 40, backgroundColor: 'powderblue', margin:5}} ><Text>布局一</Text></View>
                    <View style={{width: 40, height: 40, backgroundColor: 'skyblue', margin:5}} ><Text>布局二</Text></View>
                    <View style={{width: 40, height: 40, backgroundColor: 'steelblue', margin:5}} ><Text>布局三</Text></View>
                    <View style={{width: 40, height: 40, backgroundColor: 'powderblue', margin:5}} ><Text>布局一</Text></View>
                    <View style={{width: 40, height: 40, backgroundColor: 'skyblue', margin:5}} ><Text>布局二</Text></View>
                    <View style={{width: 40, height: 40, backgroundColor: 'steelblue', margin:5}} ><Text>布局三</Text></View>
                    <View style={{width: 40, height: 40, backgroundColor: 'powderblue', margin:5}} ><Text>布局一</Text></View>
                    <View style={{width: 40, height: 40, backgroundColor: 'skyblue', margin:5}} ><Text>布局二</Text></View>
                    <View style={{width: 40, height: 40, backgroundColor: 'steelblue', margin:5}} ><Text>布局三</Text></View>
                </View>

                <View style={{height:100, backgroundColor: '#b2d235', marginTop:40}}>
                    <View style={{width: 90, height: 60, backgroundColor: 'powderblue',position:'absolute'}} ><Text>布局一</Text></View>
                    <View style={{width: 70, height: 40, backgroundColor: 'skyblue', position:'absolute', left: 100, top:10}} ><Text>布局二</Text></View>
                    <View style={{width: 50, height: 20, backgroundColor: 'steelblue', position:'absolute', left: 100, top:60}} ><Text>布局三</Text></View>
                </View>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
        viewStyle:{

        }
});
