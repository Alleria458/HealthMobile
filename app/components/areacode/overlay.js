/**
 * HealthMobile React Native App
 *
 * overlay.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2016/12/21
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import {TouchableHighlight, View} from 'react-native';

import Styles from './styles/overlaystyle';

class Overlay extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { pageX, pageY, show, onPress } = this.props;

        if(!show) return null;

        return (
            <TouchableHighlight style={Style.container} onPress={onPress}>
                <View style={[Styles.overlay, {top: -pageY, left: -pageX}]}/>
            </TouchableHighlight>
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