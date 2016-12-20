/**
 * HealthMobile React Native App
 *
 * I18n.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2016/12/20
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import I18n from 'react-native-i18n'

import './zh'

I18n.fallbacks = true;

/** 主要语言是中文 */
I18n.translations = {
    zh: require('./zh.json')
};

/** 语言代码 */
let languageCode = I18n.locale.substr(0, 2);

switch (languageCode) {
    case 'zh':
        I18n.translations.zh = require('./zh.json');
        break;
    case 'en':
        I18n.translations.en = require('./en.json');
        break;
}

