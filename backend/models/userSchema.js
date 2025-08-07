  // user,DOB,mothername,IP,fullname,hobbies,product,state,city,postalcode

  const mongoose=require("mongoose")

  const userSchema=mongoose.Schema({

    user:{
        type:String,
        required:true
    },

    DOB:{
        type:String,
        required:true
    },

    mothername:{
        type:String,
        required:true
    },

    IP:{
        type:String,
        required:true
    },

    fullname:{
        type:String,
        required:true
    },

    hobbies:{
        type:String,
        required:true
    },

    product:{
        type:String,
        required:true
    },

    state:{
        type:String,
        required:true
    },

    city:{
        type:String,
        required:true
    },

    postalcode:{
        type:String,
        required:true
    }
  })

  const userModels= mongoose.model("User", userSchema)

  module.exports= userModels