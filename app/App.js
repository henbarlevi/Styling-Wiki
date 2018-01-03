"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("config");
const appRoutes_1 = require("./routes/appRoutes");
//===== utils
const Logger_1 = require("./utils/Logger");
const TAG = 'App.ts';
const ENV = process.env.ENV || 'local';
const envConfig = config.get(`${ENV}`);
const connectionString = envConfig.connectionString || 'mongodb://localhost/mydb';
Logger_1.Logger.d(TAG, `============== ENV Configuration ==============`, 'yellow');
console.log(envConfig);
Logger_1.Logger.d(TAG, `============== / ENV Configuration ============`, 'yellow');
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express(); //THE APP
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    middleware() {
        mongoose.connect(connectionString, {
            useMongoClient: true
        });
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure API endpoints.
    routes() {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        this.express.use('/', appRoutes_1.default);
    }
}
exports.default = new App().express; //export instance of new app
//# sourceMappingURL=App.js.map