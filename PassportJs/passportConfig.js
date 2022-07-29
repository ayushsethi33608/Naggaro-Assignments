const passport = require('passport');
const { User } = require('./database');

const LocalStrategy=require('passport-local').Strategy;

exports.initializingPassport=(passport) => {
passport.use(new LocalStrategy(async (username,password,done)=>{
try{
    const user=await User.findOne({username});

if(!user) return done(null,false);

if(user.password!==password) return done(null,false);

return done(null,user);
} catch(error){
return done(error,false);
}
}
));


passport.serializeUser((User,done)=>{
    done(null,User.id);
});

passport.deserializeUser(async (id,done)=>{
    try{
        const user=await User.findById(id);

        done(null,user);
    }
    catch(error){
        done(error,false);
    }
});
};
