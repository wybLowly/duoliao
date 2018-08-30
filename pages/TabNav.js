import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import Message from './Message/Message';


//消息列表
class messageScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '消息',
        tabBarIcon: ({focused, tintColor}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../images/message_selected.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../images/message.png')}/>
            );
        },
    };

    render() {
        return (
            <Message/>
        )
    }
}

//粉丝中心
class fansScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '粉丝',
        tabBarIcon: ({focused, tintColor}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../images/fans_center_selected.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../images/fans_center.png')}/>
            );
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>粉丝中心</Text>
            </View>
        );
    }
}

//群发

class groupScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '群发',
        tabBarIcon: ({focused, tintColor}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../images/group_selected.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../images/group.png')}/>
            );
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>群发</Text>
            </View>
        )
    }
}


//朋友圈
class firendsScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '朋友圈',
        tabBarIcon: ({focused, tintColor}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../images/friends_selected.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../images/friends.png')}/>
            );
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>朋友圈</Text>
            </View>
        )
    }
}


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

const MyApp = TabNavigator(
    {
        message: {screen: messageScreen},
        fans: {screen: fansScreen},
        group: {screen: groupScreen},
        firends: {screen: firendsScreen}
    },
    {
        // 设置默认的页面组件
        initialRouteName: 'message',
        // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。
        tabBarPosition: 'bottom',
        // 是否允许在标签之间进行滑动。
        swipeEnabled: true,
        // 是否在更改标签时显示动画。
        animationEnabled: true,
        // 在app打开的时候将底部标签栏全部加载，默认false,推荐改成true
        lazy: true,
        // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        backBehavior: 'none',
        // initialLayout: {},
        tabBarOptions: {
            // 文字和图片选中颜色
            activeTintColor: '#45C018',
            // 文字和图片未选中颜色
            inactiveTintColor: '#999999',
            // label和icon的背景色 未选中。
            inactiveBackgroundColor: '#fff',
            // 是否显示label，默认开启。
            showLabel: true,
            // android 默认不显示 icon, 需要设置为 true 才会显示
            showIcon: true,
            // 是否使标签大写，默认为true。
            upperCaseLabel: true,
            indicatorStyle: {
                // 如TabBar下面显示有一条线，可以设高度为0后隐藏.
                // height: 0
            },
            style: {
                // TabBar 背景色
                borderTopWidth: 0.5,
                marginBottom: -2,
                backgroundColor: '#fff',
                borderTopColor: '#ccc'
            },
            labelStyle: {
                // 文字
                marginTop: 5,
                marginBottom: 0,
                fontSize: 12
            },
            tabStyle: {}
        }
    }
);

