exports.getLogin = (req, res, next) => {
  res.send("Login page");
};

exports.postLogin = (req, res, next) => {
  res.send("Send login req");
};

exports.getRegister = (req, res, next) => {
  res.send("Register page");
};

exports.postRegister = (req, res, next) => {
  res.send("Send Register req");
};
