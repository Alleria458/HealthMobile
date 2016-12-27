/**
 * HealthMobile React Native App
 *
 * selectstyle.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2016/12/21
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import {Dimensions, StyleSheet} from 'react-native'

const window = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        borderColor: '#BDBDC1',
        borderWidth: 2 / window.scale
    }
})