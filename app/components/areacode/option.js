/**
 * HealthMobile React Native App
 *
 * option.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2016/12/21
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import { View, Text } from 'react-native';

import Styles from './styles/optionstyle';

class Option extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {style, styleText } = this.props;
        return (
            <View style={[Styles.constructor, style]}>
                <Text style={ styleText}>
                    {this.props.children}
                </Text>
            </View>
        )
    }
}

Option.propTypes = {
    children: React.PropTypes.string.isRequired
};

export default Option;