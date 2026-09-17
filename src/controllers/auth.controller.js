import authService from "../services/auth.service.js";

export const register = async(req, res)=>{
    try{
        // extract name, email and password from request body sent by the client using frontend
        const {name, email, password} = req.body;
        // validate the request body to check if name, email and password are provided or not
        if(!name || !email || !password){
            // if any of the required fields are missing, return a 400 Bad Request response with an error message
            return res.status(400).json({status: 'error', message: 'Name, email and password are required'});
        }
        // call the register method of authService to create a new user
        const user = await authService.register({name, email, password});
        // return a 201 Created response with the user data
        res.status(201).json({status: 'success', data: user});

    }catch(err){
        // if the error is due to user already existing, return a 500 Internal Server Error response with an error message
        res.status(500).json({status: 'error',message: err.message});
    }
};