import { Request, Response, NextFunction } from "express";
import { HouseController } from '../controller/HouseController';


export class Routes {
    private House: HouseController = new HouseController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/House/save').post(this.House.GpCreate);
     }

}