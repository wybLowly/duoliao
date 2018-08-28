import React, {Component} from 'react';

import {
    FlatList,
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

let MessageListData = [];

export default class Main extends Component {
    constructor(props) {
        super(props)
        // super.props
        this.state = {}
    }

    render() {
        for (let i = 0; i < 100; i++) {
            MessageListData.push({
                id: i,
                name: '好友' + i,
                from: '客服' + i,
                contentText: '这是聊天内容这是聊天内容这是聊天内容这是聊天内容' + i,
                time: '8/18 6:06'
            });
        }
        return (
            <View>
                <FlatList
                    data={MessageListData}
                    keyExtractor={this._keyExtractor}
                    ItemSeparatorComponent={this._separator}
                    showsVerticalScrollIndicator = {false}
                    renderItem={this._listRender}
                />
            </View>
        )
    }


    _keyExtractor = (item, inex) => item.id + 'key';

    _separator = () => {
        return <View style={{height: 0.5, backgroundColor: '#ccc'}}/>;
    }

    _listRender = item => {
        return (
            <View style={styles.messageList}>
                <View>
                    <Image source={require('../../images/user_header.png')} style={styles.userHeader}/>
                </View>
                <View style={styles.content}>
                    <Text style={styles.friendName}>{item.item.name}</Text>
                    <Text style={styles.contentText}>{item.item.contentText}</Text>
                </View>
                <View style={styles.messageTime}>
                    <Text style={{fontSize: 14, color: '#ccc'}}>
                        {item.item.time}
                    </Text>
                </View>
            </View>
        )
    }
}


let styles = StyleSheet.create({
    messageList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 70,
        paddingLeft: 10,
        paddingRight: 10
    },
    userHeader: {
        width: 50,
        height: 50
    },
    content: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    friendName: {
        color: '#000',
        fontSize: 14,
    },
    contentText: {
        color: '#ccc',
        marginTop: 10,
        // textOverflow:'ellipsis'
    },
    messageTime: {
        width: 75,
        alignSelf: 'flex-end',
        marginBottom: 10
    }
});