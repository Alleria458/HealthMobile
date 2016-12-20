/**
 * HealthMobile React Native App
 *
 * Fonts.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2016/12/20
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */

/**
 * 字体类型
 * @type {{base: string, bold: string, italic: string}}
 */
const type = {
    base: 'HelveticaNeue',
    bold: 'HelveticaNeue-Bold',
    italic: 'HelveticaNeue-Italic'
};

/**
 * 字体大小
 * @type {{header: number, input: number, regular: number, title: number, medium: number, small: number, tiny: number}}
 */
const size = {
    header: 19,
    input: 18,
    regular: 17,
    title:16,
    medium: 14,
    small: 12,
    tiny: 8.5
};

/**
 * 字体样式
 * @type {{header: {fontFamily: string, fontSize: number}, normal: {fontFamily: string, fontSize: number}, description: {fontFamily: string, fontSize: number}}}
 */
const style = {
    header: {
        fontFamily: type.italic,
        fontSize: size.header
    },
    normal: {
        fontFamily: type.base,
        fontSize: size.regular
    },
    description: {
        fontFamily: type.base,
        fontSize: size.medium
    },
};

export default {type, size, style}