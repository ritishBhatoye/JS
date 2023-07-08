const mongoose=require('mongoose');

const Schema =mongoose.Schema;

const StudentSchema=new Schema({
    name:String
});
//Entry into DATABASE
const Student=mongoose.model("student",StudentScheme);

//export
module.export=Student;