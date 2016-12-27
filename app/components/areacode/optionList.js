/**
 * HealthMobile React Native App
 *
 * optionList.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2016/12/21
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import {View} from 'react-native';

class OptionList extends Component {
    constructor(props){
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
            onSelect: () => { }
        }
    }

    _currentPosition(pageX, pageY){
        this.setState({
            ...this.state,
            pageX,
            pageY
        })
    }

    _show(items, positionX, positionY, width, height, onSelect) {
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
        });
    }

    _onOverlayPress() {
        const { onSelect } = this.state;
        onSelect(null, null);

        this.setState({
            ...this.state,
            show: false
        });
    }

    _onItemPress(item, value) {
        const { onSelect } = this.state;
        onSelect(item, value);

        this.setState({
            ...this.state,
            show: false
        });
    }



    render() {
        const {
            items,
            pageX,
            pageY,
            positionX,
            positionY,
            width,
            height,
            show
        } = this.state;
        return (
            <View>
                <Overlay
                    pageX={pageX}
                    pageY={pageY}
                    show={show}
                    onPress={ this._onOverlayPress.bind(this) }/>
                <Items
                    items={items}
                    positionX={positionX}
                    positionY={positionY}
                    width={width}
                    height={height}
                    show={show}
                    onPress={ this._onItemPress.bind(this) }/>
            </View>
        )
    }
}

OptionList.propTypes = {

};

OptionList.defaultProps = {

};

export default OptionList;