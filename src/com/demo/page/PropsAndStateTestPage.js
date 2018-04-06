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
    InputText
} from 'react-native';

import PageHeader from './widget/PageHeader'

export default class PropsAndStateTestPage extends Component {
    render() {
        return (
            <View>
                <PageHeader
                    headerCenterText='属性和状态的学习'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});