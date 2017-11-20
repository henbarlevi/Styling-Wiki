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
            Logger.d(tag, `|${b}|\n${space}|============ ${msg} ============|\n${space}|${b}|`, color);
        }
        else {
            Logger.d(tag, `|${b}|\n${space}|============ ${msg} ============|\n${space}|${b}|`);
        }
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map