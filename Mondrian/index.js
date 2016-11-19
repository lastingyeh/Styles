/**
 * Created by yuhung on 2016/11/19.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
}from 'react-native';

import styles from './style';

class Mondrian extends React.Component {

    render() {
        return (
            <View style={styles.parent} /*column top:30 flex:1*/>
                <View style={styles.topBlock} /*row 0 flex:5*/>
                    <View style={styles.leftCol} /*column (default) flex:2*/>
                        <View style={[styles.cellOne,styles.base]} /*flex:1*//>
                        <View style={[styles.base,styles.cellTwo]} /*flex:3*//>
                    </View>
                    <View style={[styles.cellThree,styles.base]} /*flex:5*/></View>
                </View>
                <View style={styles.bottomBlock} /*row 1 flex:2*/>
                    <View style={[styles.cellFour,styles.base]} /*flex:3*//>
                    <View style={[styles.cellFive,styles.base]} /*flex:6*//>
                    <View style={styles.bottomRight} /*column flex:2*/>
                        <View style={[styles.cellSix,styles.base]} /*flex:1*//>
                        <View style={[styles.cellSeven,styles.base]} /*flex:1*//>
                    </View>
                </View>
            </View>
        );
    }
}

export default Mondrian;