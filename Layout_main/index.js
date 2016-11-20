/**
 * Created by yuhung on 2016/11/20.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
}from 'react-native';
import styles from './style';

class MainLayout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            header: 'header',
            footer: 'footer'
        };
    }

    render() {

        return (
            <View style={styles.parent}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{this.state.header}</Text>
                </View>
                <View style={styles.main}>
                    <View style={styles.row}>
                        <View style={styles.base}/>
                        <View style={styles.base}/>
                        <View style={styles.base}/>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.base}/>
                        <View style={styles.base}/>
                        <View style={styles.base}/>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.base}/>
                        <View style={styles.base}/>
                        <View style={styles.base}/>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>{this.state.footer}</Text>
                </View>
            </View>

        );
    }

}

export default MainLayout;