
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const HouseSchema = new Schema({
   addressOne: String,
   addressTwo: String
})

const HouseModel = mongoose.model('House', HouseSchema, 'House');
export default HouseModel;
