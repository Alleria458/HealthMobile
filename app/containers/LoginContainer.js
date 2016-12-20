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

import styles from './styles/LoginContainerStyle';

class LoginContainer extends Component {

    constructor (props) {
        super(props);
        this.state = {
            username: 'username',
            password: 'password',
        }
    }


    render() {
        return (
            <View>
            </View>
        )
    }
}

export default LoginContainer;