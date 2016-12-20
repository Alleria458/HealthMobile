/**
 * HealthMobile React Native App
 *
 * LoginContainerStyle.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2016/12/20
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../themes'

export default StyleSheet.create({

    container: {
        paddingTop: 70,
        backgroundColor: Colors.flatLightBlue
    },

    form: {
        backgroundColor: Colors.backgroundWhite,
        margin: Metrics.baseMargin,
        borderRadius: 4
    },

    row: {
        paddingVertical: Metrics.doubleBaseMargin,
        paddingHorizontal: Metrics.doubleBaseMargin
    },

    textInput: {
        height: 40,
        color: Colors.coal
    },
    textInputReadonly: {
        height: 40,
        color: Colors.steel
    },

})