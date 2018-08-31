import React, {Component} from 'react';

import {
    FlatList,
    Text,
    View,
    Image,
    StyleSheet,
    TouchableHighlight,
    Alert
} from 'react-native';
import PopupWindow from '../../components/PopupWindow';

let MessageListData = [];

const handleMenuData = [
    {
        name: '置顶',
        menuId: '1'
    },
    {
        name: '移除会话',
        menuId: '2'
    }
];

export default class Main extends Component {

    state = {
        showModal: false
    };

    render() {
        for (let i = 0; i < 50; i++) {
            MessageListData.push({
                id: i,
                name: '好友' + i,
                from: '客服' + i,
                contentText: '这是和好友' + i + '的聊天内容的聊天内容的聊天内容的聊天内容的聊天内容的聊天内容',
                time: '8/18 6:06'
            });
        }
        return (
            <View>
                <FlatList
                    data={MessageListData}
                    keyExtractor={this._keyExtractor}
                    ItemSeparatorComponent={this._separator}
                    showsVerticalScrollIndicator={false}
                    renderItem={this._listRender}
                />
                <PopupWindow visible={this.state.showModal}/>
            </View>
        )
    }


    _keyExtractor = (item, inex) => inex + 'key';

    _separator = () => {
        return <View style={{height: 0.5, backgroundColor: '#ccc'}}/>;
    };

    _listRender = item => {
        return (
            <View>
                <TouchableHighlight style={styles.messageItem} onPress={this._clickItem} underlayColor={'#c9c7c6'}>
                    <View style={styles.messageList}>
                        <View>
                            <Image source={require('../../images/user_header.png')} style={styles.userHeader}/>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.friendName} numberOfLines={1}>{item.item.name}</Text>
                            <Text style={styles.contentText} numberOfLines={1}>{item.item.contentText}</Text>
                        </View>
                        <View style={styles.messageTime}>
                            <Text style={{fontSize: 14, color: '#999'}}>
                                {item.item.time}
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    };


    _clickItem(e) {
        // Alert.alert('点击了好友');
        console.log(e);
        this.state.showModal = true;
    };


}


let styles = StyleSheet.create({
    messageItem: {
        backgroundColor: '#fff',
        position: 'relative',
        zIndex: 40
    },
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
        color: '#999',
        marginTop: 10,
        // textOverflow:'ellipsis'
    },
    messageTime: {
        width: 75,
        alignSelf: 'flex-end',
        marginBottom: 10
    },
});