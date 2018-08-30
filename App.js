import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    Text,
    Alert,
    Button
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