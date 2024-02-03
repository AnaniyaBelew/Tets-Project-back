import mongoose from "mongoose";

const SongsSchema =new mongoose.Schema ({
    Title:{type:String, required:true},
    Artist:{type:String,required:true},
    Album:{type:String,required:false},
    Genre:{type:String,required:true},
});
export const SongModel=mongoose.model("Songs",SongsSchema);

