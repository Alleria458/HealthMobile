/**
 * HealthMobile React Native App
 *
 * LoginContainer.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2016/12/20
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import { View, ScrollView, Image } from 'react-native';

import styles from './styles/LoginContainerStyle';
import { Images, Metrics } from '../themes';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'username',
            password: 'password',
            visibleHeight: Metrics.screenHeight,
        }
    }


    render() {
        const {username, password} = this.state;
        const {fetching} = this.props;
        const editable = !fetching;
        const textInputStyle = editable ?
            styles.textInput : styles.textInputReadonly;

        return (
            <ScrollView contentContainerStyle={{justifyContent: 'center'}}
                        style={[styles.container, {height: this.state.visibleHeight}]}>
                <View>
                </View>
            </ScrollView>
        )
    }
}

export default LoginContainer;