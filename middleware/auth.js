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
        const isPasswordMatch = user.password === PASSWORD ? true : false;
        if (isPasswordMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect password" });
        }
      } catch (error) {
        return done(err);
      }
    })
  );
  
module.exports= passport;