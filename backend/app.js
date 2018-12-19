const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');
const authGaurd = require('./middleware/check-auth');
// mongodb+srv://san:C3paENq2CYFVCNpo@cluster0-f4yy2.gcp.mongodb.net/products?retryWrites=true
// mongodb://localhost:27017/products
mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true })
.then((data) => {
    console.log('Connected to Database!');
})
.catch((err) => {
    console.log('Connection failed!', err);
});
// C3paENq2CYFVCNpo
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.use((req,res,next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE, OPTIONS");
//     res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization, application/json');
//     // res.setHeader("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Credentials", "true");
  
//     // res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//     next();
// });
app.use(cors())

app.use(express.static(path.join(__dirname, '../dist/millets-mart')));

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

app.get('/api/posts',(req,res,next) => {
    const posts = [
        {
            id: '1',
            title: 'Areka',
            content: 'This is coming from server'
        },
        {
            id: 2,
            title: 'Millets',
            content: 'This is coming from server'
        },
        {
            id:3,
            title: 'Coconut',
            content: 'this is coming from server'
        }
    ]
    res.status(200).json({
        message:'Posts fetch success',
        posts:posts
    });
});
   

    
    app.use('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../dist/millets-mart/index.html'));
      });
module.exports = app;
