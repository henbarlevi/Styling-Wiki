import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as config from 'config';

import appRoutes from './routes/appRoutes';
//===== utils
import { Logger } from './utils/Logger';
const TAG: string = 'App.ts';

const ENV: string = process.env.NODE_ENV || 'local';
const envConfig: any = config.get(`${ENV}`);
const connectionString: string = envConfig.connectionString || 'mongodb://localhost/mydb';
Logger.d(TAG, `============== ENV Configuration ==============`, 'yellow');
console.log(envConfig);
Logger.d(TAG, `============== / ENV Configuration ============`, 'yellow');



// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express(); //THE APP
    this.middleware();
    this.routes();

  }

  // Configure Express middleware.
  private middleware(): void {
    mongoose.connect(connectionString, {
      useMongoClient: true
    }, (err) => { err ? Logger.d('MongoDB Connection :', `${err}`, 'red') : Logger.d(`MongoDB Connection :`, `SUCCESS`,'green') })//print mongo connection status

    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));

  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    this.express.use('/', appRoutes);
  }



}

export default new App().express; //export instance of new app