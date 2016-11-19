/**
 * Created by yuhung on 2016/11/19.
 */
import React from 'react';
import {
    StyleSheet
}from 'react-native';

const styles = StyleSheet.create({

    parent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: '#F5FCEF',
        borderColor: '#0099AA',
        borderWidth: 5,
        marginTop: 30
    },
    child: {
        flex: 1,
        borderColor: '#AA0099',
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 20
    }
});

export default styles;