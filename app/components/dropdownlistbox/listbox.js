/**
 * HealthMobile React Native App
 *
 * listbox.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/1/9
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';

import Styles from './styles';
import Option from './option';

class Listbox extends Component {

    constructor(props){
        super(props);

        /** 默认值 */
        let defaultValue = props.defaultValue;

        if (!defaultValue) {
            if (Array.isArray(props.children)) {
                defaultValue = props.children[0].props.children;
            } else {
                defaultValue = props.children.props.children;
            }
        }

        this.state = {value: defaultValue};
    }


    /**
     * 点击选择
     * @returns {boolean}
     * @private
     */
    _onPress(){
        const {optionListRef, children, onSelect, width, height} = this.props;

        if (!children.length) {
            return false;
        }

        optionListRef()._show(children, this.pageX, this.pageY,
            width, height, (item, value = item) => {
                if (item) {
                    onSelect(value);
                    this.setState({
                        value: item
                    });
                }
            });
    }


    render() {

        /** 属性 */
        const {width, height, children, defaultValue, style, styleOption, styleText}
            = this.props;

        const dimensions = {width, height};

        return (
            <TouchableWithoutFeedback onPress={this._onPress.bind(this)}>
                <View style={[Styles.listbox, style, dimensions]}>
                    <Option style={styleOption} styleText={styleText}>
                        {this.state.value}
                    </Option>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default Listbox;
