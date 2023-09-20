const express = require('express')
const router = express.Router()
const { getUsers,postUsers, updateUsers, deleteUsers } = require('../controllers/users')


router.get('/', getUsers);
router.post('/', postUsers);
router.put('/:id', updateUsers );
router.delete('/:id', deleteUsers );

module.exports = router;


// const getUser = async(async(req,res)=>{
    
//     const users = await userlist.find()

//     res.status(200).json(users)
    
    

// });


// router.get('/', getUser)
// router.post('/', postPerson)
// router.put('/:id', updatePerson)
// router.delete('/:id',deletePerson)




    
    
module.exports = router