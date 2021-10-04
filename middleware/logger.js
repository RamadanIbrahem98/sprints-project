// @Desc    Logs request to console
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`,
  );
  req.hello = "Hello World";
  console.log("Middleware ran");
  next();
};

module.exports = logger;
