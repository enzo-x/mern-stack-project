const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default:() => Date.now(),
    immutable: true,
  },
  deleted: {
    type: Boolean,
  default:false
  },
createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
    required:true
},
imagePath:{
    type:String
}
});

const postModel =mongoose.model('posts',postSchema)
module.exports=postModel