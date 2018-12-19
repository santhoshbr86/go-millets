const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, 'secret_super_long_key');
        console.log(token);
        next();
        
    }   
    catch(err) {
        res.status(401).json({
            message:'Auth failedd!',
            error: err
        });
    } 

}