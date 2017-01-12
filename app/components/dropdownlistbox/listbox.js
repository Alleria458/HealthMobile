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
import {View, TouchableWithoutFeedback, Text, ART} from 'react-native';

import Styles from './styles';
import Option from './option';

const {Surface, Shape, Path} = ART;

class Listbox extends Component {

    constructor(props){
        super(props);

        this.arrowSize = 12;
        this.arrowHeight = this.arrowSize / 2;

        this.pageX = 0;
        this.pageY = 0;

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

    _currentPosition(pageX, pageY) {
        this.pageX = pageX;
        this.pageY = pageY + this.props.height;
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

        this.setState({
            ...this.state,
            show: true
        });

        optionListRef()._show(children, this.pageX, this.pageY,
            width, height, (item, value = item) => {
                if (item) {
                    onSelect(value);
                    this.setState({
                        ...this.state,
                        value: item,
                        show: false
                    });
                }
            }, () => {
                this.setState({
                    ...this.state,
                    show: false
                });
            });
    }


    render() {
        /** 属性 */
        const {width, height, children, defaultValue, style, styleOption, styleText}
            = this.props;

        const dimensions = {width, height};


        /** 画箭头路径 */
        if(this.state.show){
            arrowPath = new Path().moveTo(this.arrowSize / 2, 0)
                .lineTo(0, this.arrowHeight)
                .lineTo(this.arrowSize, this.arrowHeight)
                .close();
        }else{
            arrowPath = new Path().moveTo(this.arrowSize / 2, this.arrowHeight)
                .lineTo(0, 0)
                .lineTo(this.arrowSize, 0)
                .close();
        }


        return (
            <TouchableWithoutFeedback onPress={this._onPress.bind(this)}>
                <View style={[Styles.listbox, style, dimensions]}>
                    <Option style={styleOption} styleText={styleText}>
                        {this.state.value}
                    </Option>
                    <Surface width={this.arrowSize} height={this.arrowHeight}>
                        <Shape d={arrowPath} fill="gray"/>
                    </Surface>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

export default Listbox;
