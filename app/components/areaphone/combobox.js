/**
 * HealthMobile React Native App
 *
 * combobox.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/1/12
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import {
    View,
    TouchableWithoutFeedback,
    Text,
    TextInput,
    ART
} from 'react-native';

import Styles from './styles/comboboxStyle';

const {Surface, Shape, Path} = ART;

class ComboBox extends Component {

    constructor(props) {
        super(props);

        /** 箭头大小设置 */
        this.arrowSize = 12;
        this.arrowHeight = this.arrowSize / 2;

        this.upArrowPath = new Path()
            .moveTo(this.arrowSize / 2, 0)
            .lineTo(0, this.arrowHeight)
            .lineTo(this.arrowSize, this.arrowHeight)
            .close();

        this.downArrowPath = new Path()
            .moveTo(this.arrowSize / 2, this.arrowHeight)
            .lineTo(0, 0)
            .lineTo(this.arrowSize, 0)
            .close();

        /** 默认值 */
        let defaultValue = props.defaultValue;

        if (!defaultValue) {
            if (Array.isArray(props.children)) {
                defaultValue = props.children[0].props.children;
            } else {
                defaultValue = props.children.props.children;
            }
        }

        this.state = {
            show: false,
            value: defaultValue
        }
    }

    _onPress() {
    }


    render() {

        const {width, height, defaultValue} = this.props;

        return (
            <View style={Styles.container}>
                <TouchableWithoutFeedback onPress={this._onPress.bind(this)}>
                    <View style={Styles.listbox}>
                        <Text style={Styles.listboxtext}>
                            {this.state.value}
                        </Text>
                        <Surface width={this.arrowSize} height={this.arrowHeight}>
                            <Shape d={this.state.show ? this.upArrowPath : this.downArrowPath}
                                   fill="gray"/>
                        </Surface>
                    </View>
                </TouchableWithoutFeedback>
                <View style={Styles.line}/>

                <TextInput style={Styles.textbox} keyboardType="numeric">

                </TextInput>
            </View>
        )
    }
}

export default ComboBox;