/**
 * HealthMobile React Native App
 *
 * styles.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/1/12
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import {StyleSheet, Dimensions} from 'react-native'
import {Fonts, Metrics, Colors} from '../../themes'

const window = Dimensions.get('window');

export default StyleSheet.create({

    container: {
        backgroundColor: Colors.backgroundWhite,
        margin: Metrics.baseMargin,
        borderRadius: 4,
        borderColor: Colors.lineLightGray,
        borderWidth: 2 / window.scale
    },

    combobox:{
        margin: Metrics.baseMargin,
        flexDirection: 'row',
        alignItems: 'center'
    },

    comboboxText:{
        marginRight: Metrics.baseMargin
    }


})