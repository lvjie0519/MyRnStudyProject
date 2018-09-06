/**
 * Created by Administrator on 2018/9/4 0004.
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

const TagButtonWidth = (Dimensions.get('window').width-40)/3 - 10;      // buttom 最小宽度

export default class TagButton extends Component{

    static propTypes = {

        tagInfo: PropTypes.shape({       // 标签信息
            tagId: PropTypes.string,
            tagName: PropTypes.string,
            isSelect: PropTypes.bool
        }),
        tagIndex: PropTypes.number,             // 标签索引
        onTagClick: PropTypes.func,              // 每个标签的点击事件

    }

    static get getDefaultProps(){
        return {
            tagInfo:{
                tagId: '',
                tagName: '',
                isSelect: false
            },
        };
    }

    constructor(props){
        super(props);
    }

    render(){

        // 设置样式
        let style_item;
        let style_item_text;
        if(this.props.tagInfo.isSelect){
            style_item = styles.tag_item_select;
            style_item_text = styles.tag_item_text_select;
        }else{
            style_item = styles.tag_item_normal;
            style_item_text = styles.tag_item_text_normal;
        }

        return(
            <TouchableOpacity
                style={style_item}
                onPress={()=>this.onTagClick()}>
                <Text style={style_item_text}>{this.props.tagInfo.tagName}</Text>
            </TouchableOpacity>
        );
    }

    onTagClick(){
        if(this.props.onTagClick){
            this.props.onTagClick(this.props.tagIndex, this.props.tagInfo);
        }
    }

}

const styles = StyleSheet.create({
    tag_item_select: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft:16,
        paddingRight:16,
        margin: 5,
        borderWidth:1,
        borderColor:"#38adff",
        borderRadius:5,
        backgroundColor:"#ffffff",
        minWidth: TagButtonWidth,
        justifyContent:"center",
        alignItems: "center"
    },
    tag_item_text_select: {
        fontSize:12,
        color:'#38adff',
    },
    tag_item_normal: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft:16,
        paddingRight:16,
        margin: 5,
        borderWidth:1,
        borderColor:"#f5f5f5",
        borderRadius:5,
        backgroundColor:"#f5f5f5",
        minWidth: TagButtonWidth,
        justifyContent:"center",
        alignItems: "center"
    },
    tag_item_text_normal: {
        fontSize:12,
        color:'#333333',
    },
})