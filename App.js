import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    Text,
    Alert
} from 'react-native';
// import TabNavigator from 'react-native-tab-navigator'
import TabNav from './pages/TabNav'


export default class Main extends Component {
    constructor(props) {
        super(props)
        // super.props
        this.state = {
            selectedTab: '消息',
        }
    }


    render() {
        return (

            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.title}>神手多聊</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('./images/search.png')} style={[styles.headerIcon, {marginRight: 10}]}/>
                        <Image source={require('./images/add.png')} style={styles.headerIcon}/>
                    </View>
                </View>
                <TabNav/>
            </View>
        );
    }


    _tabIconRender(type) {
        let url;
        switch (type) {
            case '1':    //消息列表
                url = require('./images/message.png');
                break;
            case '2':    //粉丝中心
                url = require('./images/fans_center.png');
                break;
            case '3':    //群发
                url = require('./images/group.png');
                break;
            case '4':   //朋友圈
                url = require('./images/friends.png');
                break;
        }

        return (
            <Image source={url} style={styles.icon}/>
        );
    }

    _tabIconSelectedRender(type) {
        let url;
        switch (type) {
            case '1'://消息列表
                url = require('./images/message_selected.png');
                break;
            case '2':  //粉丝中心
                url = require('./images/fans_center_selected.png');
                break;
            case '3': //群发
                url = require('./images/group_selected.png');
                break;
            case '4':  //朋友圈
                url = require('./images/friends_selected.png');
                break;
        }

        return (
            <Image source={url} style={styles.icon}/>
        );
    }

    _touchMove(event) {
        Alert.alert('消息', '1231');
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        color: "#000000",
        fontSize: 13
    },
    selectedTabText: {
        color: "green",
        fontSize: 13
    },
    icon: {
        width: 20,
        height: 20
    },
    header: {
        backgroundColor: 'rgb(43,43,43)',
        height: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        color: '#fff'
    },
    headerIcon: {
        width: 20,
        height: 20
    }
});