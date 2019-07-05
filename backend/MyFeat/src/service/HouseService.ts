import { Request, Response } from 'express';
import {HouseDao} from '../dao/HouseDao';
let House = new HouseDao();

export class HouseService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
     const  HouseData = req.body
     House.GpCreate(HouseData,(response)=>{
         callback(response);
         });
    }


}