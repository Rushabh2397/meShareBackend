const { check } = require('express-validator')


module.exports={

    register: ()=>{
        return([
            check('user_name','User name is required.').notEmpty(),
            check('password','Password is required.').notEmpty()
        ])
    },
    
    login: ()=>{
        return([
            check('user_name','User name is required.').notEmpty(),
            check('password','Password is required.').notEmpty()
        ])
    },
    
    url : ()=>{
        return([
            check('url','Url is required.').notEmpty(),
        ])
    }

}