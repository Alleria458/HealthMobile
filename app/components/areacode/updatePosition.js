/**
 * HealthMobile React Native App
 *
 * updatePosition.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2016/12/21
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import {NativeModules, View, findNodeHandle} from 'react-native';


module.exports = function (ref, debug) {
    const handle = findNodeHandle(ref);

    setTimeout(() => {
        NativeModules.UIManager.measure(handle,
            (x, y, width, height, pageX, pageY) => {
                if (debug) {
                    console.log(x, y, width, height, pageX, pageY);
                }
                ref._currentPosition(pageX, pageY);
            })
    }, 0)
};

