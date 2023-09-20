const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
  name:{
    type: String,
    required:[true, 'please add a text value']

  } ,
  age:{
    type: String,
    required:[true, 'please add a text value']

} ,
  email: {
    type: String,
    required:[true, 'please add a text value']
  },

  
},{
    timestamps: true,
           
});
module.exports = mongoose.model('User', userSchema)
      
      

