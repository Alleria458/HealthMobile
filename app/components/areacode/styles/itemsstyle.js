/**
 * HealthMobile React Native App
 *
 * itemsstyle.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2016/12/21
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    scrollView: {
        height: 120,
        width: 198 //TODO: this needs to be dynamic
    },
    container: {
        position: 'absolute',
        borderColor: '#BDBDC1',
        borderWidth: 2 / window.scale,
        borderTopColor: 'transparent',
    }
})