/**
 * HealthMobile React Native App
 *
 * items.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/1/9
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, ScrollView} from 'react-native';

import Styles from './styles';

class Items extends Component {
    render() {
        const {items, positionX, positionY, show, onPress, width, height}
            = this.props;

        if (!show) return null;

        const renderedItems = React.Children.map(items, (item) => {
            return (
                <TouchableWithoutFeedback onPress={
                    () => onPress(item.props.children, item.props.value)
                }>
                    <View>{item}</View>
                </TouchableWithoutFeedback>
            )
        });

        return (
            <View style={[Styles.items, {top: positionY, left: positionX}]}>
                <ScrollView style={{width: width - 2, height: height * 3}}
                            automaticallyAdjustContentInsets={false}
                            bounces={false}>
                    {renderedItems}
                </ScrollView>
            </View>
        )
    }
}

export default Items;