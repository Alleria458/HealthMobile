/**
 * HealthMobile React Native App
 *
 * LoginContainer.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2016/12/20
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import {View, ScrollView, Image, Text, Picker} from 'react-native';
import I18n from 'react-native-i18n';

import styles from './styles/LoginContainerStyle';
import {Images, Metrics} from '../themes';

import Dropdownlistbox from '../components/areaphone/dropdownlistbox';
import ComboBox from '../components/areaphone/combobox';

// import {Select, Option, OptionList, UpdatePosition} from '../components/areacode';
// import {Listbox, Option, OptionList, GetPosition} from '../components/dropdownlistbox';

// import Dropdownlistbox from './components/areaphone/dropdownlistbox';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'username',
            password: 'password',
            visibleHeight: Metrics.screenHeight,

            language: '',
        }
    }

    // componentDidMount(){
    //     GetPosition(this.refs['LISTBOX']);
    //     // UpdatePosition(this.refs['SELECT2']);
    //     GetPosition(this.refs['OPTIONLIST']);
    // }

    _getOptionList() {
        return this.refs['OPTIONLIST']
    }

    _canada(province){
        this.setState({
            ...this.state,
            canada:province
        })
    }



    render() {
        // const {username, password} = this.state;
        // const {fetching} = this.props;
        // const editable = !fetching;
        // const textInputStyle = editable ?
        //     styles.textInput : styles.textInputReadonly;

        return (
            <ScrollView contentContainerStyle={{justifyContent: 'center'}}
                        style={[styles.container, {height: this.state.visibleHeight}]}>
                <View style={styles.form}>
                    <ComboBox/>
                    {/*<Dropdownlistbox />*/}
                    {/*<View style={styles.row}>*/}

                        {/*<Listbox width={80} defaultValue="+86"*/}
                                 {/*ref="LISTBOX"*/}
                                 {/*optionListRef={this._getOptionList.bind(this)}*/}
                                 {/*onSelect={this._canada.bind(this)}>*/}

                            {/*<Option>+80</Option>*/}
                            {/*<Option>+81</Option>*/}
                            {/*<Option>+82</Option>*/}
                            {/*<Option>+83</Option>*/}
                            {/*<Option>+84</Option>*/}
                            {/*<Option>+85</Option>*/}
                            {/*<Option>+86</Option>*/}
                        {/*</Listbox>*/}
                        {/*<OptionList ref="OPTIONLIST"/>*/}

                    {/*</View>*/}
                </View>

            </ScrollView>
        )
    }
}

export default LoginContainer;