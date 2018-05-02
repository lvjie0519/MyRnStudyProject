/**
 * Created by Administrator on 2018/4/6 0006.
 */
import {
    StackNavigator,
} from 'react-navigation';

import MainPage from './page/MainPage'
import BasicControlTestPage from './page/BasicControlTestPage'
import PropsAndStateTestPage from './page/PropsAndStateTestPage'
import FlexboxTestPage from './page/FlexboxTestPage'
import FlatListViewTestPage from './page/FlatListViewTestPage'

const PageManage = StackNavigator({
    MainPage: {
        screen: MainPage,
        navigationOptions:{
            header:null,
        },
        mode:'card',
    },
    BasicControlTestPage: {
        screen: BasicControlTestPage,
        navigationOptions:{
            header:null,
        },
        mode:'card',
    },
    PropsAndStateTestPage: {
        screen: PropsAndStateTestPage,
        navigationOptions:{
            header:null,
        },
        mode:'card',
    },
    FlexboxTestPage: {
        screen: FlexboxTestPage,
        navigationOptions:{
            header:null,
        },
        mode:'card',
    },
    FlatListViewTestPage: {
        screen: FlatListViewTestPage,
            navigationOptions:{
            header:null,
        },
        mode:'card',
    },
});

export default PageManage;