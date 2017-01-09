/**
 * HealthMobile React Native App
 *
 * optionList.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/1/9
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import {View} from 'react-native';

import Overlay from './overlay';
import Items from './items';

class OptionList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            width: 0,
            height: 0,
            pageX: 0,
            pageY: 0,
            positionX: 0,
            positionY: 0,
            items: [],
            onSelect: () => {
            }
        }
    }

    /**
     * 设置位置
     * @param pageX
     * @param pageY
     * @private
     */
    _currentPosition(pageX, pageY){
        this.setState({
            ...this.state,
            pageX,
            pageY
        })
    }

    /**
     * 显示
     * @param items
     * @param positionX
     * @param positionY
     * @param width
     * @param height
     * @param onSelect
     * @private
     */
    _show(items, positionX, positionY, width, height, onSelect){
        positionX = positionX - this.state.pageX;
        positionY = positionY - this.state.pageY;

        this.setState({
            ...this.state,
            positionX,
            positionY,
            width,
            height,
            items,
            onSelect,
            show: true
        })
    }

    /**
     * 滑过
     * @private
     */
    _onOverlayPress() {
        const {onSelect} = this.state;
        onSelect(null, null);

        this.setState({
            ...this.state,
            show: false
        })
    }

    /**
     * 选中
     * @param item
     * @param value
     * @private
     */
    _onItemPress(item, value) {
        const {onSelect} = this.state;
        onSelect(item, value);

        this.setState({
            ...this.state,
            show: false
        })
    }


    render() {
        const {items, pageX, pageY, positionX, positionY, width, height, show}
            = this.state;
        return (
            <View>
                <Overlay pageX={pageX} pageY={pageY} show={show}
                         onPress={this._onOverlayPress.bind(this)}/>

                <Items items={items}
                       positionX={positionX} positionY={positionY}
                       width={width} height={height}
                       show={show} onPress={this._onItemPress.bind(this)}/>
            </View>
        )
    }
}

export default OptionList;

