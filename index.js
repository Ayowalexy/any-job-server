const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const paymentRoutes = require('./routes/payment.routes');


// if (['production'].includes(process.env.NODE_ENV)) {
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     const index = path.join(__dirname, 'build', 'index.html');
//     res.sendFile(index);
//     // res.sendFile(path.resolve('client', 'build', 'index.html'));   
//     //  res.sendFile(path.join(__dirname+'/client/build/index.html'));



//   });
// }

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.set('view engine', 'ejs')

mongoose.connect(`mongodb+srv://seinde4:${process.env.PASSWORD}@cluster0.pp8yv.mongodb.net/verido?retryWrites=true&w=majority` || 'mongodb://localhost:27017/flutterwave',
    {    
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }
)


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
    console.log('Database connected')
})

app.use(express.json());

app.use(paymentRoutes)

// app.use((err, req, res, next) => {
//   const { statusCode = 500 } = err
//   if(!err.message) err.message = 'Oh no, Something went wrong'
//   res.status(statusCode).render('error', { err })
 
// })

  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Listening on port`, PORT);
  });
  