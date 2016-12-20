/**
 * HealthMobile React Native App
 *
 * AppMain.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2016/12/20
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';

import LoginContainer from './containers/LoginContainer';
import './locale/I18n';

class AppMain extends Component {
    render() {
        return (
            <LoginContainer/>
        )
    }
}

export default AppMain;

