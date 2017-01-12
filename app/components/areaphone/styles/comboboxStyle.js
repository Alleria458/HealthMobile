/**
 * HealthMobile React Native App
 *
 * comboboxStyle.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/1/12
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import {StyleSheet, Dimensions} from 'react-native';
import {Fonts, Metrics, Colors} from '../../../themes';

const window = Dimensions.get('window');

export default StyleSheet.create({

    container:{
        // backgroundColor:Colors.backgroundGray,
        flexDirection: 'row',
        margin: Metrics.baseMargin,
        alignItems: 'center'
    },


    listbox:{
        margin: Metrics.smallMargin,
        marginRight: Metrics.baseMargin,
        flexDirection: 'row',
        alignItems: 'center'
    },

    listboxtext: {
        ...Fonts.style.normal,
        marginRight: Metrics.baseMargin
    },

    line:{
        backgroundColor: 'gray',
        width: 0.5,
        margin: 2,
        height: 24,
    },

    textbox:{
        flex: 1,
        marginLeft: Metrics.doubleBaseMargin
    }


})

