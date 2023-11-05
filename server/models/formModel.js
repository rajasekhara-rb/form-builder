import mongoose from "mongoose";

const formSchema = mongoose.Schema({
    formBanner:{
        type:String,
        require:true,
    },
    formName:{
        type:String,
        required:true,
        default:"Untitled Form",
    },
    formDescription:{
        type:String,
        required:true,
    },
    formElements:{
        type:Array,
    }

});
const Form = mongoose.model("Form", formSchema);
export default Form;