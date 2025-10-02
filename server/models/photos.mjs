import mongoose, {Schema} from "mongoose" 

const photoSchema = {
    image:{
        type: String,
        required: true
    }
}

export default mongoose.model("photo", photoSchema)