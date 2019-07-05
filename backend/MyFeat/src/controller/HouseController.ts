import { Request, Response } from 'express';
import { HouseService } from '../service/HouseService';
let House = new HouseService();

export class HouseController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
House.GpCreate(req, (response) => {
     res.status(200);
     res.json(response);
    })}


}