/**
 * HealthMobile React Native App
 *
 * overlay.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/1/9
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';

import Styles from './styles';

class Overlay extends Component {
    render() {
        const {pageX, pageY, show, onPress} = this.props;

        if (!show) return null;

        return (
            <TouchableWithoutFeedback style={Styles.container} onPress={onPress}>
                <View style={[Styles.overlay, {top: -pageY, left: -pageX}]}/>
            </TouchableWithoutFeedback>
        )
    }
}

Overlay.propTypes = {
    pageX: React.PropTypes.number,
    pageY: React.PropTypes.number,
    show: React.PropTypes.bool
};

Overlay.defaultProps = {
    pageX: 0,
    pageY: 0,
    show: false
};

export default Overlay;