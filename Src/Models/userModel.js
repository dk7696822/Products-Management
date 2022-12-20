const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    fname: {
    type: string, 
    required: true
},
    lname: {
        type: string, 
        required: true
    },
    email: {
        type: string, 
        required: true, 
        unique: true
      },
    profileImage: {
        type: string, 
        required: true
    }, // s3 link
    phone: {type: string, 
      required: true, 
      unique: true 
      }, 
    password: {
      type: string, 
      required: true, 
      minLen: 8, 
      maxLen: 15
    }, // encrypted password
    address: {
      shipping: {
        street: {string, mandatory},
        city: {string, mandatory},
        pincode: {number, mandatory}
      },
      billing: {
        street: {string, mandatory},
        city: {string, mandatory},
        pincode: {number, mandatory}
      }
    },
    createdAt: {timestamp},
    updatedAt: {timestamp}
  }
)

    