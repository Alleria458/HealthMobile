/**
 * HealthMobile React Native App
 *
 * option.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/1/9
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Styles from './styles';

class Option extends Component {

    render() {
        const {style, styleText} = this.props;

        return (
            <View style={[Styles.option, style]}>
                <Text style={styleText}>{this.props.children}</Text>
            </View>
        )
    }
}

/**
 * 属性类型定义
 * @type {{children: *}}
 */
Option.propTypes = {
    children: React.PropTypes.string.isRequired
};


export default Option;