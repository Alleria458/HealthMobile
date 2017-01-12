/**
 * HealthMobile React Native App
 *
 * styles.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/1/9
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

export default StyleSheet.create({
    listbox:{
        borderColor: '#BDBDC1',
        borderWidth: 2 / window.scale,
        // borderRadius: 10
        flexDirection: 'row',
        alignItems: 'center'
    },

    // listbox:{
    //     flexDirection: 'row',
    //     alignItems: 'center'
    // },

    option:{
        padding:10
    },

    overlay:{
        position: 'absolute',
        backgroundColor: 'transparent',
        // backgroundColor: rgba(0,0,0,.5),
        width: window.width,
        height:window.height
    },

    items:{
        position: 'absolute',
        borderColor: '#BDBDC1',
        borderWidth: 2 / window.scale,
        borderTopColor: 'transparent',
    }

})
