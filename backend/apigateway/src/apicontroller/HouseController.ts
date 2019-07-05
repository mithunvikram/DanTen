import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';

export class HouseController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/House/save', this.GpCreate);
    }

public GpCreate(req: Request, res: Response) {
        new ApiAdaptar().post(Constant.MYFEATURL + `/House/save` , req.body).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
        }).catch(err => {
            res.send(err);
        });
    }

}
