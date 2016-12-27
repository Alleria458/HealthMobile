/**
 * HealthMobile React Native App
 *
 * select.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2016/12/21
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

import Option from './option';
import Styles from './styles/selectstyle';

const SELECT = 'SELECT';

class Select extends Component {
    constructor(props) {
        super(props);

        this.pageX = 0;
        this.pageY = 0;

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

    reset() {
        const {defaultValue} = this.props;
        this.setState({value: defaultValue});
    };

    _currentPosition(pageX, pageY) {
        this.pageX = pageX;
        this.pageY = pageY + this.props.height;
    }

    _onPress() {
        const {optionListRef, children, onSelect, width, height} = this.props;

        if (!children.length) {
            return false;
        }

        optionListRef()._show(children, this.pageX, this.pageY, width, height, (item, value = item) => {
            if (item) {
                onSelect(value);
                this.setState({
                    value: item
                });
            }
        });
    }


    render() {

        const {
            width, height, children, defaultValue, style,
            styleOption, styleText
        } = this.props;

        const dimensions = {width, height};

        return(
            <TouchableHighlight onPress={this._onPress.bind(this)}>
                <View ref={SELECT} style={[Styles.container, style, dimensions ]}>
                    <Option style={ styleOption } styleText={ styleText }>{this.state.value}</Option>
                </View>
            </TouchableHighlight>
        )
    }

}



Select.propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    optionListRef: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func
};

Select.defaultProps = {
    width: 200,
    height: 40,
    onSelect: () => { }
};

export default Select;