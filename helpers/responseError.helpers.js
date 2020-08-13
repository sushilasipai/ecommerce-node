let ResponseError = {
  respondErr: (err, req, res) => {
    return res.status(err.status || 500).json({
      message: err.message || "There was some error",
    });
  },
};

module.exports = ResponseError;
