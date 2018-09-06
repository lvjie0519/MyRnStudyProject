/**
 * Created by Administrator on 2018/9/6 0006.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';
import TagButton from "./TagButton"

export default class TagFlowLayout extends Component{
    static propTypes = {
        tagInfos: PropTypes.arrayOf(PropTypes.shape({       // 标签信息
            tagId: PropTypes.string,
            tagName: PropTypes.string,
            isSelect: PropTypes.bool
        })),
        onItemClick: PropTypes.func,              // 每个标签的点击事件
    }

    static get getDefaultProps(){
        return {
            tagInfos:[],
        };
    }

    constructor(props){
        super(props);

        this.onItemClick = this.onItemClick.bind(this);
    }

    render(){


        let items = [];
        for (let name in this.props.tagInfos) {
            let data = this.props.tagInfos[name];
            items.push(
                <TagButton
                    key={name}
                    tagIndex={Number(name)}
                    tagInfo={data}
                    onTagClick={this.onItemClick}
                />
            );
        }


        return(
            <View style={styles.tag_container}>
                {items}
            </View>
        );
    }

    /**
     *
     * @param index  标签的位置
     * @param info   标签携带的信息
     */
    onItemClick(index, info){
        if(this.props.onItemClick){
            this.props.onItemClick(index, info);
        }
    }

}

const styles = StyleSheet.create({
    tag_container: {
        backgroundColor:'#ffffff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }
})