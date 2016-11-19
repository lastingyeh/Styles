/**
 * Created by yuhung on 2016/11/19.
 */

import React, {
    Component
} from 'react';

import {
    StyleSheet,
    Text,
    View
}from 'react-native';

import styles from './style';

class FlexDemo extends React.Component {

    render() {
        return (
            <View style={styles.parent}>
                <Text style={styles.child}>Child One</Text>
                <Text style={styles.child}>Child Two</Text>
                <Text style={styles.child}>Child Three</Text>
            </View>
        );
    }
}

export default FlexDemo;
