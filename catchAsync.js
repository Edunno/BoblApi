

module.exports = fn => {
    return (req, res, next) => {
      fn(req, res, next).catch((error) => {
        // send error to db
  
        // this needs to be last
        next(error);
      });
    };
  };

  //Denne kode er lånt af Boblberg