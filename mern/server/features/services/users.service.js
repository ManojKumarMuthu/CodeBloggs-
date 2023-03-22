const asyncWrapper = require('../../shared/utils/base-utils');
const Schemas = require('../../shared/db/schemas');
const User = Schemas.UserModel;

const insertUser = asyncWrapper( async (req, res) =>{
    let body = req.body;
    let newUser = new User(body);
    //let query = {};

    /*query["first_name"] = body.first_name;
    query["last_name"] = body.last_name;
    query["birthday"] = body.birthday;
    query["email"] = body.email;
    query["password"] = body.password;
    query["status"] = body.status;
    query["location"] = body.location;
    query["occupation"] = body.occupation;
    query["auth_level"] = body.auth_level;*/

    try{
       return await newUser.save();
    }
    catch(error){
        throw Error(`Error creating agent: ${error.message}`);
    }
});

module.exports = {insertUser};