const express = require("express");
const app = express();
const server = require('http').Server(app)//this appows us to create server thet we can conect to Socket.io -- this creates a server
const io = new require('socket.io')(server)//passing in server in socket.io so thsat it can know how the server of our is runing
const {v4 :uuidV4} =require('uuid')//this is to generate random room ids
// const { auth } = require('express-openid-connect');

const PORT = 3000;

const port = process.env.port || PORT ;

const { auth } = require('express-openid-connect');
const dotenv = require('dotenv');

// const express = require("express")
// const app =express()

// const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'https://newonefinalvideochattingapplication.onrender.com/',
  clientID: 'kI7Gehgc11Cf2knZXjvyn0anPVAH89zQ',
  issuerBaseURL: 'https://dev-qtyga85kh8fhzaqi.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/login', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// app.get("/",(req,res)=>{
//     res.send("hello")
// })


// app.listen('3000',(req,res)=>{
//     console.log("yes");
// })


// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   baseURL: 'http://localhost:3000',
//   clientID: '{yourClientId}',
//   issuerBaseURL: 'https://{yourDomain}',
//   secret: 'LONG_RANDOM_STRING'
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
// });
 





////////

// var router = require('express').Router();
// const { requiresAuth } = require('express-openid-connect');

// router.get('/', function (req, res, next) {
//   res.render('index', {
//     title: 'Auth0 Webapp sample Nodejs',
//     isAuthenticated: req.oidc.isAuthenticated()
//   });
// });

// router.get('/profile', requiresAuth(), function (req, res, next) {
//   res.render('profile', {
//     userProfile: JSON.stringify(req.oidc.user, null, 2),
//     title: 'Profile page'
//   });
// });

// module.exports = router;

// ///////





// dotenv.load();

// // const app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.json());

// const config = {
//   authRequired: false,
//   auth0Logout: true
// };

// // const port = process.env.PORT || 3000;
// if (!config.baseURL && !process.env.BASE_URL && process.env.PORT && process.env.NODE_ENV !== 'production') {
//   config.baseURL = `http://localhost:${port}`;
// }

// app.use(auth(config));

// // Middleware to make the `user` object available for all views
// app.use(function (req, res, next) {
//   res.locals.user = req.oidc.user;
//   next();
// });

// app.use('/', router);

// // Catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // Error handlers
// app.use(function (err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: process.env.NODE_ENV !== 'production' ? err : {}
//   });
// });

// /////////////


app.set("view engine",'ejs');
app.use(express.static('public'))

// app

app.get('/',(req,res)=>{
//    res.redirect(`/${uuidV4()}`
// res.send("hi")
res.render("meating")
// )
})

app.get('/about',(req,res)=>{
    res.render('about',{roomId:req.params.room})})
app.get('/services',(req,res)=>{
    res.render('servicesa',{roomId:req.params.room})})
app.get('/contact',(req,res)=>{
    res.render('contact',{roomId:req.params.room})
})

//app.
// app.get("/login",(req,res)=>{
    
// })
app.get('/start',(req,res)=>{
    res.redirect(`/${uuidV4()}`)
 })

app.get('/:room',(req,res)=>{
    res.render('room',{roomId:req.params.room})
})

app.get('/start/:rooms',(req,res)=>{
    console.log(req.params);
    // res.redirect(`/${uuidV4()}`)
    res.render('room'
    ,
    {roomId:req.params.rooms

    }
)

 })
 


// app.get('start/:room',(req,res)=>{
//     res.render('room',{roomId:req.params.room})
// })


//
app.get("*",(req,res)=>{
    const protocol = req.protocol;
const host = req.hostname;
const url = req.orignalUrl;
const port = process.env.port || PORT ;
const PORT = "3000";

const fullUrl = { url:`${protocol}://${host}:${port}${url}`} 

})
//

io.on('connection', (socket)=>{
    console.log("connection done")
    socket.on('join-room', (roomId, userId)=>{
        // console.log(roomId, userId);
        socket.join(roomId)//join every one to roomId
        socket.broadcast.emit('user-connected',userId)//telling every other user except for us that a user  is joined




    })
    socket.on("part",(parts)=>{
        console.log(parts)
        socket.broadcast.emit('parts',parts)
    
    })
    socket.on('user-disconnected',(userId)=>{
        socket.broadcast.emit('user-disconnected',userId)

    })



    // console.log("Connected...");
    // socket.on('message',(msg)=>{
    //     console.log(msg);
    //     socket.broadcast.emit('message',msg);
    //     socket.broadcast.emit('message',msg);

        
    // })


    console.log("Connected...");
    socket.on('message',(msg)=>{
        // console.log(msg);
        // socket.broadcast.emit('message',msg);
        socket.broadcast.emit('message',msg);

        
    })


})

server.listen(3000)

// const http = require('http').createServer(app)
// const io1 =require('socket.io')(http)

// io1.on('connection', (socket)=>{
    // console.log('Connected...')
    // socket.on('message',(msg)=>{
    //     console.log(msg)
    //     socket.broadcast.emit('message',msg)
    // })
// })
