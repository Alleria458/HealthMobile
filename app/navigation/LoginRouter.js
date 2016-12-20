/**
 * HealthMobile React Native App
 *
 * LoginRouter.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2016/12/20
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import {Router, Scene, Modal, Reducer} from 'react-native-router-flux';

import {Colors, Metrics} from '../themes';
import LoginContainer from '../containers/LoginContainer';
import Styles from './styles/LoginRouterStyles';

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        console.log('ACTION:', action);
        return defaultReducer(state, action);
    }
};

const getSceneStyle = (props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: Colors.backgroundWhite,
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    };
    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : Metrics.navBarHeight;
        style.marginBottom = computedProps.hideTabBar ? 0 : Metrics.tabBarHeight;
    }
    return style;
};


class LoginRouter extends Component {
    render() {
        return (
            <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
                <Scene key="modal" component={Modal}>
                    <Scene key="root" hideTabBar>
                        <Scene initial key="login" component={LoginContainer}
                               navigationBarStyle={Styles.navBar} title="登录"/>

                    </Scene>
                </Scene>
            </Router>
        )
    }
}

export default LoginRouter;