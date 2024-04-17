module.exports = ageFilter = (req, res, next) => {
    console.log("Filtering age");
    if (!req.query.age) {
      res.send("Please enter the age");
    } else if (req.query.age < 18) {
      res.send("You cannot access the page");
    } else {
      next();
    }
  };
  
