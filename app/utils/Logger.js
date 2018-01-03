"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
class Logger {
    static d(tag, msg, color) {
        if (color) {
            console.log(tag, colors[color](msg));
        }
        else {
            console.log(tag, msg);
        }
    }
    static e(tag, msg, err) {
        console.log(tag, msg, err);
    }
    /**will print nice buffer title */
    static t(tag, msg, color) {
        let b = '='.repeat(msg.length) + '==========================';
        let tl = tag.length;
        let space = ' '.repeat(tl + 1);
        if (color) {
            Logger.d(tag, `|${b}|\n${space}|============ ${msg} ============|\n${space}|${b}|\n`, color);
        }
        else {
            Logger.d(tag, `|${b}|\n${space}|============ ${msg} ============|\n${space}|${b}|\n`);
        }
    }
    /**will print nice middle title */
    static mt(tag, msg, color) {
        let b = '‾'.repeat(msg.length) + '‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾';
        let tl = tag.length;
        let space = ' '.repeat(tl + 1);
        if (color) {
            Logger.d(tag, `\n${space}|‾‾‾‾‾‾‾‾‾‾‾‾ ${msg} ‾‾‾‾‾‾‾‾‾‾‾‾|\n${space}‾${b}‾`, color);
        }
        else {
            Logger.d(tag, `\n${space}|‾‾‾‾‾‾‾‾‾‾‾‾ ${msg} ‾‾‾‾‾‾‾‾‾‾‾‾|\n${space}‾${b}‾`);
        }
    }
    /**will print nice small title */
    static st(tag, msg, color) {
        if (color) {
            console.log(tag, colors[color](`|----------- ${msg} -----------|`));
        }
        else {
            console.log(tag, `|----------- ${msg} -----------|`);
        }
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map