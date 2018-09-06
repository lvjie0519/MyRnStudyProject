/**
 * Created by Administrator on 2018/8/8 0008.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    ToastAndroid,
} from 'react-native';

import TagFlowLayout from "./libs/flowlayout/TagFlowLayout"

export default class TagFlowLayoutTestPage extends Component{

    constructor(props){
        super(props);

        this.initData();
        this.onItemClick = this.onItemClick.bind(this);
    }

    initData(){
        this.state = {
            selectIndex: -1
        };

        this.tagInfos = [];

        this.tagInfos.push({
            tagId: '1',
            tagName: 'aaa',
            isSelect: false
        });

        this.tagInfos.push({
            tagId: '2',
            tagName: 'bbbbbbbbbbbbb',
            isSelect: false
        });

        this.tagInfos.push({
            tagId: '3',
            tagName: 'c',
            isSelect: false
        });

        this.tagInfos.push({
            tagId: '4',
            tagName: 'ddddddd',
            isSelect: false
        });

        this.tagInfos.push({
            tagId: '5',
            tagName: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            isSelect: false
        });
    }


    render(){
        return(
            <View style={{flex: 1}}>
                <TagFlowLayout
                    tagInfos={this.tagInfos}
                    onItemClick={this.onItemClick}
                />
            </View>
        );
    }

    onItemClick(index, data){
        if(this.state.selectIndex !== -1){
            this.tagInfos[this.state.selectIndex].isSelect = false;

        }
        this.tagInfos[index].isSelect = true;
        this.setState({selectIndex: index});

    }

}
