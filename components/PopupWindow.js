import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableHighlight
} from 'react-native';

export default class PopupWindow extends Component {
    render() {
        return (
            <View>
                <Modal
                    animationType={'fade'}
                    style={styles.modalContent}
                    visible={this.props.visible}
                    transparent={false}
                    onRequestClose={() => {
                        this.onRequestClose()
                    }}
                >
                    <View style={styles.modal}>
                        <TouchableHighlight onPress={this._clickItem}
                                            underlayColor={'#999'}
                                            style={styles.popRow}><Text
                            style={styles.popItem}>置顶</Text></TouchableHighlight>
                        <TouchableHighlight
                            onPress={this._clickItem} underlayColor={'#999'} style={styles.popRow}><Text
                            style={styles.popItem}>移除会话</Text></TouchableHighlight>
                    </View>
                </Modal>
            </View>
        )
    }

    _clickItem() {

    }

    onRequestClose() {

    }
}

let styles = StyleSheet.create({
    modalContent: {
        backgroundColor: '#fff',
        width: 100,
        height: 60
    },
    popRow: {
        width: 100,
        height: 30,
    },
    popItem: {
        width: 100,
        height: 30,
        textAlignVertical: 'center',
        backgroundColor: '#fff',
        textAlign: 'center',
        fontSize: 11
    }
});