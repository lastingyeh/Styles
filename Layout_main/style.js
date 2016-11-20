/**
 * Created by yuhung on 2016/11/20.
 */
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    parent: {
        flexDirection: 'column',
        flex: 1,
        marginTop: 20
    },
    header: {
        flexDirection: 'row',
        borderWidth: 5,
        backgroundColor: '#FF0000',
        margin: 5,
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        textAlign:'center',
        fontSize: 24,
        flex: 2,
    },
    main: {
        margin: 5,
        borderWidth: 1,
        flex: 8,
        flexDirection: 'column'
    },
    footer: {
        margin: 5,
        backgroundColor: '#0000FF',
        flex: 2
    },
    footerText: {
        fontSize: 24,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        flex: 2
    },
    base: {
        margin: 4,
        borderWidth: 3,
        flex: 1
    }

});

export default styles;