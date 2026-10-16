import mongoose from 'mongoose';
const projectSchema = new mongoose.Schema({name:{type:String,required:true,trim:true},description:{type:String,default:''},color:{type:String,default:'#8875ff'},owner:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},members:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}]}, {timestamps:true});
export default mongoose.model('Project', projectSchema);
