const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Person = require("./../models/personModel");

passport.use(
    new LocalStrategy(async (USERNAME, PASSWORD, done) => {
      try {
        console.log("Receive credentials:", USERNAME, PASSWORD);
        const user = await Person.findOne({ username: USERNAME });
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }
        console.log(user.password)
        //const isPasswordMatch = user.password === PASSWORD ? true : false;
        const isPasswordMatch =await user.comparePassword(PASSWORD);
        if (isPasswordMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect password" });
        }
      } catch (error) {
        return done(error);
      }
    })
  );
  
module.exports= passport;
