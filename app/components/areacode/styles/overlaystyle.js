/**
 * HealthMobile React Native App
 *
 * overlaystyle.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2016/12/21
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import {StyleSheet, Dimensions} from 'react-native'

const window = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    overlay: {
        position: 'absolute',
        backgroundColor: 'transparent',
        width: window.width,
        height: window.height
    }
})