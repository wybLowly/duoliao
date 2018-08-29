import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import Message from './Message/Message';

class firends extends Component {
    static navigationOptions = {
        tabBarLabel: '朋友圈',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../images/friends_selected.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../images/friends.png')}/>
            );
        },
        tabBarOnPress:(obj)=>{
            console.log(obj);

            obj.jumpToIndex(obj.scene.index)
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>朋友圈界面</Text>
            </View>
        );
    }
}

class group extends Component {
    static navigationOptions = {
        tabBarLabel: '群发',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../images/group_selected.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../images/group.png')}/>
            );
        },
        tabBarOnPress:(obj)=>{
            console.log(obj);

            obj.jumpToIndex(obj.scene.index)
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>群发界面</Text>
            </View>
        );
    }
}

class fans extends Component {
    static navigationOptions = {
        tabBarLabel: '粉丝',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../images/fans_center_selected.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../images/fans_center.png')}/>
            );
        },
        tabBarOnPress:(obj)=>{
            console.log(obj);

            obj.jumpToIndex(obj.scene.index)
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

class message extends Component {
    static navigationOptions = {
        tabBarLabel: '消息',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../images/message_selected.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../images/message.png')}/>
            );
        },
        tabBarOnPress:(obj)=>{
            console.log(obj);

            obj.jumpToIndex(obj.scene.index)
        }
    };

    render() {
        return (
            <Message/>
        );
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


export const MyApp = TabNavigator(
    {
        message: {
            screen: message
        },
        fans: {
            screen: fans
        },
        group: {
            screen: group
        },
        firends: {
            screen: firends
        },
    },
    {
        tabBarOptions: {
            initialRouteName: 'fans',
            activeTintColor: '#1afa29',
            inactiveTintColor: '#000',
            showIcon: true,
            showLabel: true,
            upperCaseLabel: false,
            pressColor: '#788493',
            pressOpacity: 0.8,
            style: {
                backgroundColor: '#fff',
                paddingBottom: 0,
                borderTopWidth: 0.5,
                borderTopColor: '#ccc',
            },
            labelStyle: {
                fontSize: 12,
                margin: 1
            },
            indicatorStyle: {height: 0}
        },
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: false,
        lazy: true,
        backBehavior: 'none',
    });

