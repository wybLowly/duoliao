import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Message from './Message/Message';

//tab item
class TabBarItem extends Component {
    render() {
        return (
            <Image
                style={{tintColor: this.props.tintColor, width: 20, height: 20}}
                source={this.props.focused ? this.props.selectedImage : this.props.normalImage}
            />
        )
    }
}
//消息列表
let message = {
    screen: Message,
    navigationOptions:{
        tabBarLabel: '消息',
        tabBarIcon: ({tintColor, focused}) => (
            <TabBarItem
                tintColor={tintColor}
                focused={focused}
                normalImage={require('../images/message.png')}
                selectedImage={require('../images/message_selected.png')}
            />
        )
    }

};

//粉丝中心
let fans = {
    screen: Message,
    navigationOptions: {
        tabBarLabel: '粉丝',
        tabBarIcon: ({tintColor, focused}) => (
            <TabBarItem
                tintColor={tintColor}
                focused={focused}
                normalImage={require('../images/fans_center.png')}
                selectedImage={require('../images/fans_center_selected.png')}
            />
        )
    }
};

//群发
let group = {
    screen: Message,
    navigationOptions: {
        tabBarLabel: '群发',
        tabBarIcon: ({tintColor, focused}) => (
            <TabBarItem
                tintColor={tintColor}
                focused={focused}
                normalImage={require('../images/group.png')}
                selectedImage={require('../images/group_selected.png')}
            />
        )
    }
};

//朋友圈
let firends = {
    screen: Message,
    navigationOptions:{
        tabBarLabel: '朋友圈',
        tabBarPosition: 'bottom',
        tabBarIcon: ({tintColor, focused}) => (
            <TabBarItem
                tintColor={tintColor}
                focused={focused}
                normalImage={require('../images/friends.png')}
                selectedImage={require('../images/friends_selected.png')}
            />
        )
    }
};


export default class TabNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MyApp/>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarIcon: {
        width: 24,
        height: 24,
    }
});

const MyApp = createBottomTabNavigator(
    {
        message,
        fans,
        group,
        firends
    },
    {
        // 设置默认的页面组件
        initialRouteName: 'message',
        // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。
        tabBarPosition: 'bottom',
        // 是否允许在标签之间进行滑动。
        swipeEnabled: false,
        // 是否在更改标签时显示动画。
        animationEnabled: false,
        // 在app打开的时候将底部标签栏全部加载，默认false,推荐改成true
        lazy: true,
        // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        backBehavior: 'none',
        tabBarOptions: {
            // 文字和图片选中颜色
            activeTintColor: '#ff8500',
            // 文字和图片未选中颜色
            inactiveTintColor: '#999',
            // label和icon的背景色 未选中。
            inactiveBackgroundColor: '#fff',
            // 是否显示label，默认开启。
            showLabel: true,
            // android 默认不显示 icon, 需要设置为 true 才会显示
            showIcon: true,
            // 是否使标签大写，默认为true。
            upperCaseLabel: false,
            indicatorStyle: {
                // 如TabBar下面显示有一条线，可以设高度为0后隐藏.
                height: 0
            },
            style: {
                // TabBar 背景色
                backgroundColor: '#fff'
            },
            labelStyle: {
                // 文字大
                fontSize: 10
            }
        }
    }
);

