import * as mongoose from 'mongoose';
import HouseModel from '../models/House';


export class HouseDao {
    private House = HouseModel;
    constructor() { }
    
    public GpCreate(HouseData, callback){
let temp = new HouseModel(HouseData);
temp.save().then((result)	=>	{
callback(result);
}).catch((error)=>{
callback(error);
});}


}