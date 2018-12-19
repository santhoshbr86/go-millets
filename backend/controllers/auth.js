const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/auth');

exports.signUp = (req,res,next) => {
    console.log(req.body.password);
    bcrypt.hash(req.body.password, 10).
    then(hash => {
       const user = new User({
            email:req.body.email,
            phone:req.body.phone,
            address: req.body.address,
            password: hash
        });
        user.save().then(result =>{
            res.status(201).json({
                message:'User created!',
                result:result
            });
        })
        .catch(err => {
            res.status(500).json({
                message:'Duplicate user!',
                error: err
            })
        });
    });
}

exports.login = (req, res, next) => {
    let fetchedUser;
      User.findOne({email:req.body.username})
      .then(user => {
          if(!user){
              return res.status(401).json({
                  message: "Authenticate failed",
              })
          }
          fetchedUser = user;
          return bcrypt.compare(req.body.password, user.password);
      })
      .then((result) => {
          console.log(result);
          if(!result){
            return res.status(401).json({
                  message: "Authenticate failed",
              })
          }
          const token = jwt.sign({email:fetchedUser.email, userId: fetchedUser._id}, 'secret_super_long_key', { expiresIn:'1h'});
          res.status(200).json({
              message: 'login success',
              auth_token:token,
              expiresIn:3600,
              email: fetchedUser.email
          });
      })
      .catch(err => {
         return res.status(401).json({
              message: "Authenticate failed",
              err: err
          })
      })
      
  }