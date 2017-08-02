// import all methods that we are going to use
const express = require ('express');
const logger = require ('morgan');
const path = require ('path');
const bodyParser = require('body-parser');
const methodOverride = require ('method-override');
const cookieParser = require ('cookie-parser');
const session = require ('express-session');
const passport = require ('passport');
const fetch = require('isomorphic-fetch');



//new express appl and have all express methods 
const app = express();
// console.log('hello');
require('dotenv').config();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
}));
// initialize passport - for the password check
app.use(passport.initialize());
app.use(passport.session());
// use express local files
app.use(express.static('public'));
// set up view engine - using ejs
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));
//home routes - home page , call back function with req and response 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})
app.get('/', (req, res) => {
    res.render('index')
});
 const authRoutes = require('./routes/auth-routes');
 app.use('/auth',authRoutes);
 const notesRoutes = require('./routes/note-routes');
 app.use('/notes',notesRoutes);
 const userRoutes = require('./routes/user-routes');
 app.use('/user', userRoutes);
// const uniRoutes = require('./routes/uni-routes');
// app.use('/uni',uniRoutes);

app.use('*', (req, res) =>{
    res.status(400).json({
        message: 'Not found!',
    });
});