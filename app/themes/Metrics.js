/**
 * HealthMobile React Native App
 *
 * Metrics.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2016/12/20
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import {Dimensions, Platform} from 'react-native'

const {width, height} = Dimensions.get('window');

const metrics = {

    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    navBarHeight: (Platform.OS === 'ios') ? 64 : 54,

    marginHorizontal: 10,
    marginVertical: 10,
    section: 25,

    baseMargin: 8,
    doubleBaseMargin: 16,
    smallMargin: 4,

    horizontalLineHeight: 1,
    buttonRadius: 4,

    icons: {
        tiny: 15,
        small: 20,
        medium: 30,
        large: 45,
        xl: 60
    },
    images: {
        small: 20,
        medium: 40,
        large: 60,
        logo: 300
    }
};

export default metrics;
