/**
 * HealthMobile React Native App
 *
 * dropdownlistbox.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/1/12
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Styles from './styles';
import ComboBox from './combobox';

class Dropdownlistbox extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <ComboBox>
                </ComboBox>
                {/*<Text>123</Text>*/}
            </View>
        )
    }
}

export default Dropdownlistbox;