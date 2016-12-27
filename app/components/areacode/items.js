/**
 * HealthMobile React Native App
 *
 * items.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2016/12/21
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheetView,
    View,
    ScrollView,
    TouchableHighlight
} from 'react-native';

import Styles from './styles/itemsstyle';

const window = Dimensions.get('window');


class Items extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { items, positionX, positionY, show, onPress, width, height }
            = this.props;

        if(!show){
            return null;
        }

        const renderedItems = React.Children.map(items, (item) => {
            return(
                <TouchableHighlight onPress={
                    () => onPress(item.props.children, item.props.value)
                }>
                    <View>{item}</View>
                </TouchableHighlight>
            )
        });

        return (
            <View style={[Styles.container, {top: positionY, left: positionX}]}>
                <ScrollView style = {{width: width - 2, height: height * 3}}
                            automaticallyAdjustContentInsets={false}
                            bounces={false}>
                    {renderedItems}
                </ScrollView>
            </View>
        )
    }
}

Items.propTypes = {
    positionX: React.PropTypes.number,
    positionY: React.PropTypes.number,
    show: React.PropTypes.bool,
    onPress: React.PropTypes.func
};

Items.defaultProps = {
    width: 0,
    height: 0,
    positionX: 0,
    positionY: 0,
    show: false,
    onPress: () => {}
};

export default Items;
