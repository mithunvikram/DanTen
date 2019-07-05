import * as cors from 'cors';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import Controller from './interface/controller.interface';
import { WinstonLogger } from './config/WinstonLogger';
import {
    HouseController
    } from './apicontroller';

const PORT = 8002
let apisController = [ 
    new HouseController()
    ]
class App {

    public app: express.Application = express();
    public logger: WinstonLogger = new WinstonLogger();

   constructor(controllers: Controller[]) {
        this.logger.setupLogger();
        this.logger.configureWinston(this.app);
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors({ credentials: true, origin: true }))
    }

    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.app.route('/health/apigateway').get((req: express.Request, res: express.Response) => {
                res.status(200).send({
                    status: 'up'
                })
            })
            this.app.use('/mobile', controller.router);
            this.app.use('/desktop', controller.router);
        });
    }

}

new App(apisController).app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})
