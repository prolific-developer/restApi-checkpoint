const async = require('express-async-handler');
const User = require('../model/userlist')
// const User = require('../model/userlist')git remote add origin https://github.com/cyndylove1/Rest-Api-checkpoint.git


const getUsers = async(async(req, res)=>{
    const users = await User.find()
    res.status(200).json(users)
})
const postUsers = async(async(req, res)=>{
    if(!req.body.name, !req.body.age && !req.body.email ){
        res.status(400)
        throw new Error('please add a content')

    }

    const user = await User.create({
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        

    
    })
    res.status(200).json(user)
   
});
const updateUsers = async(async( req ,res)=>{
    const user = await User.findById(req.params.id)
 
    
    if(!user){
        res.status(400)
        throw new Error('contact not found')
    }

        const updatedUser = await User.updateOne({ _id :("6504b4d521ca12e34d84499b") }, { $set: { name: "Nweke Rita Chinenye" } })
    res.status(200).json(updatedUser)
    
        
        
});
const deleteUsers = async(async( req ,res)=>{
    const user = await User.findByIdAndRemove(req.params.id)

    
    if(!user){
        res.status(400)
        throw new Error('contact not found')
    }
    await User.deleteOne({_id:"6504b622ef0eb10c0011dbb8"})
    res.status(200).json({id:req.params.id})
});

module.exports = {
    getUsers,postUsers,updateUsers,deleteUsers
}